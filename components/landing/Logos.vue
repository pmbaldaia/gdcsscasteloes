<script setup>
const sponsors = [
  { src: "/patrocinios/garage649.webp", alt: "M Pinto" },
  { src: "/patrocinios/mpinto.webp", alt: "M Pinto" },
  { src: "/patrocinios/cfds-logo-white.webp", alt: "CFDS" },
  { src: "/patrocinios/docemel.webp", alt: "Doce Mel" },
  { src: "/patrocinios/casacarreira.webp", alt: "Casa da Carreira" },
  { src: "/patrocinios/cafesantoantonio.webp", alt: "Café Santo António" },
  { src: "/patrocinios/tochasbar.webp", alt: "Tochas Bar" },
  { src: "/patrocinios/carvalhaparque.webp", alt: "Carvalha Parque" },
  { src: "/patrocinios/fontevelha.webp", alt: "Fonte Velha" },
  { src: "/patrocinios/controi-barros.webp", alt: "ConstroiBarros" },
  { src: "/patrocinios/allianz.webp", alt: "Allianz" },
  { src: "/patrocinios/amstransportes.webp", alt: "AMS Transportes" },
  { src: "/patrocinios/bjconstrucoes.webp", alt: "BJ Construções" },
  { src: "/patrocinios/carlosmorango.webp", alt: "Carlos Morango" },
  { src: "/patrocinios/cmcar.webp", alt: "CM Car" },
  { src: "/patrocinios/simbolocordialunp.webp", alt: "Construção" },
  { src: "/patrocinios/farmaciamoreira.webp", alt: "Farmácia Moreira" },
  { src: "/patrocinios/fribeiro.webp", alt: "Fribeiro" },
  /* { src: "/patrocinios/idmconstruct.webp", alt: "IDM Construct" }, */
  { src: "/patrocinios/iluminacoescampos.webp", alt: "Iluminações Campos" },
  { src: "/patrocinios/jardeco.webp", alt: "Jardeco" },
  { src: "/patrocinios/luis moreira.webp", alt: "Luís Moreira" },
  { src: "/patrocinios/mocacar.webp", alt: "Mocacar" },
  { src: "/patrocinios/nortenha.webp", alt: "Nortenha" },
  { src: "/patrocinios/pardais.webp", alt: "Pardais" },
  { src: "/patrocinios/piscinaspaulo.webp", alt: "Piscinas Paulo" },
  { src: "/patrocinios/pizzariamoderna.webp", alt: "Pizzaria Moderna" },
  { src: "/patrocinios/pneusribeiro.webp", alt: "Pneus Ribeiro" },
  { src: "/patrocinios/quintaagualeveda.webp", alt: "Quinta Água Levada" },
  { src: "/patrocinios/realcafes.webp", alt: "Real Cafés" },
  {
    src: "/patrocinios/restauranterecesinhos.webp",
    alt: "Restaurante e Receisinhos",
  },
  { src: "/patrocinios/sigaseguro.webp", alt: "SigaSeguro" },
  { src: "/patrocinios/sofas.webp", alt: "Sofas" },
  { src: "/patrocinios/splcar.webp", alt: "SPL Car" },
  { src: "/patrocinios/steelferreiro.webp", alt: "Steel Ferreiro" },
  { src: "/patrocinios/tabernacruz.webp", alt: "Taberna Cruz" },
  { src: "/patrocinios/tiagomoreira.webp", alt: "Tiago Moreira" },
  { src: "/patrocinios/triunfoclassico.webp", alt: "Triunfo Clássico" },
  { src: "/patrocinios/vataxi.webp", alt: "VA Táxi" },
  { src: "/patrocinios/habirobim.webp", alt: "HABIROBIM" },
  { src: "/patrocinios/jotatek.webp", alt: "JOTA TEK REPARAÇÕES" },
  { src: "/patrocinios/serralharia-judas.webp", alt: "Serralharia Judas" },
  { src: "/patrocinios/margemperiferica.webp", alt: "Margem Periférica" },
  { src: "/patrocinios/mcasaconstroi.webp", alt: "MCasa Constrói" },
  { src: "/patrocinios/larguideia.webp", alt: "Larguideia" },
  { src: "/patrocinios/brunosport.webp", alt: "Bruno Sport" },
  { src: "/patrocinios/consfilwork.webp", alt: "Consfilwork" },
  { src: "/patrocinios/terrafiel.webp", alt: "Terrafiel" },
  { src: "/patrocinios/soaresribeiro.webp", alt: "Soares Ribeiro" },
  { src: "/patrocinios/marcoarco.webp", alt: "Marco Arco" },
  { src: "/patrocinios/bravosincriveis.webp", alt: "Bravos e Incríveis" },
];
</script>

<template>
  <section class="mt-24">
    <h2
      class="text-slate-900 text-fluid-3xl font-bold text-center tracking-tight"
    >
      Patrocínios
    </h2>
    <div class="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-10 mt-10 px-4">
      <NuxtImg
        v-for="(sponsor, i) in sponsors"
        :key="i"
        :src="sponsor.src"
        :alt="sponsor.alt"
        preset="sponsor"
        width="160"
        height="120"
        sizes="120px"
        loading="lazy"
        fetchpriority="low"
        class="object-contain h-[120px] w-full max-w-[160px] mx-auto transition-transform duration-300 hover:scale-110"
        :class="{
          'bg-black rounded-lg': sponsor.alt === 'CFDS',
          'p-2': sponsor.alt === 'CFDS',
        }"
      />
    </div>
  </section>
</template>
