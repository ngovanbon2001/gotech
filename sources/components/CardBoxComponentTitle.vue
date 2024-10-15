<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
    isCenter: {
        type: Boolean,
        default: false
    }
});
</script>

<template>
  <div
      :class="isCenter ? 'justify-center' : 'justify-between'"
      class="flex items-center mb-3"
  >
    <h2 class="text-lg text-[#262626] font-medium">
      {{ title }}
    </h2>
    <slot />
  </div>
</template>
