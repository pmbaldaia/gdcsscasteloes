<script setup>
import { ref, watch, onMounted } from "vue";
import { useColorMode } from "#imports";
import { PhSun, PhMoon, PhArrowLeft, PhArrowRight } from "@phosphor-icons/vue";

const colorMode = useColorMode();
const sidebarCollapsed = ref(false);
const isMounted = ref(false);

onMounted(() => {
  const saved = localStorage.getItem("sidebar-collapsed");
  if (saved !== null) {
    sidebarCollapsed.value = saved === "true";
  }
});

const toggleTheme = () => {
  colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";
};

watch(sidebarCollapsed, (newVal) => {
  localStorage.setItem("sidebar-collapsed", newVal);
});

const toggleSidebar = () => {
  sidebarCollapsed.value = !sidebarCollapsed.value;
};

onMounted(() => {
  isMounted.value = true;
});
</script>

<template>
  <div
    class="flex min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
  >
    <LandingSidebar :collapsed="sidebarCollapsed" />

    <div class="flex flex-col flex-1">
      <header
        class="flex items-center justify-between bg-gray-200 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700 p-4 shadow-sm"
      >
        <div class="flex items-center gap-4">
          <button
            @click="toggleSidebar"
            aria-label="Alternar sidebar"
            class="transition w-8 h-8 flex items-center justify-center rounded focus:outline-none focus:ring-2"
          >
            <PhArrowLeft v-if="!sidebarCollapsed" class="w-6 h-6" />
            <PhArrowRight v-else class="w-6 h-6" />
          </button>
        </div>

        <button
          v-if="isMounted"
          @click="toggleTheme"
          :aria-label="
            colorMode.preference === 'dark'
              ? 'Alternar para tema claro'
              : 'Alternar para tema escuro'
          "
          class="hover:text-green-700 transition w-6 h-6 flex items-center justify-center"
        >
          <PhSun
            v-if="colorMode.preference === 'dark'"
            class="w-6 h-6 text-white"
          />
          <PhMoon v-else class="w-6 h-6 text-gray-900" />
        </button>
      </header>

      <main class="p-6 overflow-auto">
        <slot />
      </main>
    </div>
  </div>
</template>
