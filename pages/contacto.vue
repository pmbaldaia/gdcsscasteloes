<script setup>
definePageMeta({
  layout: "landing",
});

import { ref, computed } from "vue";

const firstName = ref("");
const lastName = ref("");
const senderEmail = ref("");
const subject = ref("");
const message = ref("");

const mailtoLink = computed(() => {
  const name = `${firstName.value} ${lastName.value}`.trim();
  const body = `Prezado(a),

Recebemos uma nova mensagem através do formulário de contato. Seguem abaixo os dados fornecidos:

Nome: ${name}
Email: ${senderEmail.value}

Mensagem:
${message.value}

Caso seja necessário entrar em contacto, por favor, utilize os dados acima.

Atenciosamente,
${name}
`;

  const mailSubject = encodeURIComponent(subject.value);
  const mailBody = encodeURIComponent(body);

  return `mailto:gdcsscasteloes1984@gmail.com?subject=${mailSubject}&body=${mailBody}`;
});

const handleSubmit = () => {
  window.location.href = mailtoLink.value;
};
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Contacto</template>
      <template v-slot:desc>
        Preenche o formulário e entra em contacto connosco.
        <p class="text-lg text-gray-600 leading-relaxed">
          Envia-nos uma mensagem ou email. Respondemos o mais rápido possível!
        </p>
      </template>
    </LandingSectionhead>

    <div class="mx-auto mt-16 max-w-full px-4">
      <div class="bg-white rounded-2xl shadow-md p-6 w-full">
        <form @submit.prevent="handleSubmit">
          <div class="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Nome</label>
              <input
                v-model="firstName"
                type="text"
                required
                placeholder="Primeiro nome"
                class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Apelido</label>
              <input
                v-model="lastName"
                type="text"
                required
                placeholder="Último nome"
                class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-1"
              >O teu Email</label
            >
            <input
              v-model="senderEmail"
              type="email"
              required
              placeholder="teuemail@exemplo.com"
              class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">Assunto</label>
            <input
              v-model="subject"
              type="text"
              required
              placeholder="Assunto da mensagem"
              class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
            <textarea
              v-model="message"
              rows="5"
              required
              placeholder="Escreve aqui a tua mensagem..."
              class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            class="bg-green-800 hover:bg-red-800 hover:text-white border border-green-800 hover:border-white w-full text-white py-2 px-4 rounded-lg font-medium transition"
          >
            Enviar Email
          </button>
        </form>
      </div>
    </div>
    <div class="space-y-4 text-gray-700 mt-3 px-5">
      <div class="flex justify-between items-center gap-2">
        <div class="flex items-center gap-2">
          <Icon name="uil:envelope" class="text-blue-500 w-5 h-5" />
          <a href="mailto:gdcsscasteloes1984@gmail.com" class="hover:underline">
            gdcsscasteloes1984@gmail.com
          </a>
        </div>
        <div class="flex items-center gap-2">
          <Icon name="uil:map-marker" class="text-blue-500 w-5 h-5" />
          <span>Castelões, Penafiel, Portugal</span>
        </div>
      </div>
    </div>
  </LandingContainer>
</template>
