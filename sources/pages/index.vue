<script setup>
import { ref, computed, onMounted } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import apiService from "@/service/service.ts";

const listBanner = ref([]);
const listProduct = ref([]);
const listService = ref([]);
const loading = ref(false);

const getBanner = async () => {
  const response = await apiService.postAll("/banners");
  listBanner.value = response.data?.data;
};
const getProduct = async (category) => {
  loading.value = true;
  const response = await apiService.postAll("/product", { hot: 1 });
  listProduct.value = response.data.data.items;
  loading.value = false;
};
const getService = async () => {
  const response = await apiService.getAll("/services");
  listService.value = response.data?.data;
};

const banners = computed(() => {
  return listBanner.value.slice(0, 2);
});
const service = computed(() => {
  return listService.value.slice(0, 3);
});

onMounted(() => {
  getBanner();
  getProduct();
  getService();
});
</script>
<template>
  <div v-loading="loading">
    <Carousel class="m-auto w-full" :items-to-show="1">
      <Slide class="w-full" v-for="slide in 10" :key="slide">
        <img class="w-full cursor-pointer" src="@/assets/images/slider.png" />
      </Slide>

      <template #addons>
        <Navigation />
        <!-- <Pagination /> -->
      </template>
    </Carousel>

    <div class="container m-auto mt-12 p-8">
      <div class="w-full flex justify-center">
        <div class="grid grid-cols-2 gap-4 w-full xl:w-[1000px] 2xl:w-[1240px]">
          <div v-for="value in banners" :key="value" class=" ">
            <img
              class="w-full cursor-pointer transition-transform duration-300 transform hover:scale-105"
              :src="value.img"
            />
          </div>
        </div>
      </div>

      <div class="mt-8 grid grid-cols-7 w-1/2 m-auto">
        <div class="bg-black h-1 mt-3 col-span-2"></div>
        <div
          class="col-span-3 text-center m-auto text-main font-main-bold text-xl"
        >
          KHÁM PHÁ GOTECH
        </div>
        <div class="bg-black h-1 mt-3 col-span-2"></div>
      </div>

      <div class="flex justify-center text-justify">
        <div class="w-full xl:w-[800px] 2xl:w-[1040px]">
          Gotech là thương hiệu tiên phong trong lĩnh vực cung cấp phụ kiện và
          thiết bị thông minh cho xe ô tô, mang đến sự an tâm tuyệt đối cho
          khách hàng. Với sản phẩm đa dạng từ màn hình ô tô thông minh, Android
          Box, Cảm biến áp suất lốp, Camera 360 đến các giải pháp an toàn khác.
          Gotech không chỉ giúp nâng cao trải nghiệm
        </div>
      </div>

      <div class="grid grid-cols-3 mt-8 px-28">
        <div>
          <img class="m-auto" src="@/assets/images/video.png" />
          <div class="text-center">Video tổng hợp sản phẩm về Gotech</div>
        </div>
        <div>
          <img class="m-auto" src="@/assets/images/video.png" />
          <div class="text-center">Video tổng hợp sản phẩm về Gotech</div>
        </div>
        <div>
          <img class="m-auto" src="@/assets/images/video.png" />
          <div class="text-center">Video tổng hợp sản phẩm về Gotech</div>
        </div>
      </div>
    </div>
    <div class="bg-main-bg p-4">
      <div class="container m-auto">
        <div class="mt-8 grid grid-cols-7 w-1/2 m-auto">
          <div class="bg-black h-1 mt-3 col-span-2"></div>
          <div
            class="col-span-3 text-center m-auto text-main font-main-bold text-xl"
          >
            SẢN PHẨM NỔI BẬT
          </div>
          <div class="bg-black h-1 mt-3 col-span-2"></div>
        </div>

        <div class="flex justify-center">
          <div
            class="w-full xl:w-[1000px] 2xl:w-[1240px] mt-8 grid grid-cols-4 gap-4"
          >
            <div class="mt-8" v-for="value in listProduct" :key="value">
              <img class="m-auto h-[166px] w-full" :src="value.img" />
              <div class="text-center font-main-bold text-lg">
                {{ value.seo_title }}
              </div>
              <div class="h-[54px] text-ellipsis">
                {{ value.seo_description }}
              </div>
              <div class="text-center">
                <BaseButton
                  label="Tìm hiểu thêm"
                  class="bg-white hover:bg-main hover:text-white"
                >
                  Tìm hiểu thêm</BaseButton
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="py-2">
      <PromoBanner :title="'Dịch vụ nâng cấp - độ xe'" />
      <div class="w-full flex justify-center">
        <div class="w-full xl:w-[800px] 2xl:w-[1040px] grid grid-cols-3 gap-6">
          <div v-for="value in service" :key="value">
            <div class="flex">
              <div
                class="w-[80px] h-[80px] border rounded-[50%] flex items-center justify-center"
              >
                <img :src="value.img" alt="" />
              </div>
              <div
                class="h-[80px] font-black text-base text-[#3F3F3F] flex items-center pl-4"
              >
                {{ value.name }}
              </div>
            </div>
            <div class="mt-4 h-[108px] text-justify" v-html="value.description"></div>
            <div class="text-center">
              <BaseButton
                label="Tìm hiểu thêm"
                class="bg-white hover:bg-main hover:text-white"
              >
                Tìm hiểu thêm</BaseButton
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
