<script setup>
import FavoritePlace from '../FavoritePlace/FavoritePlace.vue'
import IButton from '../IButton/iButton.vue'

const props = defineProps({
  items: {
    required: true,
    type: Array
  },
  activeId: {
    required: true,
    type: [Number, null]
  }
})

const emit = defineEmits(['place-clicked', 'create'])

const gradient = 'gradient-class'
</script>

<template>
  <div class="px-6 text-black">
    <div class="text-gray mb-4">Added markers</div>
    <slot name="label"></slot>
    <slot name="list">
      <div v-if="items.length === 0">List is empty</div>
      <FavoritePlace
        v-for="place in props.items"
        :key="place.id"
        :title="place.title"
        :description="place.description"
        :img="place.img"
        :is-active="place.id === props.activeId"
        @click="emit('place-clicked', place.id)"
      />
    </slot>

    <slot></slot>
    <IButton class="w-full mt-10" :variant="gradient" @click="emit('create')">Add marker</IButton>
  </div>
</template>
