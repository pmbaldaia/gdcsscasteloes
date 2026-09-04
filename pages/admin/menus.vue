<script setup lang="ts">
definePageMeta({layout:'admin'})
const service=useResourceService('menus')
const fields=[
  {key:'label',label:'Nome do menu'},
  {key:'url',label:'Destino / endereço'},
  {key:'location',label:'Onde aparece',type:'select',filterable:true,options:[{value:'header',label:'Menu principal'},{value:'footer',label:'Rodapé'}],defaultValue:'header'},
  {key:'order',label:'Posição',type:'number',defaultValue:1},
  {key:'target',label:'Abrir em',type:'select',options:[{value:'_self',label:'Mesma janela'},{value:'_blank',label:'Nova janela'}],defaultValue:'_self'},
  {key:'status',label:'Estado',type:'select',options:[{value:'active',label:'Ativo'},{value:'draft',label:'Oculto'}],defaultValue:'active'}
] as any
</script>
<template><CmsResourceManager :service="service" title="Menus" description="Controla os links apresentados no menu principal e no rodapé do site." :fields="fields" :columns="['label','url','location','order','status']" :show-publish-action="false"/></template>
