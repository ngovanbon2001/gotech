<template>
  <div
    class="w-full lg:w-[950px] xl:w-[1000px] 2xl:w-[1240px] grid lg:grid-cols-4 grid-cols-2 gap-4"
  >
    <div v-for="value in data.data" :key="value">
      <img :src="value.img" alt="no-img" />
      <p
        class="font-bold text-lg text-[#3F3F3F] whitespace-nowrap overflow-hidden cursor-pointer"
        :title="value.name"
      >
        {{ value.name }}
      </p>
      <div class="w-full h-[72px] overflow-hidden text-justify">
        {{ value.seo_description }}
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
});
</script>
