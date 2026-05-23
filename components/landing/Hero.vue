<template>
  <main
    class="grid lg:grid-cols-2 place-items-center pt-5 pb-8 md:pt-8 mt-8 px-4 sm:px-4 md:px-8 max-w-screen-xl mx-auto"
  >
    <div
      class="pt-0 pb-5 md:px-5 order-first md:order-2 w-full flex justify-center"
    >
      <!--
        <NuxtImg
          class="rounded-full transition-transform transform hover:scale-125 w-2/3 max-w-[200px] md:w-full md:max-w-[300px] lg:max-w-[400px]"
          src="/img/20252026.webp"
          alt="Época 2025/2026"
          loading="eager"
          placeholder="blur"
          sizes="(max-width: 768px) 66vw, (max-width: 1024px) 300px, 400px"
          densities="1x 2x"
          width="512"
          height="512"
        />
      -->
      <NuxtImg
        class="w-full md:max-w-[600px] lg:max-w-[700px] rounded-none md:rounded-lg transition-transform"
        src="/img/gdcss-casteloes-tarja.webp"
        alt="Época 2025/2026"
        loading="eager"
        placeholder="blur"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 600px, 700px"
        densities="1x 2x"
        width="2056"
      />
    </div>

    <div class="order-last md:order-1 w-full">
      <h1
        class="text-fluid-hero font-bold lg:tracking-tight text-slate-900"
      >
        Bem-vindo ao site oficial do G.D.C.S.S. Castelões
      </h1>
      <p
        class="text-fluid-base mt-4 text-slate-600 max-w-xl text-justify leading-relaxed"
      >
        Celebrando com orgulho 41 anos de história, dedicação e conquistas, o
        G.D.C.S.S. Castelões foi fundado a 11 de abril de 1984, na nossa amada
        freguesia de Castelões. Venha fazer parte dessa jornada, repleta de
        momentos inesquecíveis e vitórias que marcaram a nossa comunidade!
      </p>

      <div
        class="mt-6 flex flex-col sm:flex-row gap-3 justify-start items-center"
      >
        <a
          class="btn-club-red w-full sm:w-auto"
          href="/eventos/"
          aria-label="Clica aqui para ver Eventos"
        >
          Ver Eventos
        </a>

        <a
          class="btn-club-green w-full sm:w-auto"
          href="/calendario/"
          aria-label="Clica aqui para ver Calendário"
        >
          Ver Calendário
        </a>
      </div>
    </div>
  </main>
</template>
