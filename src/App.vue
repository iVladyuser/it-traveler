<script setup>
import IButton from './components/IButton/IButton.vue'
</script>

<template>
  <main class="flex h-screen">
    <section class="flex-1 flex justify-center items-center px-5 bg-primary">
      <div class="text-white text-center">
        <img class="inline mb-6" src="./assets/img/map-pin.svg" alt="" />
        <h1 class="font-bold text-4xl mb-7">IT traveler</h1>
        <p class="leading-6 mb-11">
          A simple and user-friendly web application that allows you to mark your favorite places,
          as well as those you would really love to visit. So don't hesitate, give it a try!
        </p>
        <IButton></IButton>
      </div>
    </section>
    <section class="flex-1">
      <img class="h-full object-cover" src="./assets/img/static-map.png" alt="" />
    </section>
  </main>
</template>
