<script setup>
import { ref, watch, onMounted } from "vue";
import { PhArrowLeft, PhArrowRight } from "@phosphor-icons/vue";

const sidebarCollapsed = ref(false);

onMounted(() => {
  const saved = localStorage.getItem("sidebar-collapsed");
  if (saved !== null) {
    sidebarCollapsed.value = saved === "true";
  }
});

watch(sidebarCollapsed, (newVal) => {
  localStorage.setItem("sidebar-collapsed", newVal);
});

const toggleSidebar = () => {
  sidebarCollapsed.value = !sidebarCollapsed.value;
};
</script>

<template>
  <div class="flex min-h-screen bg-slate-100 text-slate-900">
    <LandingSidebar :collapsed="sidebarCollapsed" />

    <div class="flex flex-col flex-1 min-w-0">
      <header
        class="flex items-center justify-between bg-white border-b border-slate-200 px-4 py-3 shadow-sm"
      >
        <button
          @click="toggleSidebar"
          aria-label="Alternar menu lateral"
          class="p-2 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-green-700"
        >
          <PhArrowLeft v-if="!sidebarCollapsed" class="w-5 h-5" />
          <PhArrowRight v-else class="w-5 h-5" />
        </button>
      </header>

      <main class="p-4 sm:p-6 overflow-auto flex-1">
        <NuxtPage />
      </main>
    </div>
  </div>
</template>
