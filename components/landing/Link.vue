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
    "bg-surface border border-neutral-200 hover:border-primary-800 hover:text-primary-900 text-neutral-900 shadow-sm",
  primary:
    "bg-primary-800 text-white hover:bg-primary-950 border border-primary-800 shadow-sm",
  inverted: "bg-surface text-neutral-900 border border-neutral-200 shadow-sm hover:bg-neutral-50",
  muted: "bg-neutral-50 hover:bg-neutral-200 border border-transparent text-neutral-900",
};
</script>

<template>
  <NuxtLink
    :href="href"
    :class="[
      'rounded-lg text-center font-medium transition focus-visible:ring-2 ring-offset-2 ring-primary-700 ring-opacity-40',
      block && 'w-full',
      sizes[size],
      styles[styleName],
    ]"
    ><slot />
  </NuxtLink>
</template>
