<script setup lang="ts">
definePageMeta({ layout: 'admin' })
import { playersService } from '~/modules/players/service/players.service'
const service=playersService(); const fields=[{key:'name',label:'Nome',placeholder:'Nome do jogador'},{key:'img',label:'Imagem',type:'image'},{key:'order',label:'Ordem',type:'number',autoIncrement:true,hint:'Define a posição do jogador no plantel. Ao adicionar, é sugerida automaticamente a próxima ordem.'},{key:'publishedAt',label:'Publicar em',type:'datetime-local',required:false,hint:'Opcional. Sem data, fica visível no site imediatamente. Com data/hora futura, só aparece quando chegar esse momento.'},{key:'status',label:'Estado',type:'select',defaultValue:'published',options:[{value:'published',label:'Publicado'},{value:'draft',label:'Rascunho'}]}]
</script>
<template><CmsResourceManager :service="service" title="Plantel" description="Gere o nome, imagem, ordem e agendamento de revelação dos jogadores apresentados no site." :fields="fields" :columns="['id','name','img','publishedAt','status']" /></template>
