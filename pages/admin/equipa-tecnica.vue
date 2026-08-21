<script setup lang="ts">
definePageMeta({ layout: 'admin' })
import { staffService } from '~/modules/staff/service/staff.service'
const service=staffService(); const fields=[{key:'name',label:'Nome',placeholder:'Nome do elemento da equipa técnica'},{key:'img',label:'Imagem',type:'image'},{key:'order',label:'Ordem',type:'number'},{key:'status',label:'Estado',type:'select',options:[{value:'published',label:'Publicado'},{value:'draft',label:'Rascunho'}]}]
</script>
<template><CmsResourceManager :service="service" title="Equipa técnica" description="Gere o nome, imagem e estado dos elementos da equipa técnica apresentados no site." :fields="fields" :columns="['id','name','img','status']" /></template>
