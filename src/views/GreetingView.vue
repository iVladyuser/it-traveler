<script setup>
import BaseLayout from '../layouts/BaseLayout.vue'
import IButton from '../components/IButton/iButton.vue'
</script>

<template>
  <BaseLayout>
    <div class="text-center">
      <img class="inline mb-6" src="../assets/img/map-pin.svg" alt="" />
      <h1 class="font-bold text-4xl mb-7">IT traveler</h1>
      <p class="leading-6 mb-11">
        A simple and user-friendly web application that allows you to mark your favorite places, as
        well as those you would really love to visit. So don't hesitate, give it a try!
      </p>
      <IButton to="/auth/registration">START</IButton>
    </div>
  </BaseLayout>
</template>
