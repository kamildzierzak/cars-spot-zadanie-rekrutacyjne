<script setup lang="ts">
import { ref } from 'vue'
import logo from '@/assets/img/logo.png'
import MainButton from '@/components/LinkButton.vue'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}
</script>

<template>
  <nav class="mx-auto flex h-20 w-full items-center justify-between py-4">
    <div class="flex h-8">
      <img :src="logo" alt="Cars Spot Logo" class="w-auto object-contain transition-all" />
    </div>
    <ul class="hidden gap-6 text-dark-gray lg:flex">
      <li class="font-roboto hover:underline hover:underline-offset-4">
        <a href="#gallery-section">Galeria zdjęć</a>
      </li>
      <li class="font-roboto hover:underline hover:underline-offset-4"><a href="#faq">FaQ</a></li>
    </ul>
    <MainButton to="tel:#" extra-class="hidden lg:block ">Zadzwoń do nas</MainButton>
    <button class="block text-white lg:hidden" @click="toggleMenu">
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
    <Transition name="slide-fade">
      <div
        v-show="isOpen"
        class="absolute left-0 top-20 z-50 flex h-[calc(100vh-80px)] w-full flex-col bg-dark-gray lg:hidden"
      >
        <ul class="flex flex-col gap-4 px-4 py-4 text-xl text-light-gray sm:px-8">
          <li class="font-roboto hover:underline hover:underline-offset-4">
            <a @click="closeMenu" href="#gallery-section">Galeria zdjęć</a>
          </li>
          <li class="font-roboto hover:underline hover:underline-offset-4">
            <a @click="closeMenu" href="#faq">FaQ</a>
          </li>
        </ul>
      </div>
    </Transition>
  </nav>
</template>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(96px);
  opacity: 0;
}
</style>
