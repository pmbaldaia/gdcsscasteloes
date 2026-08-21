<script setup lang="ts">
import { mediaService } from '~/modules/media/service/media.service'

type SelectOption = string | number | boolean | { value: string | number | boolean; label: string }
interface Field {
  key: string
  label: string
  type?: 'text'|'date'|'time'|'datetime-local'|'textarea'|'number'|'select'|'array'|'image'|'email'|'password'
  options?: SelectOption[]
  placeholder?: string
  required?: boolean
  filterable?: boolean
  defaultValue?: any
  autoIncrement?: boolean
  hint?: string
  readonly?: boolean
}
interface ResourceService {
  list(): Promise<any[]>
  create(payload:any): Promise<any>
  update(id:string|number,payload:any): Promise<any>
  remove(id:string|number): Promise<void>
}
const props=withDefaults(defineProps<{
  service: ResourceService
  title: string
  description: string
  fields: Field[]
  columns?: string[]
  publishKey?: string
  showSearch?: boolean
  allowCreate?: boolean
  allowEdit?: boolean
  allowDelete?: boolean
  panelNote?: string
  emptyText?: string
}>(), { publishKey: 'status', showSearch: true, allowCreate: true, allowEdit: true, allowDelete: true, panelNote: 'As alterações guardadas aqui são refletidas no site público.', emptyText: 'Adiciona o primeiro registo para começar.' })

const route=useRoute()
const router=useRouter()
const items=ref<any[]>([])
const pending=ref(false)
const error=ref('')
const success=ref('')
const query=ref('')
const filters=ref<Record<string, any>>(Object.fromEntries(props.fields.filter(f=>f.filterable).map(f=>[f.key,''])))
const editing=ref<any|null>(null)
const editingId=ref<string|number|null>(null)
const modalOpen=ref(false)
const saving=ref(false)
const uploadBusy=ref<Record<string,boolean>>({})

const visibleColumns=computed(()=>props.columns?.length?props.columns:props.fields.slice(0,4).map(f=>f.key))
const filterFields=computed(()=>props.fields.filter(f=>f.filterable))
const isPublishable=computed(()=>props.fields.some(f=>f.key===props.publishKey))

const normalizedOption=(option:SelectOption)=> typeof option==='object' && option!==null && 'value' in option
  ? option
  : { value: option, label: String(option) }
const optionLabel=(field:Field,value:any)=>{
  const match=(field.options||[]).map(normalizedOption).find(o=>String(o.value)===String(value))
  return match?.label ?? value
}
const fieldLabel=(key:string)=>props.fields.find(f=>f.key===key)?.label||key
const toLocalDateTimeInput=(value:any)=>{
  if(!value) return ''
  const date=new Date(value)
  if(Number.isNaN(date.getTime())) return String(value).slice(0,16)
  const offset=date.getTimezoneOffset()*60000
  return new Date(date.getTime()-offset).toISOString().slice(0,16)
}
const formatDateTime=(value:any)=>{
  if(!value) return '—'
  const date=new Date(value)
  if(Number.isNaN(date.getTime())) return value
  return new Intl.DateTimeFormat('pt-PT',{dateStyle:'short',timeStyle:'short'}).format(date)
}
const display=(item:any,key:string)=>{
  const v=item[key]
  const field=props.fields.find(f=>f.key===key)
  if(Array.isArray(v)) return v.join(' · ')
  if(field?.type==='select') return optionLabel(field,v)
  if(field?.type==='datetime-local') return formatDateTime(v)
  if(typeof v==='boolean') return v?'Sim':'Não'
  return v??'—'
}

const filteredItems=computed(()=>{
  const q=query.value.trim().toLowerCase()
  return items.value.filter(item=>{
    if(q && !Object.values(item).some(v=>String(Array.isArray(v)?v.join(' '):v??'').toLowerCase().includes(q))) return false
    for(const field of filterFields.value){
      const selected=filters.value[field.key]
      if(selected!==undefined && selected!==null && selected!=='' && String(item[field.key]??'')!==String(selected)) return false
    }
    return true
  })
})

async function load(){
  pending.value=true; error.value=''
  try{ items.value=await props.service.list() }
  catch(e:any){ error.value=e?.data?.message||e?.statusMessage||e?.message||'Erro ao carregar os dados.' }
  finally{ pending.value=false }
}
function empty(){
  return Object.fromEntries(props.fields.map(f=>{
    if(f.autoIncrement){
      const max=Math.max(0,...items.value.map(item=>Number(item[f.key]||0)).filter(Number.isFinite))
      return [f.key,max+1]
    }
    if(f.defaultValue!==undefined) return [f.key,typeof f.defaultValue==='function'?f.defaultValue():f.defaultValue]
    return [f.key,f.type==='array'?[]:'']
  }))
}
function create(){
  editingId.value=null
  editing.value=empty()
  modalOpen.value=true
  error.value=''
}
function edit(item:any){
  editingId.value=item.id
  editing.value=JSON.parse(JSON.stringify(item))
  for(const field of props.fields){
    if(field.type==='datetime-local') editing.value[field.key]=toLocalDateTimeInput(editing.value[field.key])
  }
  modalOpen.value=true
  error.value=''
}
function close(){
  modalOpen.value=false
  editing.value=null
  editingId.value=null
  error.value=''
  if(route.query.new) router.replace({query:{...route.query,new:undefined}})
}
function validate(payload:any){
  for(const f of props.fields){
    if(f.required===false) continue
    if(['text','email','password','date','time','datetime-local','select'].includes(f.type||'text') && !String(payload[f.key]??'').trim()) return `${f.label} é obrigatório.`
    if(f.type==='array' && (!Array.isArray(payload[f.key]) || !payload[f.key].filter(Boolean).length)) return `${f.label} é obrigatório.`
  }
  return ''
}
async function submit(){
  if(!editing.value) return
  const payload={...editing.value}
  delete payload.id
  delete payload.createdAt
  delete payload.updatedAt
  for(const f of props.fields){
    if(f.type==='array'&&typeof payload[f.key]==='string') payload[f.key]=payload[f.key].split('\n').map((x:string)=>x.trim()).filter(Boolean)
    if(f.type==='number'&&payload[f.key]!==''&&payload[f.key]!=null) payload[f.key]=Number(payload[f.key])
    if(f.type==='datetime-local') payload[f.key]=payload[f.key]?new Date(payload[f.key]).toISOString():null
  }
  const validation=validate(payload)
  if(validation){ error.value=validation; return }
  saving.value=true; error.value=''
  try{
    if(editingId.value!==null) await props.service.update(editingId.value,payload)
    else await props.service.create(payload)
    await load()
    success.value=editingId.value!==null?'Registo atualizado com sucesso.':'Registo criado com sucesso.'
    close()
    setTimeout(()=>success.value='',3000)
  }catch(e:any){
    error.value=e?.data?.message||e?.statusMessage||e?.message||'Não foi possível guardar as alterações.'
  }finally{ saving.value=false }
}
async function del(item:any){
  if(!confirm('Tens a certeza de que queres eliminar este registo? Esta ação não pode ser anulada.')) return
  error.value=''
  try{ await props.service.remove(item.id); await load(); success.value='Registo eliminado com sucesso.'; setTimeout(()=>success.value='',3000) }
  catch(e:any){ error.value=e?.data?.message||e?.statusMessage||e?.message||'Não foi possível eliminar o registo.' }
}
async function togglePublish(item:any){
  const key=props.publishKey
  const current=item[key]
  const next=current==='draft'?'published':'draft'
  try{
    await props.service.update(item.id,{...item,[key]:next})
    await load()
    if(next==='draft') success.value='Conteúdo despublicado.'
    else if(item.publishedAt && new Date(item.publishedAt).getTime()>Date.now()) success.value=`Conteúdo agendado para ${formatDateTime(item.publishedAt)}.`
    else success.value='Conteúdo publicado.'
    setTimeout(()=>success.value='',3000)
  }catch(e:any){ error.value=e?.data?.message||e?.statusMessage||e?.message||'Não foi possível alterar o estado de publicação.' }
}
function arrayInput(key:string,event:Event){ editing.value[key]=(event.target as HTMLTextAreaElement).value }
async function uploadImage(field:Field,event:Event){
  const file=(event.target as HTMLInputElement).files?.[0]
  if(!file)return
  uploadBusy.value[field.key]=true; error.value=''
  try{ const media=mediaService(); const result=await media.upload(file); editing.value[field.key]=result.url; success.value='Imagem carregada com sucesso.' }
  catch(e:any){ error.value=e?.data?.message||e?.message||'Não foi possível carregar a imagem.' }
  finally{ uploadBusy.value[field.key]=false }
}
function clearFilters(){ query.value=''; filters.value=Object.fromEntries(filterFields.value.map(f=>[f.key,''])) }
onMounted(async()=>{ await load(); if(route.query.new==='1') create() })
</script>

<template>
  <div class="page-stack">
    <header class="page-heading">
      <div><p class="eyebrow">GDCSS Castelões · Gestão</p><h1>{{title}}</h1><p class="page-heading__description">{{description}}</p></div>
      <div v-if="allowCreate" class="page-heading__actions"><button class="btn btn--primary" @click="create"><Icon name="lucide:plus"/> Adicionar</button></div>
    </header>

    <p v-if="success" class="cms-alert cms-alert--success">{{success}}</p>
    <p v-if="error" class="cms-alert cms-alert--danger">{{error}}</p>

    <section class="panel content-panel">
      <div class="panel__header content-panel__header">
        <div><h2>{{filteredItems.length}} de {{items.length}} registos</h2><p>{{ panelNote }}</p></div>
        <div class="resource-tools">
          <label v-if="showSearch" class="resource-search"><Icon name="lucide:search"/><input v-model="query" type="search" placeholder="Pesquisar…"></label>
          <label v-for="field in filterFields" :key="field.key" class="resource-filter-wrap">
            <span>{{ field.label }}</span>
            <select v-model="filters[field.key]" class="resource-filter" :aria-label="`Filtrar por ${field.label}`">
              <option value="">Todos</option>
              <option v-for="option in field.options" :key="String(normalizedOption(option).value)" :value="normalizedOption(option).value">{{normalizedOption(option).label}}</option>
            </select>
          </label>
          <button v-if="query || Object.values(filters).some(Boolean)" class="btn btn--ghost" @click="clearFilters"><Icon name="lucide:x"/> Limpar</button>
          <button class="btn btn--secondary" @click="load" :disabled="pending"><Icon name="lucide:refresh-cw"/> Atualizar</button>
        </div>
      </div>

      <div v-if="pending" class="cms-loading">A carregar…</div>
      <div v-else-if="!filteredItems.length" class="empty-state"><Icon name="lucide:inbox" size="30"/><h3>{{query||Object.values(filters).some(Boolean)?'Sem resultados':'Ainda não existem registos'}}</h3><p>{{query||Object.values(filters).some(Boolean)?'Altera a pesquisa ou os filtros.':emptyText}}</p><button v-if="allowCreate&&!query&&!Object.values(filters).some(Boolean)" class="btn btn--primary" @click="create">Adicionar registo</button></div>
      <div v-else class="table-scroll">
        <table class="data-table"><thead><tr><th v-for="c in visibleColumns" :key="c">{{fieldLabel(c)}}</th><th>Ações</th></tr></thead>
          <tbody><tr v-for="item in filteredItems" :key="item.id">
            <td v-for="c in visibleColumns" :key="c"><strong v-if="c===visibleColumns[0]">{{display(item,c)}}</strong><template v-else>{{display(item,c)}}</template></td>
            <td><div class="row-actions">
              <button v-if="isPublishable" class="icon-button icon-button--small" @click="togglePublish(item)" :title="item[publishKey]==='draft'?'Publicar':'Despublicar'"><Icon :name="item[publishKey]==='draft'?'lucide:eye':'lucide:eye-off'"/></button>
              <button v-if="allowEdit" class="icon-button icon-button--small" @click="edit(item)" title="Ver / atualizar"><Icon name="lucide:eye"/></button>
              <button v-if="allowDelete" class="icon-button icon-button--small danger" @click="del(item)" title="Eliminar"><Icon name="lucide:trash-2"/></button>
            </div></td>
          </tr></tbody>
        </table>
      </div>
    </section>

    <div v-if="modalOpen" class="modal-backdrop" @click.self="close">
      <form v-if="editing" class="cms-modal" @submit.prevent="submit">
        <header><div><p class="eyebrow">{{editingId!==null?'Editar registo':'Novo registo'}}</p><h2>{{title}}</h2></div><button type="button" class="icon-button" @click="close"><Icon name="lucide:x"/></button></header>
        <div class="form-grid">
          <label v-for="field in fields" :key="field.key" class="form-field" :class="{'form-field--wide':['textarea','array','image'].includes(field.type||'')}">
            <span>{{field.label}}</span>
            <textarea v-if="field.type==='textarea'" v-model="editing[field.key]" rows="5" :placeholder="field.placeholder" :readonly="field.readonly"/>
            <textarea v-else-if="field.type==='array'" :value="Array.isArray(editing[field.key])?editing[field.key].join('\n'):editing[field.key]" rows="5" placeholder="Um item por linha" @input="arrayInput(field.key,$event)"/>
            <select v-else-if="field.type==='select'" v-model="editing[field.key]" :disabled="field.readonly"><option value="">Selecionar…</option><option v-for="option in field.options" :key="String(normalizedOption(option).value)" :value="normalizedOption(option).value">{{normalizedOption(option).label}}</option></select>
            <template v-else-if="field.type==='image'"><input v-model="editing[field.key]" type="text" :placeholder="field.placeholder||'URL ou caminho da imagem'"><input type="file" accept="image/*" @change="uploadImage(field,$event)"><small v-if="uploadBusy[field.key]">A carregar imagem…</small><img v-if="editing[field.key]" :src="editing[field.key]" alt="Pré-visualização" class="image-preview"></template>
            <input v-else v-model="editing[field.key]" :type="field.type||'text'" :placeholder="field.placeholder" :required="field.required!==false" :readonly="field.readonly"/>
            <small v-if="field.hint" class="form-field__hint">{{field.hint}}</small>
          </label>
        </div>
        <footer><button type="button" class="btn btn--secondary" @click="close">Cancelar</button><button class="btn btn--primary" :disabled="saving">{{saving?'A guardar…':editingId!==null?'Guardar alterações':'Adicionar registo'}}</button></footer>
      </form>
    </div>
  </div>
</template>
