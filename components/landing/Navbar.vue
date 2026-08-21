<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from "vue";
import {
  PhInstagramLogo,
  PhFacebookLogo,
  PhTiktokLogo,
  PhList,
  PhX,
} from "@phosphor-icons/vue";
import { useRoute } from "vue-router";

const { isDark } = useThemeMode();
const open = ref(false);
const scrolled = ref(false);
const route = useRoute();

const isHome = computed(() => route.path === "/" || route.path === "");
const overlaysHero = computed(() => isHome.value && !scrolled.value && !open.value);

const menuitems = [
  { title: "Sobre nós", path: "/sobre/" },
  { title: "Equipa", path: "/equipa/" },
  { title: "Calendário", path: "/calendario/" },
  { title: "Eventos", path: "/eventos/" },
  { title: "Galeria", path: "/galeria/" },
  { title: "Oportunidades", path: "/oportunidades/" },
];

const isActive = (item) =>
  item.path === "/eventos/"
    ? route.path === "/eventos/" || route.path.startsWith("/eventos/")
    : route.path === item.path;

function updateScrollState() {
  scrolled.value = window.scrollY > 0;
}

onMounted(() => {
  updateScrollState();
  window.addEventListener("scroll", updateScrollState, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", updateScrollState);
});

watch(() => route.path, () => {
  open.value = false;
  if (import.meta.client) updateScrollState();
});
</script>

<template>
  <LandingContainer>
    <header
      :class="[
        'site-navbar fixed top-0 left-0 right-0 z-50',
        { 'site-navbar--hero': overlaysHero, 'site-navbar--scrolled': scrolled }
      ]"
    >
      <div
        :class="[
          'site-shell flex flex-col lg:flex-row justify-between items-center py-3.5 sm:py-4',
          { 'site-navbar__content--hero': overlaysHero }
        ]"
      >
        <div class="flex w-full lg:w-auto items-center justify-between">
          <a href="/" class="shrink-0" aria-label="Logo Castelões">
            <NuxtImg
              class="brand-logo-original transition-transform duration-300 hover:scale-105 w-14 h-14 sm:w-16 sm:h-16 lg:w-[4.5rem] lg:h-[4.5rem]"
              src="/img/logotipo.webp"
              alt="Logo GDCSS Castelões"
              width="80"
              height="80"
              sizes="80px"
              preload
              fetchpriority="high"
            />
          </a>

          <div class="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              @click="open = !open"
              class="text-neutral-900 p-2 rounded-lg hover:bg-neutral-50 transition-colors"
              :aria-expanded="open"
              aria-label="Menu"
            >
              <PhX v-if="open" class="w-6 h-6" />
              <PhList v-else class="w-6 h-6" />
            </button>
          </div>
        </div>

        <nav
          class="w-full lg:w-auto lg:flex lg:items-center"
          :class="open ? 'block' : 'hidden lg:block'"
        >
          <ul
            class="flex flex-col items-center text-center lg:flex-row lg:gap-1 py-4 lg:py-0 border-t border-neutral-50 lg:border-0 mt-2 lg:mt-0"
          >
            <li v-for="item in menuitems" :key="item.path">
              <NuxtLink
                :to="item.path"
                @click="open = false"
                :aria-current="isActive(item) ? 'page' : undefined"
                :class="[
                  'block lg:px-3 py-2.5 text-fluid-sm font-medium rounded-lg transition-colors duration-200',
                  isActive(item)
                    ? 'text-primary-900 bg-primary-50 lg:bg-transparent lg:border-b-2 lg:border-primary-800 lg:rounded-none'
                    : 'text-neutral-600 hover:text-primary-900 hover:bg-neutral-50 lg:hover:bg-transparent',
                ]"
              >
                {{ item.title }}
              </NuxtLink>
            </li>
          </ul>

          <div
            class="lg:hidden flex justify-center items-center pb-4 gap-5 w-full"
          >
            <a
              href="https://www.instagram.com/gdcsscasteloes/"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              class="text-neutral-600 hover:text-primary-800 transition-colors"
            >
              <PhInstagramLogo class="w-6 h-6" />
            </a>
            <a
              href="https://www.facebook.com/gdcscasteloes/"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              class="text-neutral-600 hover:text-primary-800 transition-colors"
            >
              <PhFacebookLogo class="w-6 h-6" />
            </a>
            <a
              href="https://www.tiktok.com/@gdcss.casteloes"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              class="text-neutral-600 hover:text-primary-800 transition-colors"
            >
              <PhTiktokLogo class="w-6 h-6" />
            </a>
          </div>
        </nav>

        <div class="hidden lg:flex items-center gap-3 shrink-0">
          <ThemeToggle />
          <span class="h-5 w-px bg-neutral-200" aria-hidden="true"></span>
          <a
            href="https://www.instagram.com/gdcsscasteloes/"
            target="_blank"
            aria-label="Instagram"
            class="text-neutral-600 hover:text-primary-800 transition-colors"
          >
            <PhInstagramLogo class="w-5 h-5" />
          </a>
          <a
            href="https://www.facebook.com/gdcscasteloes/"
            target="_blank"
            aria-label="Facebook"
            class="text-neutral-600 hover:text-primary-800 transition-colors"
          >
            <PhFacebookLogo class="w-5 h-5" />
          </a>
          <a
            href="https://www.tiktok.com/@gdcss.casteloes"
            target="_blank"
            aria-label="Instagram"
            class="text-neutral-600 hover:text-primary-800 transition-colors"
          >
            <PhTiktokLogo class="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  </LandingContainer>
</template>
