<script setup>
const { value } = await useManagedPageContent('inicio')
const fallbackImage='/img/gdcss-casteloes-tarja.webp'
const desktopImage=value('hero','image',fallbackImage)
const mobileImage=value('hero','mobileImage',fallbackImage)
const heroEyebrow=value('hero','eyebrow','G.D.C.S.S. Castelões')
const heroTitle=value('hero','title','Bem-vindo ao site oficial do G.D.C.S.S. Castelões')
const heroDescription=value('hero','content','Celebrando com orgulho 41 anos de história, dedicação e conquistas, o G.D.C.S.S. Castelões foi fundado a 11 de abril de 1984, na nossa amada freguesia de Castelões.')
const heroItems=value('hero','items',['Plantel|/equipa#plantel|secondary','Equipa Técnica|/equipa#equipa-tecnica|primary'])
const parseAction=(raw,index)=>{const [label,url,style]=String(raw||'').split('|');return{label,url:url||'#',style:style|| (index===0?'primary':'secondary')}}
</script>
<template>
  <section class="home-hero" aria-labelledby="home-hero-title">
    <picture class="home-hero__media" aria-hidden="true"><source media="(min-width: 768px)" :srcset="desktopImage"><img :src="mobileImage||desktopImage" alt="" fetchpriority="high" decoding="async"></picture>
    <div class="home-hero__overlay" aria-hidden="true"></div>
    <div class="home-hero__content site-shell"><div class="home-hero__copy"><p class="home-hero__eyebrow">{{heroEyebrow}}</p><h1 id="home-hero-title">{{heroTitle}}</h1><p class="home-hero__description">{{heroDescription}}</p><div class="home-hero__actions"><NuxtLink v-for="(raw,index) in heroItems" :key="index" :to="parseAction(raw,index).url" :class="['home-hero__button',parseAction(raw,index).style==='secondary'?'home-hero__button--secondary':'home-hero__button--primary']">{{parseAction(raw,index).label}}<Icon name="lucide:arrow-right" size="17" /></NuxtLink></div></div><a class="home-hero__scroll" href="#conteudo-principal" aria-label="Ver mais conteúdo"><span>Descobrir</span><Icon name="lucide:chevron-down" size="20" /></a></div>
  </section>
</template>
