<template>
  <div>
    <div v-if="props.title" class="uppercase w-full pb-4 font-bold text-[18px]">
      {{ props.title }}
    </div>
    <div class="lg:col-span-2 col-span-3">
      <div
        v-for="value in news.data"
        :key="value"
        class="flex py-4 gap-4 lg:flex-row flex-col border-b"
      >
        <img
          src="/images/do-xe-hot.png"
          class="w-[360px] max-h-[202px]"
          alt="no-img"
        />
        <div class="w-full">
          <p class="font-bold text-lg">
            {{ value.name }}
          </p>
          <p class="font-normal text-sm text-justify">
            {{ value.seo_description }}
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
