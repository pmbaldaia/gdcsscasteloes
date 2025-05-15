<template>
  <footer
    class="mt-24 mb-2 mx-8 lg:mx-20 bg-gradient-to-r text-white rounded-lg shadow-lg p-8"
  >
    <hr
      class="border-t-2 border-gray-100 dark:border-gray-700 my-6 w-[70%] mx-auto"
    />
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-12 max-w-screen-xl mx-auto mb-8">
      <div>
        <h3
          class="text-xl font-bold mb-3 border-b-2 border-red-500 inline-block pb-1"
        >
          Sobre
        </h3>
        <p
          class="text-sm text-slate-500 dark:text-white mt-2 text-left leading-relaxed"
        >
          Nós, enquanto equipa, temos a visão de procurar sempre a vitória e
          sermos os melhores em tudo o que fazemos. Treinamos com dedicação e
          foco para alcançar o topo e demonstrar a nossa paixão pelo futebol em
          cada jogo.
        </p>
      </div>

      <div>
        <h3
          class="text-xl font-bold mb-3 border-b-2 border-red-500 inline-block pb-1"
        >
          Links Úteis
        </h3>
        <ul class="space-y-3">
          <li>
            <a
              href="/politicas/cookies"
              class="hover:text-red-500 transition-colors duration-300"
            >
              Política de Cookies
            </a>
          </li>
          <li>
            <a
              href="/politicas/privacidade"
              class="hover:text-red-500 transition-colors duration-300"
            >
              Política de Privacidade
            </a>
          </li>
          <li>
            <a
              href="/politica/servico"
              class="hover:text-red-500 transition-colors duration-300"
            >
              Termos de Serviço
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h3
          class="text-xl font-bold mb-3 border-b-2 border-red-500 inline-block pb-1"
        >
          Redes Sociais
        </h3>
        <ul class="space-y-3">
          <li>
            <a
              href="https://www.facebook.com/gdcscasteloes/"
              target="_blank"
              class="flex items-center space-x-2 hover:text-red-500 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 fill-current"
                viewBox="0 0 24 24"
              >
                <path
                  d="M22 12a10 10 0 1 0-11.54 9.8v-6.93h-2.89v-2.87h2.9v-2.19c0-2.86 1.7-4.44 4.3-4.44 1.25 0 2.56.22 2.56.22v2.8h-1.44c-1.42 0-1.86.88-1.86 1.78v2.02h3.17l-.51 2.87h-2.66v6.92A10 10 0 0 0 22 12z"
                />
              </svg>
              <span>Facebook</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/gdcsscasteloes/"
              target="_blank"
              class="flex items-center space-x-2 hover:text-red-500 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 fill-current"
                viewBox="0 0 24 24"
              >
                <path
                  d="M7.75 2h8.5C18.55 2 21 4.45 21 7.75v8.5c0 3.3-2.45 5.75-5.75 5.75h-8.5C5.45 22 3 19.55 3 16.25v-8.5C3 4.45 5.45 2 7.75 2zm4.25 5.75a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5zm5.5-.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
                />
              </svg>
              <span>Instagram</span>
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h3
          class="text-xl font-bold mb-3 border-b-2 border-red-500 inline-block pb-1"
        >
          Contacto
        </h3>
        <p
          class="text-sm text-slate-500 dark:text-white mt-2 text-left leading-relaxed"
        >
          Email:<br />
          <a
            href="mailto:gdcsscasteloes1984@gmail.com"
            class="hover:text-red-500 transition-colors duration-300 underline"
          >
            gdcsscasteloes1984@gmail.com
          </a>
        </p>
      </div>
    </div>

    <hr
      class="border-t-2 border-gray-100 dark:border-gray-700 my-6 w-[70%] mx-auto"
    />

    <p class="text-center text-xs text-slate-500 dark:text-white mt-8">
      Copyright © {{ new Date().getFullYear() }} GDCSSCastelões. Todos os
      direitos reservados.
    </p>

    <p class="text-center text-xs text-slate-500 dark:text-white mt-1">
      Feito por
      <a
        href="https://instagram.com/webcreaterpt"
        target="_blank"
        rel="noopener"
        class="hover:text-red-500 underline transition-colors duration-300"
      >
        Webcreaterpt
      </a>
    </p>
  </footer>
</template>
