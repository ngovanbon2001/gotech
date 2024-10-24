<template>
  <div>
    <div class="uppercase w-full pb-4 font-bold text-[18px]">
      {{ props.title }}
    </div>
    <div class="w-full lg:overflow-hidden overflow-x-auto">
      <div class="lg:w-full w-[700px] grid grid-cols-4 lg:grid-cols-2 gap-2">
        <div
          class="border border-[#DFDFE7] p-2 w-[161px] h-[225px] bg-[#FCFCFC] transition-transform duration-300 transform hover:scale-105"
        >
          <img src="/images/san-pham-01.png" class="h-206px" alt="no-img" />
          <div class="flex flex-col py-4">
            <span class="font-bold text-sm">GOTECH GT2K PRO</span>
            <span class="font-bold text-sm text-[#DC0F0F]">6.700.000đ</span>
          </div>
        </div>
        <div
          class="border border-[#DFDFE7] p-2 w-[161px] h-[225px] bg-[#FCFCFC] transition-transform duration-300 transform hover:scale-105"
        >
          <img src="/images/san-pham-01.png" class="h-206px" alt="no-img" />
          <div class="flex flex-col py-4">
            <span class="font-bold text-sm">GOTECH GT2K PRO</span>
            <span class="font-bold text-sm text-[#DC0F0F]">6.700.000đ</span>
          </div>
        </div>
        <div
          class="border border-[#DFDFE7] p-2 w-[161px] h-[225px] bg-[#FCFCFC] transition-transform duration-300 transform hover:scale-105"
        >
          <img src="/images/san-pham-01.png" class="h-206px" alt="no-img" />
          <div class="flex flex-col py-4">
            <span class="font-bold text-sm">GOTECH GT2K PRO</span>
            <span class="font-bold text-sm text-[#DC0F0F]">6.700.000đ</span>
          </div>
        </div>
        <div
          class="border border-[#DFDFE7] p-2 w-[161px] h-[225px] bg-[#FCFCFC] transition-transform duration-300 transform hover:scale-105"
        >
          <img src="/images/san-pham-01.png" class="h-206px" alt="no-img" />
          <div class="flex flex-col py-4">
            <span class="font-bold text-sm">GOTECH GT2K PRO</span>
            <span class="font-bold text-sm text-[#DC0F0F]">6.700.000đ</span>
          </div>
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
