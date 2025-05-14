<template>
  <footer class="mt-32 mb-8 mx-8 lg:mx-20">
    <hr class="border-t-2 border-gray-100 my-4 w-[60%] mx-auto" />
    <div
      class="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-screen-xl mx-auto px-4"
    >
      <div class="col-span-1">
        <h3 class="text-lg font-semibold text-center lg:text-left">Sobre</h3>
        <p class="text-sm text-slate-500 mt-2 text-center lg:text-left">
          Nós, enquanto equipa, temos a visão de procurar sempre a vitória e
          sermos os melhores em tudo o que fazemos. Treinamos com dedicação e
          foco para alcançar o topo e demonstrar a nossa paixão pelo futebol em
          cada jogo.
        </p>
      </div>
      <div class="col-span-1">
        <h3 class="text-lg font-semibold text-center lg:text-left">
          Links Úteis
        </h3>
        <ul class="text-sm text-slate-500 mt-2 text-center lg:text-left">
          <li><a href="#" class="hover:underline">Política de Cookies</a></li>
          <li>
            <a href="#" class="hover:underline">Política de Privacidade</a>
          </li>
          <li><a href="#" class="hover:underline">Termos de Serviço</a></li>
        </ul>
      </div>
      <div class="col-span-1">
        <h3 class="text-lg font-semibold text-center lg:text-left">
          Redes Sociais
        </h3>
        <ul class="text-sm text-slate-500 mt-2 text-center lg:text-left">
          <li>
            <a
              href="https://www.facebook.com/gdcscasteloes/"
              class="hover:underline"
              >Facebook</a
            >
          </li>
          <li>
            <a
              href="https://www.instagram.com/gdcsscasteloes/"
              class="hover:underline"
              >Instagram</a
            >
          </li>
        </ul>
      </div>
      <div class="col-span-1">
        <h3 class="text-lg font-semibold text-center lg:text-left">Contacto</h3>
        <p class="text-sm text-slate-500 mt-2 text-center lg:text-left">
          Email:
          <a href="mailto:gdcsscasteloes1984@gmail.com" class="hover:underline"
            >gdcsscasteloes1984@gmail.com</a
          >
        </p>
      </div>
    </div>

    <p class="text-center text-sm text-slate-500 mt-10">
      Copyright © {{ new Date().getFullYear() }} GDCSSCastelões. Todos os
      direitos reservados.
    </p>

    <p class="text-center text-xs text-slate-500 mt-1">
      Feito por
      <a
        href="https://instagram.com/webcreaterpt"
        target="_blank"
        rel="noopener"
        class="hover:underline"
      >
        Webcreaterpt
      </a>
    </p>
  </footer>
</template>
