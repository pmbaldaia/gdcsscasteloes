export default defineNuxtRouteMiddleware((to) => {
  if (to.path.length > 1 && to.path.endsWith("/")) {
    return navigateTo(to.path.slice(0, -1), { redirectCode: 301 });
  }
});
