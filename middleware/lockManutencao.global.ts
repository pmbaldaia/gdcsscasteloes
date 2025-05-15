export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path === "/manutencao") {
    return navigateTo("/error");
  }
});
