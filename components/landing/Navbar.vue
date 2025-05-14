<script setup>
const menuitems = [
  {
    title: "Início",
    path: "/",
  },
  {
    title: "Eventos",
    path: "/eventos",
  },
  {
    title: "Calendário",
    path: "/calendario",
  },
  {
    title: "Contactos",
    path: "/contacto",
  },
];

const open = ref(false);
</script>

<template>
  <LandingContainer>
    <header class="flex flex-col lg:flex-row justify-between items-center my-5">
      <div class="flex w-full lg:w-auto items-center justify-between">
        <a href="/" class="text-lg">
          <img
            class="transition-transform transform hover:scale-125"
            src="~/assets/img/logowbg.png"
            alt="Logo GDCSSCastelões"
            loading="eager"
            format="avif"
            width="80"
            height="80"
          />
        </a>
        <div class="block lg:hidden">
          <button @click="open = !open" class="text-gray-800">
            <svg
              fill="currentColor"
              class="w-4 h-4"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path
                v-show="open"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"
              ></path>
              <path
                v-show="!open"
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <nav
        class="w-full lg:w-auto mt-2 lg:flex lg:mt-0"
        :class="{ block: open, hidden: !open }"
      >
        <ul class="flex flex-col items-center text-center lg:flex-row lg:gap-3">
          <li v-for="item of menuitems" :key="item.path">
            <a
              :href="item.path"
              class="flex lg:px-3 py-2 text-gray-600 hover:text-gray-900"
            >
              {{ item.title }}
            </a>
          </li>
        </ul>
        <div
          class="lg:hidden flex justify-center items-center mt-3 gap-4 w-full"
        >
          <a href="#" aria-label="Instagram">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 551.034 551.034"
              class="w-6 h-6"
            >
              <defs>
                <linearGradient
                  id="insta-gradient-mobile"
                  x1="0.275"
                  x2="0.725"
                  y1="0.05"
                  y2="0.95"
                >
                  <stop offset="0%" stop-color="#feda75" />
                  <stop offset="25%" stop-color="#fa7e1e" />
                  <stop offset="50%" stop-color="#d62976" />
                  <stop offset="75%" stop-color="#962fbf" />
                  <stop offset="100%" stop-color="#4f5bd5" />
                </linearGradient>
              </defs>
              <path
                fill="url(#insta-gradient-mobile)"
                d="M387.48,0H163.555C73.227,0,0,73.227,0,163.555v223.925c0,90.328,73.227,163.555,163.555,163.555
          h223.925c90.328,0,163.555-73.227,163.555-163.555V163.555C551.034,73.227,477.807,0,387.48,0z M275.517,133.987
          c78.039,0,141.529,63.49,141.529,141.529s-63.49,141.529-141.529,141.529S133.987,353.556,133.987,275.517
          S197.478,133.987,275.517,133.987z M460.114,134.07c0,15.932-12.915,28.847-28.847,28.847s-28.847-12.915-28.847-28.847
          s12.915-28.847,28.847-28.847S460.114,118.138,460.114,134.07z M494.378,387.48c0,59.19-48.083,107.273-107.273,107.273H163.555
          c-59.19,0-107.273-48.083-107.273-107.273V163.555c0-59.19,48.083-107.273,107.273-107.273h223.925
          c59.19,0,107.273,48.083,107.273,107.273V387.48z"
              />
            </svg>
          </a>
          <a href="#" aria-label="Facebook">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#1877F2"
              class="w-6 h-6"
            >
              <path
                d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.796.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.675V1.325C24 .6 23.4 0 22.675 0z"
              />
            </svg>
          </a>
        </div>
      </nav>
      <div class="hidden lg:flex items-center gap-4">
        <a href="#" aria-label="Instagram">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 551.034 551.034"
            class="w-6 h-6"
          >
            <linearGradient
              id="insta-gradient"
              x1="0.275"
              x2="0.725"
              y1="0.05"
              y2="0.95"
            >
              <stop offset="0%" stop-color="#feda75" />
              <stop offset="25%" stop-color="#fa7e1e" />
              <stop offset="50%" stop-color="#d62976" />
              <stop offset="75%" stop-color="#962fbf" />
              <stop offset="100%" stop-color="#4f5bd5" />
            </linearGradient>
            <path
              fill="url(#insta-gradient)"
              d="M387.48,0H163.555C73.227,0,0,73.227,0,163.555v223.925c0,90.328,73.227,163.555,163.555,163.555
    h223.925c90.328,0,163.555-73.227,163.555-163.555V163.555C551.034,73.227,477.807,0,387.48,0z M275.517,133.987
    c78.039,0,141.529,63.49,141.529,141.529s-63.49,141.529-141.529,141.529S133.987,353.556,133.987,275.517
    S197.478,133.987,275.517,133.987z M460.114,134.07c0,15.932-12.915,28.847-28.847,28.847s-28.847-12.915-28.847-28.847
    s12.915-28.847,28.847-28.847S460.114,118.138,460.114,134.07z M494.378,387.48c0,59.19-48.083,107.273-107.273,107.273H163.555
    c-59.19,0-107.273-48.083-107.273-107.273V163.555c0-59.19,48.083-107.273,107.273-107.273h223.925
    c59.19,0,107.273,48.083,107.273,107.273V387.48z"
            />
          </svg>
        </a>
        <a href="#" aria-label="Facebook">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#1877F2"
            class="w-6 h-6"
          >
            <path
              d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.796.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.675V1.325C24 .6 23.4 0 22.675 0z"
            />
          </svg>
        </a>
      </div>

      <!--  <div class="lg:hidden flex items-center mt-3 gap-4">
          <LandingLink href="#" styleName="muted" block size="md"
            >Instagram</LandingLink
          >
          <LandingLink href="#" size="md" block>Facebook</LandingLink>
        </div>
      </nav>
      <div>
        <div class="hidden lg:flex items-center gap-4">
          <a href="#">Instagram</a>
          <LandingLink href="#" size="md">Facebook</LandingLink>
        </div>
      </div> -->
    </header>
  </LandingContainer>
</template>
