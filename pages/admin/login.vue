<script setup lang="ts">
definePageMeta({ layout: "admin-auth" });
const email = ref("");
const password = ref("");
const pending = ref(false);
const error = ref("");
const { login } = useAuth();
onMounted(async () => {
  const raw = window.location.hash.startsWith("#token=")
    ? decodeURIComponent(window.location.hash.slice(7))
    : "";
  if (raw) {
    const { token, me } = useAuth();
    token.value = raw;
    history.replaceState(
      null,
      "",
      window.location.pathname + window.location.search,
    );
    try {
      await me();
      await navigateTo("/admin");
    } catch {
      token.value = null;
    }
  }
});
async function submit() {
  error.value = "";
  pending.value = true;
  try {
    await login(email.value, password.value);
    await navigateTo("/admin");
  } catch (e: any) {
    error.value =
      e?.data?.message || e?.message || "Não foi possível iniciar sessão";
  } finally {
    pending.value = false;
  }
}
</script>
<template>
  <section class="auth-card">
    <img src="/img/logowbg.webp" alt="GDCSS Castelões" class="auth-logo" />
    <p class="eyebrow">Área reservada</p>
    <h1>GDCSS Castelões</h1>
    <p>Inicia sessão para gerir os conteúdos do site.</p>
    <form @submit.prevent="submit" class="auth-form">
      <label class="form-field"
        ><span>Email</span
        ><input
          v-model.trim="email"
          type="email"
          autocomplete="email"
          required /></label
      ><label class="form-field"
        ><span>Palavra-passe</span
        ><input
          v-model="password"
          type="password"
          autocomplete="current-password"
          required
          minlength="8"
      /></label>
      <p v-if="error" class="cms-alert cms-alert--danger">{{ error }}</p>
      <button class="btn btn--primary" :disabled="pending">
        {{ pending ? "A entrar…" : "Entrar" }}
      </button>
    </form>
  </section>
</template>
