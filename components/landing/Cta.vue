<template>
  <div
    class="bg-black px-8 py-16 mt-20 mx-auto max-w-5xl rounded-2xl flex flex-col items-center text-center shadow-xl"
  >
    <h2 class="text-white text-3xl md:text-5xl font-bold">
      Junta-te à nossa paixão pelo desporto
    </h2>
    <p class="text-slate-400 mt-4 text-lg md:text-xl max-w-2xl">
      No GDCSS Castelões, promovemos o espírito de equipa, o desenvolvimento dos
      jovens e o orgulho na nossa freguesia. Seja como atleta, sócio ou
      apoiador, há um lugar para ti no nosso clube.
    </p>
    <div
      class="mt-6 flex flex-col sm:flex-row gap-3 justify-start items-center"
    >
      <LandingLink
        size="lg"
        class="bg-green-800 text-black hover:bg-black hover:text-white border border-green-800 hover:border-white w-full sm:w-auto"
        rel="noopener"
        href="/"
        target="_blank"
      >
        Conhecer o Clube
      </LandingLink>

      <LandingLink
        size="lg"
        class="bg-red-800 text-black hover:bg-black hover:text-white border border-red-800 hover:border-white w-full sm:w-auto"
        rel="noopener"
        href="/calendario"
        target="_blank"
      >
        Torna-te Sócio
      </LandingLink>
    </div>
  </div>
</template>
