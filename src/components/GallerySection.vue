<script setup lang="ts">
import gallery1 from '@/assets/img/gallery-1.png'
import gallery2 from '@/assets/img/gallery-2.png'
import gallery3 from '@/assets/img/gallery-3.png'
</script>

<template>
  <section id="gallery-section" class="px-4 py-8 sm:px-6 lg:py-20 xl:px-[88px]">
    <span class="text-xl leading-8 text-dark-blue">Prezentacja firmy</span>
    <h2 class="font-bebas text-4xl uppercase">Zobacz naszą galerię zdjęć</h2>
    <ul class="flex gap-4 pt-6 lg:gap-12">
      <li><button>Samochody osobowe</button></li>
      <li><button>Samochody dostawcze</button></li>
    </ul>
    <div class="flex gap-16 p-20">
      <img :src="gallery1" alt="" />
      <img :src="gallery2" alt="" />
      <img :src="gallery3" alt="" />
    </div>
  </section>
</template>
