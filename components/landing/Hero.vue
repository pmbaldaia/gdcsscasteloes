<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-5 pb-8 md:pt-8">
    <div class="p-24 md:order-1 hidden md:block">
      <img
        class="rounded-full transition-transform transform hover:scale-125"
        src="~/assets/img/20252026.jpg"
        alt="Época 2025/2026"
        loading="eager"
        format="avif"
        width="512"
        height="512"
      />
    </div>

    <div>
      <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight">
        Bem-vindo ao site oficial do G.D.C.S.S. Castelões
      </h1>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        Celebrando com orgulho 41 anos de história, dedicação e conquistas, o
        G.D.C.S.S. Castelões foi fundado a 11 de abril de 1984, na nossa amada
        freguesia de Castelões. Venha fazer parte dessa jornada, repleta de
        momentos inesquecíveis e vitórias que marcaram a nossa comunidade!
      </p>
      <div
        class="mt-6 flex flex-col sm:flex-row gap-3 justify-start items-center"
      >
        <LandingLink
          size="lg"
          class="bg-red-800 text-black hover:bg-black hover:text-white border border-red-800 hover:border-white w-full sm:w-auto"
          rel="noopener"
          href="/calendario"
          target="_blank"
        >
          Ver Eventos
        </LandingLink>

        <LandingLink
          size="lg"
          class="bg-green-800 text-black hover:bg-black hover:text-white border border-green-800 hover:border-white w-full sm:w-auto"
          rel="noopener"
          href="/calendario"
          target="_blank"
        >
          Ver Calendário
        </LandingLink>
      </div>
    </div>
  </main>
</template>
