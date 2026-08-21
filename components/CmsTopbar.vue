<script setup lang="ts">
defineEmits<{ menu: [] }>();
const search = ref("");
const menuOpen = ref(false);
const router = useRouter();
const { user, logout } = useAuth();
const toast = useToast();
const roleLabel = computed(() => ({ admin: 'Administrador', editor: 'Editor', viewer: 'Leitor' } as Record<string,string>)[user.value?.role || ''] || 'Utilizador')
function submitSearch() {
  const q = search.value.trim();
  if (q) router.push({ path: "/admin/pesquisa", query: { q } });
}
async function handleLogout() {
  menuOpen.value = false;
  toast.info('Sessão terminada', 'Até breve.')
  await logout()
}
function help() {
  window.open(
    "https://gdcsscasteloes.pt/contacto",
    "_blank",
    "noopener,noreferrer",
  );
}
</script>
<template>
  <header class="cms-topbar">
    <div class="topbar-left">
      <button
        class="icon-button mobile-menu"
        type="button"
        aria-label="Abrir menu"
        @click="$emit('menu')"
      >
        <Icon name="lucide:menu" size="20" />
      </button>
      <form class="topbar-search" @submit.prevent="submitSearch">
        <Icon name="lucide:search" size="17" /><input
          v-model="search"
          type="search"
          placeholder="Pesquisar conteúdos…"
          aria-label="Pesquisar conteúdos"
        /><kbd>↵</kbd>
      </form>
    </div>
    <div class="topbar-actions">
      <button
        class="icon-button"
        type="button"
        aria-label="Ajuda"
        @click="help"
      >
        <Icon name="lucide:circle-help" size="19" /></button
      ><NuxtLink
        to="/admin/mensagens"
        class="icon-button notification-button"
        aria-label="Mensagens"
        ><Icon name="lucide:mail" size="19" /></NuxtLink
      ><button class="user-menu" type="button" @click="menuOpen = !menuOpen">
        <span class="user-menu__avatar">{{
          (user?.name || "AD").slice(0, 2).toUpperCase()
        }}</span
        ><span class="user-menu__copy"
          ><strong>{{ user?.name || "Administrador" }}</strong
          ><small>{{ roleLabel }}</small></span
        ><Icon name="lucide:chevron-down" size="15" />
      </button>
      <div v-if="menuOpen" class="user-dropdown">
        <NuxtLink to="/admin/definicoes" @click="menuOpen = false"
          ><Icon name="lucide:settings" /> Definições</NuxtLink
        ><button type="button" @click="handleLogout">
          <Icon name="lucide:log-out" /> Terminar sessão
        </button>
      </div>
    </div>
  </header>
</template>
