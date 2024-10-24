<template>
  <div class="content">
    <section class="flex justify-center">
      <Breadcrumb :items="breadcrumbItems" />
    </section>
    <!-- Banner -->
    <section class="flex justify-center md:px-0 px-2">
      <Banner :data="banner3.data" />
    </section>
    <!-- Độ xe hot -->
    <section class="flex justify-center items-center flex-col md:px-0 px-2">
      <NewHot :news="news" />
    </section>
    <section class="flex justify-center items-center flex-col md:px-0 px-2">
      <div
        class=" border-t w-full lg:w-[950px] xl:w-[1000px] 2xl:w-[1240px] grid grid-cols-3 gap-6"
      >
        <div class="lg:col-span-2 col-span-3">
          <ListNewBig :news="news" />
          <div class="w-full py-4 border-b">
            <img src="/images/banner-12.png" alt="">
          </div>
          <ListNewBig :news="news" />
        </div>
        <div class="lg:col-span-1 col-span-3">
          <ColNew class="mt-2" :title="'Tin được đọc nhiều'" :data="news.data" />
          <ListProduct class="mt-2" :title="'Sản phẩm gotech'" />
          <ListProduct class="mt-2" :title="'Các sản phẩm nổi bật'" />
        </div>
      </div>
    </section>

    <!-- Tin tức -->
    <section class="flex justify-center md:px-0 px-2">
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
import ListNewBig from "@/components/new/ListNewBig.vue";
import ColNew from "@/components/new/ColNew.vue";
import ListProduct from "@/components/new/ListProduct.vue";

const breadcrumbItems = [
  { text: "Home", to: "/" },
  { text: "Độ xe", to: "/product" },
];
</script>

<style lang="scss" scoped>
.paginate-custom :deep(.is-active) {
  background-color: #dc0f0f !important;
}
</style>
