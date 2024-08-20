<script setup>
import { reactive, toRaw } from 'vue'
import IButton from '../IButton/IButton.vue'
import IInput from '../../IInput/IInput.vue'

const props = defineProps({
  isLoading: {
    default: false,
    type: Boolean
  }
})
const emit = defineEmits(['submit'])
const userData = reactive({
  name: '',
  email: '',
  password: ''
})
</script>

<template>
  <form @submit.prevent="emit('submit', toRaw(userData))">
    <IInput class="mb-4" label="Full name" v-model="userData.name" />
    <IInput class="mb-4" label="Email" placeholder="email@gmail.com" v-model="userData.email" />
    <IInput label="Parol" type="password" v-model="userData.password" />
    <IButton class="mt-10 w-full" variant="gradient" type="submit" :is-loading="props.isLoading"
      >Create an account</IButton
    >
  </form>
</template>
