<template>
  <Carousel :autoplay="2000" v-bind="settings" :breakpoints="breakpoints">
    <Slide v-for="(value, index) in data" :key="index">
      <div
      :title="value.product_name"
      @click="goToSlugPage(value.slug)"
        class="cursor-pointer carousel__item w-full border p-4 transition-transform duration-300 transform hover:scale-105 h-[345px]"
      >
        <img
          :src="value.img"
          class="max-h-[232px] max-w-[232px] mb-3"
          alt="no-img"
        />
        <div class="font-bold text-base truncate w-full">
          {{ value.product_name }}
        </div>
        <el-button
          class="btn-none !h-[35px] md:w-[170px] mt-2 !hover:bg-[#DC0F0F] !hover:text-[#FFFFFF]"
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
import { useRouter } from 'vue-router';

const router = useRouter();

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
    itemsToShow: 3.5,
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

const goToSlugPage = (slug) => {
  router.push({ name: 'san-pham-slug', params: { slug: slug } });
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
