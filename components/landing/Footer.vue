<template>
  <footer class="mt-24 mb-8 mx-8 lg:mx-20">
    <hr
      class="border-t-2 border-gray-100 dark:border-gray-700 my-4 w-[70%] mx-auto"
    />
    <div
      class="grid grid-cols-1 lg:grid-cols-4 gap-12 max-w-screen-xl mx-auto"
    >
      <div class="col-span-1">
        <h3 class="text-lg font-semibold text-left dark:text-white">Sobre</h3>
        <p class="text-sm text-slate-500 dark:text-white mt-2 text-left">
          Nós, enquanto equipa, temos a visão de procurar sempre a vitória e
          sermos os melhores em tudo o que fazemos. Treinamos com dedicação e
          foco para alcançar o topo e demonstrar a nossa paixão pelo futebol em
          cada jogo.
        </p>
      </div>
      <div class="col-span-1">
        <h3 class="text-lg font-semibold text-left dark:text-white">
          Links Úteis
        </h3>
        <ul
          class="text-sm text-slate-500 dark:text-white mt-2 text-left space-y-2"
        >
          <li>
            <a
              href="/politicas/cookies"
              class="border-b-2 border-transparent hover:border-red-800 hover:text-green-900 dark:hover:text-green-400 transition-all duration-300"
            >
              Política de Cookies
            </a>
          </li>
          <li>
            <a
              href="/politicas/privacidade"
              class="border-b-2 border-transparent hover:border-red-800 hover:text-green-900 dark:hover:text-green-400 transition-all duration-300"
            >
              Política de Privacidade
            </a>
          </li>
          <li>
            <a
              href="/politica/servico"
              class="border-b-2 border-transparent hover:border-red-800 hover:text-green-900 dark:hover:text-green-400 transition-all duration-300"
            >
              Termos de Serviço
            </a>
          </li>
        </ul>
      </div>
      <div class="col-span-1">
        <h3 class="text-lg font-semibold text-left dark:text-white">
          Redes Sociais
        </h3>
        <ul
          class="text-sm text-slate-500 dark:text-white mt-2 text-left space-y-2"
        >
          <li>
            <a
              href="https://www.facebook.com/gdcscasteloes/"
              class="border-b-2 border-transparent hover:border-red-800 hover:text-green-900 dark:hover:text-green-400 transition-all duration-300"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/gdcsscasteloes/"
              class="border-b-2 border-transparent hover:border-red-800 hover:text-green-900 dark:hover:text-green-400 transition-all duration-300"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
      <div class="col-span-1">
        <h3 class="text-lg font-semibold text-left dark:text-white">
          Contacto
        </h3>
        <p class="text-sm text-slate-500 dark:text-white mt-2 text-left">
          Email:<br />
          <a
            href="mailto:gdcsscasteloes1984@gmail.com"
            class="border-b-2 border-transparent hover:border-red-800 hover:text-green-900 dark:hover:text-green-400 transition-all duration-300"
          >
            gdcsscasteloes1984@gmail.com
          </a>
        </p>
      </div>
    </div>
    <hr
      class="border-t-2 border-gray-100 dark:border-gray-700 my-4 w-[70%] mx-auto"
    />
    <p class="text-center text-sm text-slate-500 dark:text-white mt-10">
      Copyright © {{ new Date().getFullYear() }} GDCSSCastelões. Todos os
      direitos reservados.
    </p>

    <p class="text-center text-xs text-slate-500 dark:text-white mt-1">
      Feito por
      <a
        href="https://instagram.com/webcreaterpt"
        target="_blank"
        rel="noopener"
        class="border-b-2 border-transparent hover:border-red-800 hover:text-green-900 dark:hover:text-green-400 transition-all duration-300"
      >
        Webcreaterpt
      </a>
    </p>
  </footer>
</template>
