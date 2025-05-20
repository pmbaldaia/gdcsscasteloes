<script setup>
import { PhInstagramLogo, PhFacebookLogo } from "@phosphor-icons/vue";
</script>

<template>
  <footer
    class="w-full mt-12 mb-2 rounded-lg p-8 text-gray-900 dark:text-white px-4"
  >
    <div class="max-w-screen-xl mx-auto px-4">
      <hr
        class="border-t-2 border-gray-300 dark:border-gray-700 my-6 w-full mx-auto"
      />

      <div class="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-8">
        <div class="flex flex-col h-full justify-start text-left">
          <h3 class="text-xl font-bold mb-1">Sobre</h3>
          <div class="w-[10%] border-b-2 border-red-500 mb-3"></div>
          <p class="text-sm text-gray-700 dark:text-white leading-relaxed">
            Nós, enquanto equipa, temos a visão de procurar sempre a vitória e
            sermos os melhores em tudo o que fazemos. Treinamos com dedicação e
            foco para alcançar o topo e demonstrar a nossa paixão pelo futebol
            em cada jogo.
          </p>
        </div>

        <div class="flex flex-col h-full justify-start text-left">
          <h3 class="text-xl font-bold mb-1">Links Úteis</h3>
          <div class="w-[10%] border-b-2 border-red-500 mb-3"></div>
          <ul class="space-y-3 text-sm">
            <li>
              <a
                href="/contacto"
                class="hover:text-red-500 transition-colors duration-300 text-gray-700 dark:text-white"
              >
                Contactos
              </a>
            </li>
            <li>
              <a
                href="/politicas/cookies"
                class="hover:text-red-500 transition-colors duration-300 text-gray-700 dark:text-white"
              >
                Política de Cookies
              </a>
            </li>
            <li>
              <a
                href="/politicas/privacidade"
                class="hover:text-red-500 transition-colors duration-300 text-gray-700 dark:text-white"
              >
                Política de Privacidade
              </a>
            </li>
            <li>
              <a
                href="/politicas/servico"
                class="hover:text-red-500 transition-colors duration-300 text-gray-700 dark:text-white"
              >
                Termos de Serviço
              </a>
            </li>
          </ul>
        </div>

        <div class="flex flex-col h-full justify-start text-left">
          <h3 class="text-xl font-bold mb-1">Redes Sociais</h3>
          <div class="w-[10%] border-b-2 border-red-500 mb-3"></div>
          <ul class="space-y-3 text-sm">
            <li>
              <a
                href="https://www.facebook.com/gdcscasteloes/"
                target="_blank"
                class="flex items-center space-x-2 text-gray-700 dark:text-white hover:text-red-500 transition-colors duration-300"
              >
                <PhFacebookLogo class="w-6 h-6 fill-current" />
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/gdcsscasteloes/"
                target="_blank"
                class="flex items-center space-x-2 text-gray-700 dark:text-white hover:text-red-500 transition-colors duration-300"
              >
                <PhInstagramLogo class="w-6 h-6 fill-current" />
                <span>Instagram</span>
              </a>
            </li>
          </ul>
        </div>

        <div class="flex flex-col h-full justify-start text-left">
          <h3 class="text-xl font-bold mb-1">Contacto</h3>
          <div class="w-[10%] border-b-2 border-red-500 mb-3"></div>
          <p class="text-sm text-gray-700 dark:text-white leading-relaxed">
            Email:<br />
            <a
              href="mailto:gdcsscasteloes1984@gmail.com"
              class="hover:text-red-500 transition-colors duration-300 underline text-gray-700 dark:text-white"
            >
              gdcsscasteloes1984@gmail.com
            </a>
          </p>
        </div>
      </div>

      <hr
        class="border-t-2 border-gray-300 dark:border-gray-700 my-6 w-full mx-auto"
      />

      <p class="text-center text-xs text-gray-700 dark:text-white mt-8">
        Copyright © {{ new Date().getFullYear() }} GDCSSCastelões. Todos os
        direitos reservados.
      </p>

      <p class="text-center text-xs text-gray-700 dark:text-white mt-1">
        Feito por
        <a
          href="https://instagram.com/webcreaterpt"
          target="_blank"
          rel="noopener"
          class="hover:text-red-500 underline transition-colors duration-300 text-gray-700 dark:text-white"
        >
          Webcreaterpt
        </a>
      </p>
    </div>
  </footer>
</template>
