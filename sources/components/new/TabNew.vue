<template>
  <div>
    <div
      class="uppercase w-full pb-4 font-bold text-[18px]"
    >
      {{ props.title }}
    </div>
    <div class="lg:col-span-2 col-span-3">
      <div class="flex gap-4 lg:flex-row flex-col">
        <img src="/images/do-xe-hot.png" class="w-[360px] max-h-[202px]" alt="no-img" />
        <div class="w-full">
          <p class="font-bold text-lg">
            {{ news.data[0].name }}
          </p>
          <p class="font-normal text-sm text-justify">
            {{ news.data[0].seo_description }}
          </p>
        </div>
      </div>
      <div class="col-span-2 grid grid-cols-4 gap-3 py-4 my-4">
        <div
          v-for="value in news.data"
          :key="value"
          class="lg:col-span-1 col-span-4 flex lg:flex-col flex-row gap-2"
        >
          <img :src="value.img" alt="no-img" class="w-[98px] md:w-auto" />
          <p class="font-bold text-sm text-justify">
            {{ value.name }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  news: {
    type: Array,
    default: [],
  },
  title: {
    type: String,
    default: "",
  },
});

const listNew = computed(() => {
  return props.news.data.slice(1, 3);
});
</script>
