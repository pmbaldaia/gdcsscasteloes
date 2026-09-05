<script setup lang="ts">
const props=withDefaults(defineProps<{pageSlug:string;blockKey?:string;fallbackTitle?:string;fallbackDescription?:string}>(),{blockKey:'header',fallbackTitle:'',fallbackDescription:''})
const { value, page, hasManagedPages }=await useManagedPageContent(props.pageSlug)
if(hasManagedPages.value && !page.value) throw createError({statusCode:404,message:'Página não encontrada'})
useHead(()=>({title:page.value?.seoTitle||page.value?.title||props.fallbackTitle,meta:[{name:'description',content:page.value?.metaDescription||props.fallbackDescription},{name:'robots',content:page.value?.indexable===false?'noindex, nofollow':'index, follow'}],link:page.value?.canonical?[{rel:'canonical',href:page.value.canonical}]:[]}))
const title=value(props.blockKey,'title',props.fallbackTitle)
const description=value(props.blockKey,'content',props.fallbackDescription)
</script>
<template>
  <LandingSectionhead>
    <template #title>
      <div class="flex flex-col items-center">
        <span class="text-neutral-900">{{ title }}</span>
        <div class="mt-5 w-32 h-px flex rounded-sm overflow-hidden">
          <div class="w-1/2 bg-secondary-500"></div><div class="w-1/2 bg-primary-700"></div>
        </div>
      </div>
    </template>
    <template #desc><span class="text-neutral-600 whitespace-pre-line">{{ description }}</span></template>
  </LandingSectionhead>
</template>
