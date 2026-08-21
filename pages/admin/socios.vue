<script setup lang="ts">
definePageMeta({ layout: 'admin' })
import { membersService } from '~/modules/members/service/members.service'
const service=membersService(); const fields=[{key:'nome',label:'Nome'},{key:'email',label:'Email'},{key:'telefone',label:'Telefone'},{key:'dataAssociacao',label:'Data de associação',type:'date'}]
</script>
<template><CmsResourceManager :service="service" title="Sócios" description="Gestão interna de sócios; estes dados não são expostos na API pública." :fields="fields" :columns="['nome','email','telefone','dataAssociacao']" /></template>
