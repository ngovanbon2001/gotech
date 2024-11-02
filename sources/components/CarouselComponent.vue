<template>
  <Carousel :autoplay="2000" v-bind="settings" :breakpoints="breakpoints">
    <Slide v-for="(value, index) in data" :key="index">
      <div
        class="carousel__item w-full border p-4 transition-transform duration-300 transform hover:scale-105"
      >
        <img
          :src="value.img"
          class="max-h-[232px] max-w-[232px] mb-3"
          alt="no-img"
        />
        <span class="font-bold text-base">{{ value.product_name }}</span>
        <el-button
          class="btn-none !h-[35px] md:w-[170px] mt-4 !hover:bg-[#DC0F0F] !hover:text-[#FFFFFF]"
        >
          Mua ngay
        </el-button>
      </div>
    </Slide>

    <template #addons>
      <Navigation v-if="navigation" />
    </template>
  </Carousel>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
  navigation: {
    type: Boolean,
    default: true,
  },
});

const settings = {
  itemsToShow: 1,
  snapAlign: "center",
};

const breakpoints = {
  300: {
    itemsToShow: 1,
    snapAlign: "center",
  },
  700: {
    itemsToShow: 3,
    snapAlign: "center",
  },
  1000: {
    itemsToShow: 4,
    snapAlign: "start",
  },
  1240: {
    itemsToShow: 4,
    snapAlign: "start",
  },
  1536: {
    itemsToShow: 5,
    snapAlign: "start",
  },
};
</script>

<style scoped>
.carousel__item {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
