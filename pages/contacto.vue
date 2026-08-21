<script setup>
definePageMeta({ layout: "default" });
import { ref } from "vue";
import { useSiteSettings } from "~/modules/settings/useSiteSettings";
const config=useRuntimeConfig();
const { settings } = await useSiteSettings();
const firstName=ref("");const lastName=ref("");const senderEmail=ref("");const subject=ref("");const message=ref("");
const errors=ref({firstName:false,lastName:false,senderEmail:false,subject:false,message:false});const touched=ref(false);const formError=ref(false);const submitting=ref(false);const submitSuccess=ref("");
const validateFields=()=>{errors.value.firstName=!firstName.value.trim();errors.value.lastName=!lastName.value.trim();errors.value.senderEmail=!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(senderEmail.value.trim());errors.value.subject=!subject.value.trim();errors.value.message=!message.value.trim();return !Object.values(errors.value).includes(true)};
async function handleSubmit(){touched.value=true;formError.value=false;submitSuccess.value='';if(!validateFields()){formError.value=true;return}submitting.value=true;try{await $fetch(`${config.public.apiBase}/api/public/contact`,{method:'POST',body:{firstName:firstName.value,lastName:lastName.value,email:senderEmail.value,subject:subject.value,message:message.value}});submitSuccess.value='Mensagem enviada com sucesso. Entraremos em contacto assim que possível.';firstName.value='';lastName.value='';senderEmail.value='';subject.value='';message.value='';touched.value=false}catch(e){formError.value=true}finally{submitting.value=false}}
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>
        <div class="flex flex-col items-center">
          <span class="text-gray-900">Contacto</span>
          <div class="mt-5 w-32 h-px flex rounded-sm overflow-hidden">
            <div class="w-1/2 bg-red-600"></div>
            <div class="w-1/2 bg-green-600"></div>
          </div>
        </div>
      </template>

      <template v-slot:desc>
        <p class="text-slate-600">
          Preenche o formulário e entra em contacto connosco.
        </p>
        <p class="text-slate-600 mt-2">
          Envia-nos uma mensagem ou email. Respondemos o mais rápido possível!
        </p>
      </template>
    </LandingSectionhead>

    <div class="mx-auto mt-16 max-w-full">
      <div
        class="bg-white rounded-2xl p-6 w-full border border-gray-200"
      >
        <form @submit.prevent="handleSubmit">
          <div class="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <div>
              <label
                class="block text-fluid-sm font-medium text-gray-700 mb-1"
              >
                Nome <span class="text-red-600">*</span>
              </label>
              <input
                v-model="firstName"
                type="text"
                placeholder="Primeiro nome"
                :class="[
                  'w-full px-4 py-2 rounded-md shadow-sm bg-white text-gray-900 focus:ring-blue-500 focus:border-blue-500',
                  touched && errors.firstName
                    ? 'border-2 border-red-600 focus:border-red-600 focus:ring-red-600'
                    : 'border border-gray-300',
                ]"
              />
            </div>
            <div>
              <label
                class="block text-fluid-sm font-medium text-gray-700 mb-1"
              >
                Apelido <span class="text-red-600">*</span>
              </label>
              <input
                v-model="lastName"
                type="text"
                placeholder="Último nome"
                :class="[
                  'w-full px-4 py-2 rounded-md shadow-sm bg-white text-gray-900 focus:ring-blue-500 focus:border-blue-500',
                  touched && errors.lastName
                    ? 'border-2 border-red-600 focus:border-red-600 focus:ring-red-600'
                    : 'border border-gray-300',
                ]"
              />
            </div>
          </div>

          <div class="mb-4">
            <label
              class="block text-fluid-sm font-medium text-gray-700 mb-1"
            >
              O teu Email <span class="text-red-600">*</span>
            </label>
            <input
              v-model="senderEmail"
              type="email"
              placeholder="teuemail@exemplo.com"
              :class="[
                'w-full px-4 py-2 rounded-md shadow-sm bg-white text-gray-900 focus:ring-blue-500 focus:border-blue-500',
                touched && errors.senderEmail
                  ? 'border-2 border-red-600 focus:border-red-600 focus:ring-red-600'
                  : 'border border-gray-300',
              ]"
            />
          </div>

          <div class="mb-4">
            <label
              class="block text-fluid-sm font-medium text-gray-700 mb-1"
            >
              Assunto <span class="text-red-600">*</span>
            </label>
            <input
              v-model="subject"
              type="text"
              placeholder="Assunto da mensagem"
              :class="[
                'w-full px-4 py-2 rounded-md shadow-sm bg-white text-gray-900 focus:ring-blue-500 focus:border-blue-500',
                touched && errors.subject
                  ? 'border-2 border-red-600 focus:border-red-600 focus:ring-red-600'
                  : 'border border-gray-300',
              ]"
            />
          </div>

          <div class="mb-4">
            <label
              class="block text-fluid-sm font-medium text-gray-700 mb-1"
            >
              Mensagem <span class="text-red-600">*</span>
            </label>
            <textarea
              v-model="message"
              rows="5"
              placeholder="Escreve aqui a tua mensagem..."
              :class="[
                'w-full px-4 py-2 rounded-md shadow-sm bg-white text-gray-900 focus:ring-blue-500 focus:border-blue-500',
                touched && errors.message
                  ? 'border-2 border-red-600 focus:border-red-600 focus:ring-red-600'
                  : 'border border-gray-300',
              ]"
            ></textarea>
          </div>
          <div v-if="formError" class="mb-2 text-red-600 font-semibold">Não foi possível enviar. Confirma os campos e tenta novamente.</div>
          <div v-if="submitSuccess" class="mb-3 rounded-md bg-green-50 p-3 text-green-800 font-medium">{{ submitSuccess }}</div>
          <div class="flex justify-end">
            <button
              type="submit"
              :disabled="submitting"
              class="bg-red-800 text-white hover:bg-black hover:text-white border border-red-800 hover:border-white w-full sm:w-auto inline-block text-center px-4 py-2 rounded"
            >
              {{ submitting ? "A enviar…" : "Enviar mensagem" }}
            </button>
          </div>
        </form>
      </div>
    </div>

    <div class="space-y-4 text-gray-700 mt-3 px-5">
      <div
        class="grid grid-cols-1 gap-4 md:flex md:justify-between md:items-center md:gap-2 md:px-0 justify-center items-center"
      >
        <div class="flex items-center gap-2 justify-center">
          <Icon name="uil:envelope" class="text-blue-500 w-5 h-5" />
          <a
            :href="`mailto:${settings.contactEmail}`"
            class="hover:underline"
            aria-label="Clica aqui para mandar email"
          >
            {{ settings.contactEmail }}
          </a>
        </div>
        <div class="flex items-center gap-2 justify-center">
          <Icon name="uil:map-marker" class="text-blue-500 w-5 h-5" />
          <span>Castelões, Penafiel, Portugal</span>
        </div>
      </div>
    </div>
  </LandingContainer>
</template>
