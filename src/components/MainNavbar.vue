<script setup lang="ts">
import { ref } from 'vue'
import logo from '@/assets/img/logo.png'
import MainButton from '@/components/LinkButton.vue'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <nav class="mx-auto flex h-20 w-full items-center justify-between px-8 py-4 lg:px-[120px]">
    <div class="flex h-8">
      <img :src="logo" alt="Cars Spot Logo" class="w-auto object-contain transition-all" />
    </div>
    <ul class="text-dark-gray hidden gap-6 md:flex">
      <li class="font-roboto hover:underline hover:underline-offset-4">
        <a href="#gallery-section">Galeria zdjęć</a>
      </li>
      <li class="font-roboto hover:underline hover:underline-offset-4"><a href="#faq">FaQ</a></li>
    </ul>
    <MainButton to="tel:#" extra-class="hidden md:block ">Zadzwoń do nas</MainButton>
    <button class="block text-white md:hidden" @click="toggleMenu">
      <svg
        v-show="!isOpen"
        class="text-center"
        xmlns="http://www.w3.org/2000/svg"
        width="32px"
        height="32px"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path d="M4 18L20 18" stroke="#000000" stroke-width="2" stroke-linecap="round" />
        <path d="M4 12L20 12" stroke="#000000" stroke-width="2" stroke-linecap="round" />
        <path d="M4 6L20 6" stroke="#000000" stroke-width="2" stroke-linecap="round" />
      </svg>
      <svg
        v-show="isOpen"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="32px"
        height="32px"
        viewBox="0 0 50 50"
      >
        <path
          d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"
        ></path>
      </svg>
    </button>
    <div
      v-show="isOpen"
      class="bg-dark-gray absolute left-0 top-20 z-50 flex h-[calc(100vh-80px)] w-full flex-col md:hidden"
    >
      <ul class="text-light-gray flex flex-col gap-4 p-4 text-xl">
        <li class="font-roboto hover:underline hover:underline-offset-4">
          <a href="#gallery-section">Galeria zdjęć</a>
        </li>
        <li class="font-roboto hover:underline hover:underline-offset-4"><a href="#faq">FaQ</a></li>
      </ul>
    </div>
  </nav>
</template>
