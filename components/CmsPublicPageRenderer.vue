<script setup lang="ts">
const props=defineProps<{pageSlug:string}>()
const {page,blocks}=await usePublicCmsPage(props.pageSlug)
if(!page.value) throw createError({statusCode:404,message:'Página não encontrada'})
const parseAction=(raw:any,index=0)=>{const [label,url,rawStyle]=String(raw||'').split('|');return{label,url:url||'#',style:rawStyle==='secondary'?'secondary':rawStyle==='primary'?'primary':index===0?'primary':'secondary'}}
const features=computed(()=>blocks.value.filter((b:any)=>b.type==='feature'))
const normalBlocks=computed(()=>blocks.value.filter((b:any)=>b.type!=='feature'))
useHead(()=>({title:page.value?.seoTitle||page.value?.title||'GDCSS Castelões',meta:[{name:'description',content:page.value?.metaDescription||''},{name:'robots',content:page.value?.indexable===false?'noindex, nofollow':'index, follow'}],link:page.value?.canonical?[{rel:'canonical',href:page.value.canonical}]:[]}))
</script>
<template>
  <LandingContainer>
    <template v-for="block in normalBlocks" :key="block.id">
      <section v-if="block.type==='hero'" class="home-hero" aria-labelledby="cms-home-hero-title">
        <picture class="home-hero__media" aria-hidden="true"><source v-if="block.image" media="(min-width: 768px)" :srcset="block.image"><img :src="block.mobileImage||block.image||'/img/gdcss-casteloes-tarja.webp'" alt="" fetchpriority="high" decoding="async"></picture>
        <div class="home-hero__overlay" aria-hidden="true"></div>
        <div class="home-hero__content site-shell"><div class="home-hero__copy"><p class="home-hero__eyebrow">{{block.eyebrow}}</p><h1 id="cms-home-hero-title">{{block.title}}</h1><p class="home-hero__description">{{block.content}}</p><div v-if="block.items?.length" class="home-hero__actions"><NuxtLink v-for="(raw,index) in block.items" :key="`${block.id}-${index}`" :to="parseAction(raw,index).url" :class="['home-hero__button',parseAction(raw,index).style==='secondary'?'home-hero__button--secondary':'home-hero__button--primary']">{{parseAction(raw,index).label}}<Icon name="lucide:arrow-right" size="17" /></NuxtLink></div></div><a class="home-hero__scroll" href="#conteudo-principal" aria-label="Ver mais conteúdo"><span>Descobrir</span><Icon name="lucide:chevron-down" size="20" /></a></div>
      </section>

      <section v-else-if="block.type==='section-header' && block.key==='features-header'" id="conteudo-principal">
        <div class="mt-16 pt-5 pb-8 md:pt-8 px-4 sm:px-4 md:px-8 max-w-screen-xl mx-auto"><h2 class="text-fluid-2xl font-bold lg:tracking-tight text-neutral-900">{{block.title}}</h2><p class="text-neutral-600 mt-2">{{block.content}}</p></div>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-8 gap-16 pt-5 pb-8 md:pt-8 px-4 sm:px-4 md:px-8 max-w-screen-xl mx-auto"><div v-for="(item,index) in features" :key="item.id" class="flex gap-4 items-start"><div :class="['mt-1 rounded-full p-2 w-8 h-8 shrink-0',index%2===0?'bg-primary-800':'bg-secondary-800']"><Icon class="text-white" :name="item.icon||'mdi:soccer'" /></div><div><h3 class="font-semibold text-fluid-lg text-neutral-900">{{item.title}}</h3><p class="text-neutral-600 mt-2 leading-relaxed">{{item.content}}</p></div></div></div>
      </section>

      <LandingSectionhead v-else-if="block.type==='page-header'"><template #title><div class="flex flex-col items-center"><span class="text-neutral-900">{{block.title}}</span><div class="mt-5 w-32 h-px flex rounded-sm overflow-hidden"><div class="w-1/2 bg-secondary-500"></div><div class="w-1/2 bg-primary-700"></div></div></div></template><template #desc><span class="text-neutral-600 whitespace-pre-line">{{block.content}}</span></template></LandingSectionhead>

      <section v-else-if="['text','text-image','image-text'].includes(block.type)" class="cms-public-block py-10 sm:py-14"><div :class="['grid gap-8 items-center',block.type==='text'?'grid-cols-1':'md:grid-cols-2']"><div :class="block.type==='image-text'?'md:order-2':''"><p v-if="block.eyebrow" class="text-sm font-bold uppercase tracking-wider text-primary-800 mb-2">{{block.eyebrow}}</p><h2 v-if="block.title" class="text-fluid-2xl font-bold text-neutral-900 mb-4">{{block.title}}</h2><p v-if="block.content" class="text-neutral-600 whitespace-pre-line leading-relaxed">{{block.content}}</p></div><div v-if="block.image" :class="block.type==='image-text'?'md:order-1':''"><SiteImage :src="block.image" :alt="block.title||''" class="w-full rounded-xl" /></div></div></section>

      <section v-else-if="block.type==='games'" class="py-10"><LandingGames :title="block.title||'Próximo Jogo'" /></section>
      <section v-else-if="block.type==='sponsors'" class="py-10"><LandingLogos :title="block.title||'Patrocínios'" /></section>
      <section v-else-if="block.type==='gallery'" class="py-10"><LandingGallery /></section>
      <section v-else-if="block.type==='cta'" class="cms-cta"><div class="cms-cta__inner"><h2>{{block.title}}</h2><p v-if="block.content">{{block.content}}</p><div v-if="block.items?.length" class="cms-cta__actions"><NuxtLink v-for="(raw,index) in block.items" :key="`${block.id}-${index}`" :to="parseAction(raw,index).url" :class="['cms-cta__button',parseAction(raw,index).style==='secondary'?'cms-cta__button--secondary':'cms-cta__button--primary']">{{parseAction(raw,index).label}}<Icon name="lucide:arrow-right" size="17" aria-hidden="true" /></NuxtLink></div></div></section>
    </template>
    <section v-if="!blocks.length" class="py-16 text-center text-neutral-600">Esta página ainda não tem blocos publicados.</section>
  </LandingContainer>
</template>
