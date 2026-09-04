<script setup>
import { useSiteSettings } from "~/modules/settings/useSiteSettings";
import { PhInstagramLogo, PhFacebookLogo, PhTiktokLogo } from "@phosphor-icons/vue";
import { useMenus } from "~/modules/menus/useMenus";
const { settings } = await useSiteSettings();
const { footer: footerMenus } = await useMenus();
const socialLinks = computed(() => Array.isArray(settings.value.socialLinks) ? settings.value.socialLinks.filter(item => item.visible !== false && item.url) : []);
const socialIcon = (platform = '') => ({ instagram: PhInstagramLogo, facebook: PhFacebookLogo, tiktok: PhTiktokLogo }[String(platform).toLowerCase()] || PhInstagramLogo);</script>

<template>
  <footer
    class="site-footer w-full mt-12 bg-surface border-t border-neutral-200 py-10 sm:py-12 text-neutral-900"
  >
    <div class="site-shell">
      <hr
        class="border-t border-neutral-200 my-6 w-full mx-auto"
      />

      <div class="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-8">
        <div class="flex flex-col h-full justify-start text-left">
          <h3 class="text-fluid-xl font-bold mb-1">{{ settings.footerAboutTitle || 'Sobre' }}</h3>
          <div class="w-[10%] border-b-2 border-secondary-800 mb-3"></div>
          <p class="text-fluid-sm leading-relaxed text-neutral-600">
{{ settings.footerAbout }}
          </p>
        </div>

        <div class="flex flex-col h-full justify-start text-left">
          <h3 class="text-fluid-xl font-bold mb-1">{{ settings.footerLinksTitle || 'Links Úteis' }}</h3>
          <div class="w-[10%] border-b-2 border-secondary-800 mb-3"></div>
          <ul class="space-y-3 text-fluid-sm">
            <li v-for="item in footerMenus" :key="`${item.url}-${item.label}`">
              <NuxtLink
                :to="item.url"
                :target="item.target || '_self'"
                :rel="item.target === '_blank' ? 'noopener noreferrer' : undefined"
                class="transition-colors duration-300 text-neutral-600 hover:text-secondary-800 hover:underline"
              >{{ item.label }}</NuxtLink>
            </li>

          </ul>
        </div>

        <div class="flex flex-col h-full justify-start text-left">
          <h3 class="text-fluid-xl font-bold mb-1">{{ settings.footerSocialTitle || 'Redes Sociais' }}</h3>
          <div class="w-[10%] border-b-2 border-secondary-800 mb-3"></div>
          <ul class="space-y-3 text-fluid-sm">
            <li v-for="social in socialLinks" :key="social.platform">
              <a :href="social.url" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2 text-neutral-600 hover:text-secondary-800 hover:underline transition-colors duration-300" :aria-label="`Aceder a ${social.label || social.platform}`">
                <component :is="socialIcon(social.platform)" class="w-6 h-6 fill-current" />
                <span>{{ social.label || social.platform }}</span>
              </a>
            </li>
          </ul>
        </div>

        <div class="flex flex-col h-full justify-start text-left">
          <h3 class="text-fluid-xl font-bold mb-1">{{ settings.footerContactTitle || 'Contacto' }}</h3>
          <div class="w-[10%] border-b-2 border-secondary-800 mb-3"></div>
          <p v-if="settings.contactEmail" class="text-fluid-sm leading-relaxed text-neutral-600">
            Email:<br />
            <a
              :href="`mailto:${settings.contactEmail}`"
              class="underline transition-colors duration-300 text-neutral-600 hover:text-secondary-800 hover:underline"
              aria-label="Clica aqui para mandar email"
            >
              {{ settings.contactEmail }}
            </a>
          </p>
        </div>
      </div>

      <hr
        class="border-t border-neutral-200 my-6 w-full mx-auto"
      />

      <p class="text-center text-fluid-xs text-neutral-600 mt-8">
        Copyright © {{ new Date().getFullYear() }} {{ settings.clubName || 'GDCSS Castelões' }}. Todos os
        direitos reservados.
      </p>

      <p class="text-center text-fluid-xs text-neutral-600 mt-1">
        Feito por
        <a
          href="https://webcreaterpt.pt"
          target="_blank"
          rel="noopener"
          class="hover:text-secondary-800 hover:underline transition-colors duration-300 text-neutral-600"
          aria-label="Desenvolvedor do site"
        >
          Webcreaterpt
        </a>
      </p>
    </div>
  </footer>
</template>
