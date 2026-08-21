<script setup lang="ts">
definePageMeta({ layout: 'admin' })
import { boardService } from '~/modules/board/service/board.service'
const service=boardService(); const fields=[{key:'nome',label:'Nome'},{key:'funcao',label:'Função'},{key:'img',label:'Imagem',type:'image'},{key:'group',label:'Órgão',type:'select',options:['Assembleia Geral','Direção','Conselho Fiscal']},{key:'status',label:'Estado',type:'select',options:[{value:'published',label:'Publicado'},{value:'draft',label:'Rascunho'}]}]
</script>
<template><CmsResourceManager :service="service" title="Órgãos sociais" description="Assembleia Geral, Direção e Conselho Fiscal, mantendo as secções do site atual." :fields="fields" :columns="['nome','funcao','group','status']" /></template>
