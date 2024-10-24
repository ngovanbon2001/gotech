<template>
  <div>
    <div v-if="props.title" class="w-full flex justify-center my-2">
      <div
        class="uppercase pb-4 font-bold text-[18px] w-full lg:w-[950px] xl:w-[1000px] 2xl:w-[1240px] grid grid-cols-3 gap-6"
      >
        {{ props.title }}
      </div>
    </div>
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
