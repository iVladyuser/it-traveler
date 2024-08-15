<script setup>
import { reactive } from 'vue'
import IInput from '../../IInput/IInput.vue'
import FormContainer from '../FormContainer.vue'
import IButton from '../../IButton/IButton.vue'

const emit = defineEmits(['submit'])
const userData = reactive({
  email: '',
  password: ''
})
</script>

<template>
  <FormContainer @submit.prevent="emit('submit', userData)">
    <IInput class="mb-4" placeholder="Email" v-model="userData.email" />
    <IInput type="password" placeholder="Parol" v-model="userData.password" />
    <IButton class="mt-10 w-full" variant="gradient" type="submit">Sign In</IButton>
  </FormContainer>
</template>
