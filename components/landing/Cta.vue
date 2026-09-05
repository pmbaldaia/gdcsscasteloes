<template>
  <div
    class="card-surface px-6 py-16 mt-20 mx-auto max-w-5xl flex flex-col items-center text-center"
  >
    <h2 class="text-neutral-900 text-fluid-4xl font-bold">
      Junta-te à nossa paixão pelo desporto
    </h2>
    <p
      class="text-neutral-600 mt-4 text-fluid-lg max-w-2xl"
    >
      No GDCSS Castelões, promovemos o espírito de equipa, o desenvolvimento dos
      jovens e o orgulho na nossa freguesia. Seja como atleta, sócio ou
      apoiador, há um lugar para ti no nosso clube.
    </p>
    <div
      class="mt-6 flex flex-col sm:flex-row gap-3 justify-start items-center"
    >
      <NuxtLink
        to="/sobre"
        class="btn-club-green w-full sm:w-auto"
        aria-label="Clica aqui para conhecer o clube"
      >
        Conhecer o Clube
      </NuxtLink>

      <NuxtLink
        to="/contacto"
        class="btn-club-red w-full sm:w-auto"
        aria-label="Clica aqui para te tornares sócio"
      >
        Torna-te Sócio
      </NuxtLink>
    </div>
  </div>
</template>
