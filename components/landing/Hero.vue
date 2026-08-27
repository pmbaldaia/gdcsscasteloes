<script setup>
import { useSiteSettings } from "~/modules/settings/useSiteSettings";
const { settings } = await useSiteSettings()

const fallbackImage = '/img/gdcss-casteloes-tarja.webp'

const desktopImage = computed(() =>
  settings.value?.heroDesktopImage ||
  settings.value?.heroMobileImage ||
  fallbackImage
)

const mobileImage = computed(() =>
  settings.value?.heroMobileImage ||
  settings.value?.heroDesktopImage ||
  fallbackImage
)

const heroEyebrow = computed(() => settings.value?.heroEyebrow || 'G.D.C.S.S. Castelões')
const heroTitle = computed(() => settings.value?.heroTitle || 'Bem-vindo ao site oficial do G.D.C.S.S. Castelões')
const heroDescription = computed(() => settings.value?.heroDescription || 'Celebrando com orgulho 41 anos de história, dedicação e conquistas, o G.D.C.S.S. Castelões foi fundado a 11 de abril de 1984, na nossa amada freguesia de Castelões. Venha fazer parte dessa jornada, repleta de momentos inesquecíveis e vitórias que marcaram a nossa comunidade!')
</script>

<template>
  <section class="home-hero" aria-labelledby="home-hero-title">
    <picture class="home-hero__media" aria-hidden="true">
      <source media="(min-width: 768px)" :srcset="desktopImage">
      <img
        :src="mobileImage"
        alt=""
        fetchpriority="high"
        decoding="async"
      >
    </picture>

    <div class="home-hero__overlay" aria-hidden="true"></div>

    <div class="home-hero__content site-shell">
      <div class="home-hero__copy">
        <p class="home-hero__eyebrow">{{ heroEyebrow }}</p>

        <h1 id="home-hero-title">
          {{ heroTitle }}
        </h1>

        <p class="home-hero__description">
          {{ heroDescription }}
        </p>

        <div class="home-hero__actions">
          <a
            class="home-hero__button home-hero__button--secondary"
            href="/equipa#plantel"
          >
            Plantel
            <Icon name="lucide:arrow-right" size="17" />
          </a>

          <a
            class="home-hero__button home-hero__button--primary"
            href="/equipa#equipa-tecnica"
          >
            Equipa Técnica
            <Icon name="lucide:arrow-right" size="17" />
          </a>
        </div>
      </div>

      <a class="home-hero__scroll" href="#conteudo-principal" aria-label="Ver mais conteúdo">
        <span>Descobrir</span>
        <Icon name="lucide:chevron-down" size="20" />
      </a>
    </div>
  </section>
</template>
