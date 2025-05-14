<script setup>
definePageMeta({
  layout: "landing",
});

const campo = {
  nome: "Campo Desportivo de Castelões",
  rua: "Rua do Complexo Desportivo, Castelões",
  imagem: {
    src: "/campo/campo.jpg",
    width: 600,
    height: 400,
  },
};
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Sobre nós</template>
      <template v-slot:desc>
        Localização e imagem do campo do Castelões
      </template>
    </LandingSectionhead>

    <div class="flex flex-wrap md:flex-nowrap mt-12 w-full">
      <div class="w-full md:w-1/2 flex justify-center items-center">
        <img
          :src="campo.imagem.src"
          :width="campo.imagem.width"
          :height="campo.imagem.height"
          alt="Campo Desportivo de Castelões"
          class="rounded shadow-lg w-full h-auto max-w-full"
        />
      </div>

      <div class="w-full md:w-1/2 p-4 flex justify-center items-center">
        <div
          class="text-2xl text-slate-800 leading-relaxed text-center md:text-left"
        >
          <strong>{{ campo.nome }}</strong>
          <p class="mt-2">{{ campo.rua }}</p>
        </div>
      </div>
    </div>

    <div class="mt-10 w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19377.718285271432!2d-8.186913368261719!3d41.23438882286855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd24969cc932a435%3A0x1cc3b348f37018b5!2sComplexo%20Desportivo%20de%20Castel%C3%B5es!5e1!3m2!1spt-PT!2spt!4v1747249901722!5m2!1spt-PT!2spt"
        width="100%"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        class="rounded shadow-xl"
      ></iframe>
    </div>
  </LandingContainer>
</template>
