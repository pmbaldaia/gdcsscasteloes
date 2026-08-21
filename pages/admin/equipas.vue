<script setup lang="ts">
definePageMeta({ layout: 'admin' })
import { teamsService } from '~/modules/teams/service/teams.service'
const service=teamsService(); const fields=[{key:'name',label:'Nome'},{key:'logo',label:'Logo',type:'image',placeholder:'/logos/equipa.webp'},{key:'status',label:'Estado',type:'select',options:[{value:'published',label:'Publicado'},{value:'draft',label:'Rascunho'}]}]
</script>
<template><CmsResourceManager :service="service" title="Equipas" description="Clubes e caminhos dos logótipos consumidos pelos jogos." :fields="fields" :columns="['name','logo']" /></template>
