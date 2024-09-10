<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

interface Props {
  images: string[]
}

const { images } = defineProps<Props>()
const carousel = ref<HTMLElement | null>(null)
const currentIndex = ref(0)
const slideWidth = ref(0)

const jumpToSlide = (index: number) => {
  currentIndex.value = index
}

const updateWidth = () => {
  const width = carousel.value ? carousel.value.clientWidth : 0

  if (window.innerWidth >= 1024) {
    slideWidth.value = width / 2.3
  } else if (window.innerWidth >= 640) {
    slideWidth.value = width * 0.6
  } else {
    slideWidth.value = width * 0.85
  }
}

onMounted(() => {
  updateWidth()
  window.addEventListener('resize', updateWidth)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateWidth)
})
</script>

<template>
  <div class="relative overflow-hidden py-20">
    <div
      class="flex gap-16 transition-transform duration-300 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * slideWidth}px)` }"
      ref="carousel"
    >
      <div
        v-for="(image, index) in images"
        :key="index"
        class="relative w-[90%] max-w-[600px] shrink-0 sm:w-[60%] lg:w-[600px]"
      >
        <img :src="image" alt="Carousel image" class="h-auto w-full object-cover" />
      </div>
    </div>
    <div class="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform gap-2.5">
      <button
        v-for="(image, index) in images"
        :key="index"
        @click="jumpToSlide(index)"
        :class="{
          'h-2 w-2 rounded-full bg-dark-blue': currentIndex === index,
          'h-2 w-2 rounded-full bg-[#F1F1F1]': currentIndex !== index
        }"
        class="transition-all duration-300"
      ></button>
    </div>
  </div>
</template>
