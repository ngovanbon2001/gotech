<template>
  <div class="content" v-loading="loading">
    <section class="flex justify-center">
      <Breadcrumb :items="breadcrumbItems" />
    </section>
    <!-- Banner -->
    <section class="flex justify-center md:px-0 px-2">
      <Banner :data="banners" />
    </section>
    <!-- Độ xe hot -->
    <section class="flex justify-center items-center flex-col md:px-0 px-2">
      <NewHot :news="listNew" />
    </section>
    <section class="flex justify-center items-center flex-col md:px-0 px-2">
      <div
        class="w-full lg:w-[950px] xl:w-[1000px] 2xl:w-[1240px] grid grid-cols-3 gap-6"
      >
        <div class="lg:col-span-2 col-span-3">
          <TabNew :title="'Thị trường xe'" :news="news" />
        </div>
        <div class="lg:col-span-1 col-span-3">
          <ColNew :title="'Tin được đọc nhiều'" :data="news.data" />
        </div>
      </div>
    </section>

    <section class="flex justify-center items-center flex-col md:px-0 px-2">
      <div
        class="w-full lg:w-[950px] xl:w-[1000px] 2xl:w-[1240px] grid grid-cols-3 gap-6"
      >
        <div class="lg:col-span-2 col-span-3">
          <TabNew :title="'Thị trường xe'" :news="news" />
        </div>
        <div class="lg:col-span-1 col-span-3">
          <ListProduct :title="'Độ xe'" />
        </div>
      </div>
    </section>
    <!-- Tin tức -->
    <section class="flex justify-center py-8 md:px-0 px-2">
      <ListNew :title="'Độ xe'" :data="news" />
    </section>
  </div>
</template>

<script setup>
import Breadcrumb from "@/components/Breadcrumb.vue";
import PromoBanner from "@/components/PromoBanner.vue";
import Carousel from "~/components/CarouselComponent.vue";
import TitleProduct from "@/components/TitleProduct.vue";
import { banner3, news } from "@/dump/dump.ts";
import Banner from "@/components/new/Banner.vue";
import NewHot from "@/components/new/NewHot.vue";
import ListNew from "@/components/new/ListNew.vue";
import TabNew from "@/components/new/TabNew.vue";
import ColNew from "@/components/new/ColNew.vue";
import ListProduct from "@/components/new/ListProduct.vue";
import { computed } from "vue";
import apiService from "@/service/service.ts";

const breadcrumbItems = [
  { text: "Home", to: "/" },
  { text: "Tạp chí xe", to: "#" },
];
const listBanner = ref([]);
const listNew = ref([]);
const loading = ref(false);

const getBanner = async () => {
  const response = await apiService.postAll("/banners");
  listBanner.value = response.data?.data;
};
const getNew = async () => {
  loading.value = true;
  const response = await apiService.postAll("/news", { category_id: [10] });
  listNew.value = response.data.data;
  loading.value = false;
};

const banners = computed(() => {
  return listBanner.value.slice(0,3);
});

onMounted(() => {
  getBanner();
  getNew();
});
</script>

<style lang="scss" scoped>
.paginate-custom :deep(.is-active) {
  background-color: #dc0f0f !important;
}
</style>
