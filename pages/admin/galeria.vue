<script setup lang="ts">
definePageMeta({ layout: 'admin' })

import { galleryService } from '~/modules/gallery/service/gallery.service'

const baseService = galleryService()

const timestamp = (row:any) => {
  const value = row?.createdAt || row?.updatedAt
  const parsed = value ? new Date(value).getTime() : NaN
  const fallback = Number(row?.id)
  return Number.isFinite(parsed) ? parsed : Number.isFinite(fallback) ? fallback : 0
}

const sortRows = (rows:any[]) =>
  [...rows].sort((a,b) => {
    const orderA=Number(a?.order)
    const orderB=Number(b?.order)
    const hasOrderA=Number.isFinite(orderA)&&orderA>0
    const hasOrderB=Number.isFinite(orderB)&&orderB>0

    if(hasOrderA&&hasOrderB&&orderA!==orderB) return orderA-orderB
    if(hasOrderA!==hasOrderB) return hasOrderA?-1:1

    return timestamp(b)-timestamp(a)
  })

const service = {
  ...baseService,
  async list(){
    return sortRows(await baseService.list())
  },
}

const fields=[
  {key:'title',label:'Título'},
  {
    key:'order',
    label:'Ordem',
    type:'number',
    required:false,
    hint:'Opcional. 1 aparece primeiro, 2 em segundo, etc. Se ficar vazio, é usada a ordem do álbum mais recente.'
  },
  {key:'images',label:'Imagens',type:'image-multi'},
  {
    key:'status',
    label:'Estado',
    type:'select',
    options:[
      {value:'published',label:'Publicado'},
      {value:'draft',label:'Rascunho'}
    ]
  }
]
</script>

<template>
  <CmsResourceManager
    :service="service"
    title="Galeria"
    description="Os álbuns mais recentes aparecem primeiro. Podes definir uma ordem manual quando necessário."
    :fields="fields"
    :columns="['title','order','images','status']"
  />
</template>
