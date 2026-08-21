<script setup lang="ts">
definePageMeta({ layout: 'admin' })
import { eventsService } from '~/modules/events/service/events.service'
const service=eventsService(); const fields=[{key:'nome',label:'Nome'},{key:'slug',label:'Slug'},{key:'data',label:'Data'},{key:'hora',label:'Hora'},{key:'local',label:'Local'},{key:'imagem',label:'Imagem',type:'image'},{key:'descricao',label:'Descrição',type:'textarea'},{key:'detalhes',label:'Detalhes',type:'textarea'},{key:'status',label:'Estado',type:'select',options:[{value:'published',label:'Publicado'},{value:'draft',label:'Rascunho'}]}]
</script>
<template><CmsResourceManager :service="service" title="Eventos" description="Eventos públicos com os mesmos campos utilizados no site." :fields="fields" :columns="['nome','imagem','data','local','status']" /></template>
