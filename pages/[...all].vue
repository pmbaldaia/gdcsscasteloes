<script setup lang="ts">
definePageMeta({layout:'default'})
const route=useRoute()
const slug=computed(()=>Array.isArray(route.params.all)?route.params.all.join('/'):String(route.params.all||''))
</script>
<template><CmsPublicPageRenderer v-if="slug" :key="slug" :page-slug="slug"/></template>
