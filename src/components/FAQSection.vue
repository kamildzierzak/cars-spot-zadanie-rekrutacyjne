<script setup lang="ts">
import ExpendableText from '@/components/ExpendableText.vue'
</script>

<template>
  <section id="faq" class="bg-dark-gray px-4 py-[88px] text-white sm:px-8 xl:px-[120px]">
    <div class="grid grid-cols-1 grid-rows-2 gap-12 lg:grid-cols-2 lg:grid-rows-1">
      <div class="flex flex-col gap-4">
        <h3 class="font-bebas text-2xl leading-6 tracking-[-0.03em]">
          Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo.
        </h3>
        <ExpendableText
          :text="`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime ea voluptas, distinctio fugiat nihil sequi. Molestiae fuga modi, inventore animi dolorum eius doloremque ad optio itaque necessitatibus. Repudiandae, expedita quod! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias tempore error deleniti cupiditate, necessitatibus ut harum esse consequatur et dolorem magni similique quis tempora vero aliquam obcaecati provident maiores molestias!`"
        ></ExpendableText>
      </div>
      <div class="flex flex-col gap-4">
        <h3 class="font-bebas text-2xl leading-6 tracking-[-0.03em]">
          Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla commodo.
        </h3>
        <ExpendableText
          :text="` Mauris varius ipsum mauris, rutrum lobortis magna efficitur a. Donec egestas, nisl
            vehicula feugiat ornare, diam turpis efficitur mi, ac venenatis eros ipsum ac arcu. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias tempore error deleniti cupiditate, necessitatibus ut harum esse consequatur et dolorem magni similique quis tempora vero aliquam obcaecati provident maiores molestias!`"
        />
      </div>
    </div>
  </section>
</template>
