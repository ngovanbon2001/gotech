<template>
  <div>
    <div
      class="w-full lg:w-[950px] xl:w-[1000px] 2xl:w-[1240px] grid grid-cols-3 gap-6"
    >
      <div class="lg:col-span-2 col-span-3">
        <img src="/images/do-xe-hot.png" alt="no-img" />
        <div class="w-full">
          <p class="font-bold text-lg">
            {{ news.data[0].name }}
          </p>
          <p class="font-normal text-sm text-justify">
            {{ news.data[0].seo_description }}
          </p>
        </div>

        <div
          class="col-span-2 grid grid-cols-4 gap-3 border-t border-[#636363] py-4 my-4 lg:hidden"
        >
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
      <div class="lg:col-span-1 col-span-3">
        <div class="w-full grid md:grid-cols-1 grid-cols-2 gap-4">
          <div v-for="value in listNew" :key="value">
            <img class="w-full" :src="value.img" alt="no-img" />
            <div class="w-full">
              <p class="font-bold text-sm">
                {{ value.name }}
              </p>
              <p class="font-normal text-sm text-justify">
                {{ value.seo_description }}
              </p>
            </div>
          </div>
        </div>
        <div class="col-span-1 border-t border-[#636363] py-4 my-4 lg:hidden">
          <img src="/images/banner-2.png" alt="no-img" class="w-full" />
        </div>
      </div>
    </div>
    <div
      class="w-full lg:w-[950px] xl:w-[1000px] 2xl:w-[1240px] hidden lg:grid grid-cols-3 gap-6"
    >
      <div class="lg:col-span-2 col-span-3">
        <div
          class="col-span-2 grid grid-cols-4 gap-3 border-t border-[#636363] py-4 my-4"
        >
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
      <div class="lg:col-span-1 col-span-3">
        <div class="col-span-1 border-t border-[#636363] py-4 my-4">
          <img src="/images/banner-2.png" alt="no-img" class="w-full" />
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
});

const listNew = computed(() => {
  return props.news.data.slice(1, 3);
});
</script>
