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
    heroDesktopImage: '',
    heroMobileImage: '',
  }

  data.value.heroDesktopImage ||= ''
  data.value.heroMobileImage ||= ''
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
      'Os dados gerais e as imagens da página principal foram atualizados.'
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
          Dados gerais e apresentação da página principal do site.
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
        <header class="settings-section__header">
          <div>
            <p class="eyebrow">Página principal</p>
            <h2>Hero banner</h2>
            <p>
              Define imagens diferentes para desktop e telemóvel. O site escolhe
              automaticamente a versão adequada ao tamanho do ecrã.
            </p>
          </div>
        </header>

        <div class="hero-settings-grid">
          <CmsSingleImagePicker
            v-model="data.heroDesktopImage"
            label="Imagem desktop"
            recommended="Recomendado: 1920 × 1080 px ou superior · formato horizontal"
          />

          <CmsSingleImagePicker
            v-model="data.heroMobileImage"
            label="Imagem mobile"
            recommended="Recomendado: 1080 × 1350 px ou 1080 × 1920 px · formato vertical"
          />
        </div>

        <div class="cms-alert cms-alert--info hero-settings-note">
          <Icon name="lucide:info" size="18" />
          <span>
            Se uma das imagens não estiver definida, o site utiliza automaticamente
            a imagem disponível ou o banner atual como fallback.
          </span>
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
