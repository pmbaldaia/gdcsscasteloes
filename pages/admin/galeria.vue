<script setup lang="ts">
definePageMeta({ layout: 'admin' })
import { galleryService } from '~/modules/gallery/service/gallery.service'
const service=galleryService(); const fields=[{key:'title',label:'Título'},{key:'images',label:'Imagens',type:'array'},{key:'status',label:'Estado',type:'select',options:[{value:'published',label:'Publicado'},{value:'draft',label:'Rascunho'}]}]
</script>
<template><CmsResourceManager :service="service" title="Galeria" description="Álbuns e imagens mantendo a estrutura categories do frontend." :fields="fields" :columns="['title','images','status']" /></template>
