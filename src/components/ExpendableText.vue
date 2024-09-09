<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  text: string
  previewLength?: number
}

const { text, previewLength = 200 } = defineProps<Props>()

const isOpen = ref(false)
const previewText = text.substring(0, previewLength) + ' [...]'
const toggleExpand = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="flex flex-col gap-6">
    <Transition name="bounce">
      <p class="text-sm" v-if="isOpen">
        {{ text }}
      </p>
      <p class="text-sm" v-else>
        {{ previewText }}
      </p>
    </Transition>
    <button
      @click="toggleExpand"
      class="w-fit border-b-[1.5px] border-white pb-2 text-sm leading-5 hover:border-dark-blue hover:text-dark-blue"
    >
      {{ isOpen ? 'Zwiń' : 'Rozwiń' }}
      <i :class="isOpen ? 'pi pi-arrow-up' : 'pi pi-arrow-down'" class="h-[14px]"></i>
    </button>
  </div>
</template>

<style>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
</style>
