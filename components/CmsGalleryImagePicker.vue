<script setup lang="ts">
import { mediaService, type MediaItem } from '~/modules/media/service/media.service'

const props = withDefaults(defineProps<{
  modelValue?: string[]
}>(), {
  modelValue: () => [],
})

const emit = defineEmits<{
  'update:modelValue': [value: string[]]
}>()

const toast = useToast()
const media = mediaService()

const libraryOpen = ref(false)
const library = ref<MediaItem[]>([])
const libraryPending = ref(false)
const uploading = ref(false)
const selectedLibraryUrls = ref<string[]>([])
const search = ref('')
const draggedImageIndex = ref<number | null>(null)

const images = computed(() => Array.isArray(props.modelValue) ? props.modelValue : [])

const imageLibrary = computed(() => {
  const q = search.value.trim().toLowerCase()
  return library.value.filter(item => {
    if (item.name.toLowerCase().endsWith('.pdf')) return false
    if (!q) return true
    return item.name.toLowerCase().includes(q)
  })
})

const isSelected = (url: string) => images.value.includes(url)

function setImages(next: string[]) {
  emit('update:modelValue', [...new Set(next.filter(Boolean))])
}

function removeImage(url: string) {
  setImages(images.value.filter(item => item !== url))
}

function moveImage(from: number, to: number) {
  if (from === to || from < 0 || to < 0 || from >= images.value.length || to >= images.value.length) return
  const next = [...images.value]
  const [image] = next.splice(from, 1)
  next.splice(to, 0, image)
  setImages(next)
}

function startDragging(index: number) {
  draggedImageIndex.value = index
}

function dropImage(index: number) {
  if (draggedImageIndex.value !== null) moveImage(draggedImageIndex.value, index)
  draggedImageIndex.value = null
}

async function openLibrary() {
  libraryOpen.value = true
  search.value = ''
  selectedLibraryUrls.value = []
  libraryPending.value = true
  try {
    library.value = await media.list()
  } catch (error: any) {
    toast.error(
      'Erro ao carregar a Multimédia',
      error?.data?.message || error?.message || 'Não foi possível consultar os ficheiros.'
    )
  } finally {
    libraryPending.value = false
  }
}

function toggleLibraryItem(url: string) {
  if (isSelected(url)) return

  selectedLibraryUrls.value = selectedLibraryUrls.value.includes(url)
    ? selectedLibraryUrls.value.filter(item => item !== url)
    : [...selectedLibraryUrls.value, url]
}

function addLibrarySelection() {
  if (!selectedLibraryUrls.value.length) {
    toast.warning('Nenhuma imagem selecionada', 'Escolhe pelo menos uma imagem da Multimédia.')
    return
  }

  const amount = selectedLibraryUrls.value.length
  setImages([...images.value, ...selectedLibraryUrls.value])
  selectedLibraryUrls.value = []
  libraryOpen.value = false

  toast.success(
    amount === 1 ? 'Imagem adicionada' : 'Imagens adicionadas',
    amount === 1
      ? 'A imagem foi adicionada ao álbum.'
      : `${amount} imagens foram adicionadas ao álbum.`
  )
}

async function uploadFiles(event: Event) {
  const input = event.target as HTMLInputElement
  const files = Array.from(input.files || []).filter(file => file.type.startsWith('image/'))
  input.value = ''

  if (!files.length) return

  uploading.value = true
  const uploaded: string[] = []
  const failed: string[] = []

  for (const file of files) {
    try {
      const result = await media.upload(file)
      uploaded.push(result.url)
    } catch {
      failed.push(file.name)
    }
  }

  if (uploaded.length) {
    setImages([...images.value, ...uploaded])
    toast.success(
      uploaded.length === 1 ? 'Imagem carregada' : 'Imagens carregadas',
      uploaded.length === 1
        ? 'A imagem foi carregada e adicionada ao álbum.'
        : `${uploaded.length} imagens foram carregadas e adicionadas ao álbum.`
    )
  }

  if (failed.length) {
    toast.error(
      'Alguns uploads falharam',
      `Não foi possível carregar: ${failed.join(', ')}`
    )
  }

  uploading.value = false
}
</script>

<template>
  <div class="gallery-picker">
    <div class="gallery-picker__toolbar">
      <label class="btn btn--primary gallery-picker__upload" :class="{ 'is-disabled': uploading }">
        <Icon :name="uploading ? 'lucide:loader-circle' : 'lucide:upload'" />
        {{ uploading ? 'A carregar…' : 'Carregar imagens' }}
        <input
          type="file"
          accept="image/*"
          multiple
          hidden
          :disabled="uploading"
          @change="uploadFiles"
        >
      </label>

      <button type="button" class="btn btn--secondary" @click="openLibrary">
        <Icon name="lucide:images" />
        Escolher da Multimédia
      </button>

      <span class="gallery-picker__count">
        {{ images.length }} {{ images.length === 1 ? 'imagem' : 'imagens' }}
      </span>
    </div>

    <div v-if="images.length" class="gallery-picker__selected">
      <article
        v-for="(url, index) in images"
        :key="`${url}-${index}`"
        class="gallery-picker__selected-card"
        :class="{ 'is-dragging': draggedImageIndex === index }"
        draggable="true"
        title="Arrasta para alterar a ordem"
        @dragstart="startDragging(index)"
        @dragend="draggedImageIndex = null"
        @dragover.prevent
        @drop.prevent="dropImage(index)"
      >
        <img :src="url" :alt="`Imagem ${index + 1} do álbum`">
        <span>{{ index + 1 }}</span>
        <div class="gallery-picker__order" aria-label="Ordenar imagem">
          <button type="button" :disabled="index === 0" :aria-label="`Mover imagem ${index + 1} para trás`" title="Mover para trás" @click="moveImage(index, index - 1)">
            <Icon name="lucide:chevron-left" size="15" />
          </button>
          <button type="button" :disabled="index === images.length - 1" :aria-label="`Mover imagem ${index + 1} para a frente`" title="Mover para a frente" @click="moveImage(index, index + 1)">
            <Icon name="lucide:chevron-right" size="15" />
          </button>
        </div>
        <button
          type="button"
          class="gallery-picker__remove"
          :aria-label="`Remover imagem ${index + 1}`"
          title="Remover"
          @click="removeImage(url)"
        >
          <Icon name="lucide:x" size="16" />
        </button>
      </article>
    </div>

    <div v-else class="gallery-picker__empty">
      <Icon name="lucide:images" size="30" />
      <strong>Sem imagens selecionadas</strong>
      <span>Carrega novas imagens ou escolhe ficheiros da Multimédia.</span>
    </div>

    <Teleport to="body">
      <div v-if="libraryOpen" class="modal-backdrop gallery-library-backdrop" @click.self="libraryOpen = false">
        <section class="cms-modal gallery-library-modal">
          <header>
            <div>
              <p class="eyebrow">Biblioteca</p>
              <h2>Escolher da Multimédia</h2>
              <p>Seleciona uma ou várias imagens para adicionar ao álbum.</p>
            </div>
            <button type="button" class="icon-button" @click="libraryOpen = false">
              <Icon name="lucide:x" />
            </button>
          </header>

          <label class="resource-search gallery-library-search">
            <Icon name="lucide:search" />
            <input v-model="search" type="search" placeholder="Pesquisar ficheiros…">
          </label>

          <div v-if="libraryPending" class="cms-loading">A carregar Multimédia…</div>

          <div v-else-if="!imageLibrary.length" class="empty-state">
            <Icon name="lucide:image-off" size="30" />
            <h3>Sem imagens disponíveis</h3>
            <p>Carrega imagens na Multimédia ou utiliza o botão de upload deste álbum.</p>
          </div>

          <div v-else class="gallery-library-grid">
            <button
              v-for="item in imageLibrary"
              :key="item.id"
              type="button"
              class="gallery-library-item"
              :class="{
                'is-selected': selectedLibraryUrls.includes(item.url),
                'is-used': isSelected(item.url)
              }"
              :disabled="isSelected(item.url)"
              @click="toggleLibraryItem(item.url)"
            >
              <img :src="item.url" :alt="item.name">
              <span class="gallery-library-item__check">
                <Icon
                  :name="isSelected(item.url) ? 'lucide:check' : selectedLibraryUrls.includes(item.url) ? 'lucide:check' : 'lucide:circle'"
                  size="17"
                />
              </span>
              <span class="gallery-library-item__name">{{ item.name }}</span>
              <small v-if="isSelected(item.url)">Já adicionada</small>
            </button>
          </div>

          <footer>
            <span class="gallery-library-selection">
              {{ selectedLibraryUrls.length }} selecionada{{ selectedLibraryUrls.length === 1 ? '' : 's' }}
            </span>
            <button type="button" class="btn btn--secondary" @click="libraryOpen = false">
              Cancelar
            </button>
            <button
              type="button"
              class="btn btn--primary"
              :disabled="!selectedLibraryUrls.length"
              @click="addLibrarySelection"
            >
              <Icon name="lucide:plus" />
              Adicionar selecionadas
            </button>
          </footer>
        </section>
      </div>
    </Teleport>
  </div>
</template>
