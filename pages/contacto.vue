<script setup>
import { useSiteSettings } from "~/modules/settings/useSiteSettings";
definePageMeta({ layout: "default" });
import { ref } from "vue";
const config=useRuntimeConfig();
const { settings } = await useSiteSettings();
const firstName=ref("");const lastName=ref("");const senderEmail=ref("");const subject=ref("");const message=ref("");
const errors=ref({firstName:false,lastName:false,senderEmail:false,subject:false,message:false});const touched=ref(false);const formError=ref(false);const submitting=ref(false);const submitSuccess=ref("");
const validateFields=()=>{errors.value.firstName=!firstName.value.trim();errors.value.lastName=!lastName.value.trim();errors.value.senderEmail=!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(senderEmail.value.trim());errors.value.subject=!subject.value.trim();errors.value.message=!message.value.trim();return !Object.values(errors.value).includes(true)};
async function handleSubmit(){touched.value=true;formError.value=false;submitSuccess.value='';if(!validateFields()){formError.value=true;return}submitting.value=true;try{await $fetch(`${config.public.apiBase}/api/public/contact`,{method:'POST',body:{firstName:firstName.value,lastName:lastName.value,email:senderEmail.value,subject:subject.value,message:message.value}});submitSuccess.value='Mensagem enviada com sucesso. Entraremos em contacto assim que possível.';firstName.value='';lastName.value='';senderEmail.value='';subject.value='';message.value='';touched.value=false}catch(e){formError.value=true}finally{submitting.value=false}}</script>

<template>
  <LandingContainer>
    <CmsManagedPageHeader page-slug="contacto" fallback-title="Contacto" fallback-description="Preenche o formulário e entra em contacto connosco.
Envia-nos uma mensagem ou email. Respondemos o mais rápido possível!" />

    <div class="mx-auto mt-16 max-w-full">
      <div
        class="bg-surface rounded-2xl p-6 w-full border border-neutral-200"
      >
        <form @submit.prevent="handleSubmit">
          <div class="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <div>
              <label
                class="block text-fluid-sm font-medium text-neutral-600 mb-1"
              >
                Nome <span class="text-secondary-800">*</span>
              </label>
              <input
                v-model="firstName"
                type="text"
                placeholder="Primeiro nome"
                :class="[
                  'w-full px-4 py-2 rounded-md shadow-sm bg-surface text-neutral-900 focus:ring-primary-700 focus:border-primary-700',
                  touched && errors.firstName
                    ? 'border-2 border-secondary-800 focus:border-secondary-800 focus:ring-secondary-800'
                    : 'border border-neutral-200',
                ]"
              />
            </div>
            <div>
              <label
                class="block text-fluid-sm font-medium text-neutral-600 mb-1"
              >
                Apelido <span class="text-secondary-800">*</span>
              </label>
              <input
                v-model="lastName"
                type="text"
                placeholder="Último nome"
                :class="[
                  'w-full px-4 py-2 rounded-md shadow-sm bg-surface text-neutral-900 focus:ring-primary-700 focus:border-primary-700',
                  touched && errors.lastName
                    ? 'border-2 border-secondary-800 focus:border-secondary-800 focus:ring-secondary-800'
                    : 'border border-neutral-200',
                ]"
              />
            </div>
          </div>

          <div class="mb-4">
            <label
              class="block text-fluid-sm font-medium text-neutral-600 mb-1"
            >
              O teu Email <span class="text-secondary-800">*</span>
            </label>
            <input
              v-model="senderEmail"
              type="email"
              placeholder="teuemail@exemplo.com"
              :class="[
                'w-full px-4 py-2 rounded-md shadow-sm bg-surface text-neutral-900 focus:ring-primary-700 focus:border-primary-700',
                touched && errors.senderEmail
                  ? 'border-2 border-secondary-800 focus:border-secondary-800 focus:ring-secondary-800'
                  : 'border border-neutral-200',
              ]"
            />
          </div>

          <div class="mb-4">
            <label
              class="block text-fluid-sm font-medium text-neutral-600 mb-1"
            >
              Assunto <span class="text-secondary-800">*</span>
            </label>
            <input
              v-model="subject"
              type="text"
              placeholder="Assunto da mensagem"
              :class="[
                'w-full px-4 py-2 rounded-md shadow-sm bg-surface text-neutral-900 focus:ring-primary-700 focus:border-primary-700',
                touched && errors.subject
                  ? 'border-2 border-secondary-800 focus:border-secondary-800 focus:ring-secondary-800'
                  : 'border border-neutral-200',
              ]"
            />
          </div>

          <div class="mb-4">
            <label
              class="block text-fluid-sm font-medium text-neutral-600 mb-1"
            >
              Mensagem <span class="text-secondary-800">*</span>
            </label>
            <textarea
              v-model="message"
              rows="5"
              placeholder="Escreve aqui a tua mensagem..."
              :class="[
                'w-full px-4 py-2 rounded-md shadow-sm bg-surface text-neutral-900 focus:ring-primary-700 focus:border-primary-700',
                touched && errors.message
                  ? 'border-2 border-secondary-800 focus:border-secondary-800 focus:ring-secondary-800'
                  : 'border border-neutral-200',
              ]"
            ></textarea>
          </div>
          <div v-if="formError" class="mb-2 text-secondary-800 font-semibold">Não foi possível enviar. Confirma os campos e tenta novamente.</div>
          <div v-if="submitSuccess" class="mb-3 rounded-md bg-primary-50 p-3 text-primary-800 font-medium">{{ submitSuccess }}</div>
          <div class="flex justify-end">
            <button
              type="submit"
              :disabled="submitting"
              class="bg-secondary-800 text-white hover:bg-secondary-900 hover:text-white border border-secondary-800 hover:border-secondary-900 w-full sm:w-auto inline-flex items-center justify-center text-center px-5 py-[9px] rounded-button font-semibold"
            >
              {{ submitting ? "A enviar…" : "Enviar mensagem" }}
            </button>
          </div>
        </form>
      </div>
    </div>

    <div class="space-y-4 text-neutral-600 mt-5">
      <div
        class="grid grid-cols-1 gap-4 md:flex md:justify-between md:items-center md:gap-2 md:px-0 justify-center items-center"
      >
        <div v-if="settings.contactEmail" class="flex items-center gap-2 justify-center">
          <Icon name="uil:envelope" class="text-primary-700 w-5 h-5" />
          <a
            :href="`mailto:${settings.contactEmail}`"
            class="hover:underline"
            aria-label="Clica aqui para mandar email"
          >
            {{ settings.contactEmail }}
          </a>
        </div>
        <div class="flex items-center gap-2 justify-center">
          <Icon name="uil:map-marker" class="text-primary-700 w-5 h-5" />
          <span>Castelões, Penafiel, Portugal</span>
        </div>
      </div>
    </div>
  </LandingContainer>
</template>
