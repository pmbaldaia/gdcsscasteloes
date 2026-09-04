<script setup lang="ts">
definePageMeta({layout:'admin'})
const service=useResourceService('pages')
const fields=[
  {key:'title',label:'Título'},
  {key:'slug',label:'Endereço da página',hint:'Ex.: historia-do-clube. Não uses espaços.'},
  {key:'status',label:'Estado',type:'select',filterable:true,options:[{value:'draft',label:'Rascunho'},{value:'published',label:'Publicado'},{value:'archived',label:'Arquivado'}],defaultValue:'draft'},
  {key:'seoTitle',label:'Título SEO',required:false},
  {key:'metaDescription',label:'Descrição SEO',type:'textarea',required:false},
  {key:'socialImage',label:'Imagem para partilha',type:'image',required:false},
  {key:'canonical',label:'Endereço canónico',required:false},
  {key:'indexable',label:'Indexação',type:'select',options:[{value:true,label:'Permitir indexação'},{value:false,label:'Não permitir indexação'}],defaultValue:true}
] as any
</script>
<template><CmsResourceManager :service="service" title="Páginas" description="Gere páginas dinâmicas, publicação e informação para motores de pesquisa." :fields="fields" :columns="['title','slug','status']"/></template>
