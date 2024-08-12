<script setup>
import FavoritePlace from '../FavoritePlace/FavoritePlace.vue'
import iButton from '../iButton/iButton.vue'
import { ref } from 'vue'

const buttonVariant = ref('gradient')

const changeButtonVariant = () => {
  buttonVariant.value = buttonVariant.value === 'gradient' ? 'outlined' : 'gradient'
}
</script>

<template>
  <div class="px-6">
    <div class="text-gray mb-4">Added markers ({{ counter }})</div>
    <FavoritePlace v-for="n in 4" :key="n" />

    <iButton class="w-full mt-10" :variant="buttonVariant" @click="changeButtonVariant"
      >Add marker</iButton
    >
  </div>
</template>
