<script setup lang="ts">
import { computed, ref } from 'vue'
import GalleryCarrousell from '@/components/GalleryCarrousell.vue'
import gallery1 from '@/assets/img/gallery-1.png'
import gallery2 from '@/assets/img/gallery-2.png'
import gallery3 from '@/assets/img/gallery-3.png'

const personalCars = [gallery1, gallery2, gallery3, gallery1, gallery2, gallery3]
const deliveryCars = [gallery3, gallery3, gallery3, gallery3, gallery3, gallery3]

const selectedCategory = ref('personal')

const images = computed(() => {
  return selectedCategory.value === 'personal' ? personalCars : deliveryCars
})

const changeCategory = (category: string) => {
  selectedCategory.value = category
}
</script>

<template>
  <section id="gallery-section" class="py-8 pl-4 sm:pl-6 lg:py-20 xl:pl-[88px]">
    <span class="text-xl leading-8 text-dark-blue">Prezentacja firmy</span>
    <h2 class="font-bebas text-[40px] uppercase">Zobacz naszą galerię zdjęć</h2>
    <ul class="flex gap-4 pt-6 lg:gap-12">
      <li
        class="tracking-[-0.02em]"
        :class="
          selectedCategory === 'personal'
            ? 'border-b border-dark-blue font-semibold text-dark-blue'
            : 'text-black'
        "
      >
        <button @click="changeCategory('personal')">Samochody osobowe</button>
      </li>
      <li
        class="tracking-[-0.02em]"
        :class="
          selectedCategory === 'delivery'
            ? 'border-b border-dark-blue font-semibold text-dark-blue'
            : 'text-black'
        "
      >
        <button @click="changeCategory('delivery')">Samochody dostawcze</button>
      </li>
    </ul>
    <GalleryCarrousell :images="images" />
  </section>
</template>
