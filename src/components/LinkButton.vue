<script setup lang="ts">
type LinkVariant = 'primary' | 'secondary'

interface Props {
  to: string
  variant?: LinkVariant
  extraClass?: string
}

const { variant = 'primary', to, extraClass = '' } = defineProps<Props>()
</script>

<template>
  <a
    :href="to"
    :class="`${variant === 'primary' ? 'bg-dark-blue text-light-gray' : 'border-dark-blue text-dark-blue bg-transparent'} font-roboto hover:text-light-gray hover:bg-dark-gray hover:border-dark-gray w-fit rounded-lg border px-6 py-3 font-semibold tracking-[-0.02em] transition-all hover:scale-105 ${extraClass} `"
  >
    <slot></slot>
  </a>
</template>
