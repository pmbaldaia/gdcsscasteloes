<script setup lang="ts">
interface Props {
  href: string;
  size?: "md" | "lg";
  block?: boolean;
  styleName?: "outline" | "primary" | "inverted" | "muted";
  className?: string;
  [x: string]: any;
}

withDefaults(defineProps<Props>(), {
  size: "lg",
  styleName: "primary",
});

const sizes = {
  lg: "px-5 py-2.5",
  md: "px-4 py-2",
};

const styles = {
  outline:
    "bg-white border border-slate-300 hover:border-green-800 hover:text-green-900 text-slate-800 shadow-sm",
  primary:
    "bg-green-800 text-white hover:bg-green-900 border border-green-800 shadow-sm",
  inverted: "bg-white text-slate-900 border border-slate-200 shadow-sm hover:bg-slate-50",
  muted: "bg-slate-100 hover:bg-slate-200 border border-transparent text-slate-800",
};
</script>

<template>
  <NuxtLink
    :href="href"
    :class="[
      'rounded-lg text-center font-medium transition focus-visible:ring-2 ring-offset-2 ring-green-700/40',
      block && 'w-full',
      sizes[size],
      styles[styleName],
    ]"
    ><slot />
  </NuxtLink>
</template>
