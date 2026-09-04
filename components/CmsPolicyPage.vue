<script setup lang="ts">
const props=defineProps<{pageSlug:string;fallbackTitle:string;fallbackDescription:string}>()
const { blocks }=await useManagedPageContent(props.pageSlug)
const sections=computed(()=>blocks.value.filter((b:any)=>b.type==='policy-section'))
</script>
<template>
  <LandingContainer>
    <CmsManagedPageHeader :page-slug="pageSlug" :fallback-title="fallbackTitle" :fallback-description="fallbackDescription" />
    <div class="mt-8 text-fluid-lg text-neutral-600">
      <section v-for="section in sections" :key="section.id" class="mb-6">
        <h3 v-if="section.title" class="text-fluid-xl font-semibold text-neutral-900 mb-3">{{section.title}}</h3>
        <p v-if="section.content" class="whitespace-pre-line leading-relaxed">{{section.content}}</p>
        <ul v-if="section.items?.length" class="list-disc pl-6 mt-3 space-y-2"><li v-for="(item,index) in section.items" :key="`${section.id}-${index}`">{{item}}</li></ul>
      </section>
    </div>
  </LandingContainer>
</template>
