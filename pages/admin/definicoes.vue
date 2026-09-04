<script setup lang="ts">
definePageMeta({ layout: 'admin' })

import { settingsService } from '~/modules/settings/service/settings.service'

const { user } = useAuth()
const isAdmin = computed(() => user.value?.role === 'admin')
const service = settingsService()
const toast = useToast()

const data = ref<any>(null)
const pending = ref(false)
const error = ref('')

async function load() {
  const rows = await service.list()
  data.value = rows[0] || {
    id: 'club',
    clubName: 'GDCSS Castelões',
    contactEmail: '',
  }

  data.value.socialLinks ||= [
    { platform: 'facebook', label: 'Facebook', url: 'https://www.facebook.com/gdcscasteloes/', visible: true },
    { platform: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/gdcsscasteloes/', visible: true },
    { platform: 'tiktok', label: 'TikTok', url: 'https://www.tiktok.com/@gdcss.casteloes', visible: true },
  ]
  data.value.footerAboutTitle ||= 'Sobre'
  data.value.footerLinksTitle ||= 'Links Úteis'
  data.value.footerSocialTitle ||= 'Redes Sociais'
  data.value.footerContactTitle ||= 'Contacto'
  data.value.footerAbout ||= 'Nós, enquanto equipa, temos a visão de procurar sempre a vitória e sermos os melhores em tudo o que fazemos. Treinamos com dedicação e foco para alcançar o topo e demonstrar a nossa paixão pelo futebol em cada jogo.' 
}

async function save() {
  pending.value = true
  error.value = ''

  try {
    if (data.value.id) {
      await service.update(data.value.id, data.value)
    } else if (isAdmin.value) {
      data.value = await service.create(data.value)
    } else {
      throw new Error('Apenas um administrador pode criar as definições iniciais.')
    }

    await refreshNuxtData('gdcss-public-settings')
    toast.success(
      'Definições guardadas',
      'Os dados gerais foram atualizados com sucesso.'
    )
  } catch (e: any) {
    error.value = e?.data?.message || e.message
    toast.error('Erro ao guardar', error.value)
  } finally {
    pending.value = false
  }
}

onMounted(load)
</script>

<template>
  <div class="page-stack">
    <header class="page-heading">
      <div>
        <p class="eyebrow">Sistema</p>
        <h1>Definições</h1>
        <p class="page-heading__description">
          Dados gerais utilizados no site e no CMS.
        </p>
      </div>
    </header>

    <p v-if="error" class="cms-alert cms-alert--danger">{{ error }}</p>

    <form v-if="data" class="settings-page" @submit.prevent="save">
      <section class="panel settings-section">
        <header class="settings-section__header">
          <div>
            <p class="eyebrow">Clube</p>
            <h2>Dados gerais</h2>
            <p>Informação base utilizada no site e no CMS.</p>
          </div>
        </header>

        <div class="settings-form">
          <label class="form-field">
            <span>Nome do clube</span>
            <input v-model="data.clubName" required>
          </label>

          <label class="form-field">
            <span>Email de contacto</span>
            <input v-model="data.contactEmail" type="email" required>
          </label>
        </div>
      </section>


      <section class="panel settings-section">
        <header class="settings-section__header"><div><p class="eyebrow">Rodapé</p><h2>Conteúdo e redes sociais</h2><p>Informação apresentada no rodapé e nos atalhos sociais do menu.</p></div></header>
        <div class="settings-form">
          <label class="form-field"><span>Título “Sobre”</span><input v-model="data.footerAboutTitle"></label>
          <label class="form-field"><span>Título “Links úteis”</span><input v-model="data.footerLinksTitle"></label>
          <label class="form-field"><span>Título “Redes sociais”</span><input v-model="data.footerSocialTitle"></label>
          <label class="form-field"><span>Título “Contacto”</span><input v-model="data.footerContactTitle"></label>
          <label class="form-field" style="grid-column:1/-1"><span>Texto “Sobre”</span><textarea v-model="data.footerAbout" rows="5" /></label>
          <div v-for="(social, index) in data.socialLinks" :key="social.platform || index" class="settings-form" style="grid-column:1/-1">
            <label class="form-field"><span>Rede social</span><input v-model="social.label"></label>
            <label class="form-field"><span>URL</span><input v-model="social.url" type="url"></label>
            <label class="form-field"><span><input v-model="social.visible" type="checkbox"> Visível no site</span></label>
          </div>
        </div>
      </section>

      <div class="settings-page__actions">
        <button class="btn btn--primary" :disabled="pending">
          <Icon :name="pending ? 'lucide:loader-circle' : 'lucide:save'" />
          {{ pending ? 'A guardar…' : 'Guardar definições' }}
        </button>
      </div>
    </form>
  </div>
</template>
