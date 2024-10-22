<template>
  <div>
    <div
      class="uppercase w-full pb-4 border-b border-[#000000] font-bold text-[18px]"
    >
      {{ props.title }}
    </div>
    <div class="w-full">
      <div
        v-for="value in data" :key="value"
        class="flex gap-2 py-2 transition-transform duration-300 transform hover:scale-105"
      >
        <img class="w-[98px]" :src="value.img" alt="no-img" />
        <div class="text-justify font-normal text-sm">
          {{ value.name }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  data: {
    type: Array,
    default: [],
  },
  title: {
    type: String,
    default: "",
  },
});
</script>
