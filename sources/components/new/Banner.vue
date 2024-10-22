<template>
  <div class="w-full lg:w-[950px] xl:w-[1000px] 2xl:w-[1240px]">
    <div class="w-full grid lg:grid-cols-3 grid-cols-1 gap-2 rounded-xl py-4">
      <img
        v-for="value in data"
        :key="value"
        class="w-full h-[76px]"
        :src="value.img"
        alt="no-img"
      />
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
    data: {
        type: Array,
        default: [],
    }
});
</script>
