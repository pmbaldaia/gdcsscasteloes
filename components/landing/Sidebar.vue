<script setup>
import {
  PhHouse,
  PhUsersThree,
  PhCalendarCheck,
  PhImages,
  PhCalendar,
} from "@phosphor-icons/vue";
import { useRoute } from "vue-router";

defineProps({
  collapsed: {
    type: Boolean,
    default: false,
  },
});

const route = useRoute();

const links = [
  { name: "Dashboard", icon: PhHouse, to: "/admin" },
  { name: "Equipas", icon: PhUsersThree, to: "/admin/equipas" },
  { name: "Jornadas", icon: PhCalendarCheck, to: "/admin/jornadas" },
  { name: "Galeria", icon: PhImages, to: "/admin/galeria" },
  { name: "Eventos", icon: PhCalendar, to: "/admin/eventos" },
];

const isActive = (to) => route.path === to;
</script>

<template>
  <aside
    :class="[
      'flex flex-col bg-white border-r border-slate-200 shadow-sm min-h-screen transition-[width] duration-300',
      collapsed ? 'w-16 items-center' : 'w-64 items-start',
    ]"
  >
    <div
      :class="[
        'flex items-center h-16 border-b border-slate-200 px-4 font-bold text-slate-800 w-full mt-2 justify-center',
      ]"
    >
      <NuxtImg
        src="/img/logowbg.webp"
        alt="Logo GDCSS Castelões"
        width="56"
        height="56"
        sizes="56px"
        :class="collapsed ? 'w-9 h-9 object-contain' : 'w-14 h-auto object-contain'"
      />
    </div>
    <nav
      :class="[
        'flex-1 mt-4 space-y-1 w-full px-3',
        collapsed ? 'flex flex-col items-center' : '',
      ]"
    >
      <NuxtLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        exact
        :aria-current="isActive(link.to) ? 'page' : undefined"
        :class="[
          'group flex items-center gap-3 rounded-lg font-medium transition-colors w-full',
          isActive(link.to)
            ? 'bg-red-800 text-white font-semibold shadow-sm'
            : 'text-slate-700 hover:bg-green-800 hover:text-white',
          collapsed ? 'justify-center px-0 py-3' : 'justify-start px-3 py-2.5',
        ]"
      >
        <component
          :is="link.icon"
          class="w-5 h-5 shrink-0"
          weight="bold"
          :class="[
            isActive(link.to)
              ? 'text-white'
              : 'text-slate-600 group-hover:text-white',
          ]"
        />

        <span v-if="!collapsed" class="text-fluid-sm">{{ link.name }}</span>
      </NuxtLink>
    </nav>
  </aside>
</template>
