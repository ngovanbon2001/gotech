<template>
  <div class="content">
    <section class="flex justify-center">
      <Breadcrumb :items="breadcrumbItems" />
    </section>
    <!-- Banner -->
    <section class="flex justify-center md:px-0 px-2">
      <div class="w-full lg:w-[950px] xl:w-[1000px] 2xl:w-[1240px]">
        <div
          class="w-full grid lg:grid-cols-3 grid-cols-1 gap-2 rounded-xl py-4"
        >
          <img
            v-for="value in banner3.data"
            :key="value"
            class="w-full h-[76px]"
            :src="value.img"
            alt="no-img"
          />
        </div>
      </div>
    </section>
    <!-- Độ xe hot -->
    <section class="flex justify-center items-center flex-col md:px-0 px-2">
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
          <div class="w-full" v-for="value in listNew" :key="value">
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
          <div class="col-span-1 border-t border-[#636363] py-4 my-4">
            <img src="/images/banner-2.png" alt="no-img" class="w-full" />
          </div>
        </div>
      </div>
    </section>
    <!-- Bài viết theo xe -->
    <section class="bg-[#F4F4F4] py-4 md:px-0 px-2">
      <PromoBanner :title="'Lọc bài viết theo xe'" />
      <!-- Tìm kiếm sản phẩm -->
      <div class="flex justify-center w-full py-6">
        <div class="grid grid-cols-3 lg:w-[705px] w-full gap-8">
          <div class="md:col-span-1 col-span-4">
            <el-select
              v-model="value"
              placeholder="Chọn hãng xe"
              size="large"
              class="custom-select"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
          <div class="md:col-span-1 col-span-4">
            <el-select
              v-model="value"
              placeholder="Chọn tên xe"
              size="large"
              class="custom-select"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
          <div class="md:col-span-1 col-span-4">
            <el-button class="red-DC0F0F !h-10 w-full">Tìm sản phẩm</el-button>
          </div>
        </div>
      </div>
      <!-- Logo -->
      <div class="w-full flex justify-center">
        <div
          class="xl:w-[1000px] lg:w-[950px] 2xl:w-[1240px] w-full md:w-[700px] grid lg:grid-cols-12 grid-cols-4 xl:gap-4 gap-2 py-4 px-2"
        >
          <el-dropdown v-for="i in 12" :key="i" @command="handleCommand">
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item
                  v-for="(option, index) in options"
                  :key="index"
                  :command="option.value"
                >
                  {{ option.label }}
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
            <img
              class="w-[93px] h-[51px]"
              src="/images/logo-1.png"
              alt="no-img"
            />
          </el-dropdown>
        </div>
      </div>
    </section>
    <!-- Tin tức -->
    <section class="flex justify-center py-8 md:px-0 px-2">
      <div
        class="w-full lg:w-[950px] xl:w-[1000px] 2xl:w-[1240px] grid lg:grid-cols-4 grid-cols-2 gap-4"
      >
        <div v-for="value in news.data" :key="value">
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
    </section>
    <!-- Phân trang -->
    <section class="flex justify-center py-2 md:px-0 px-2">
      <div
        class="xl:w-[1000px] lg:w-[950px] 2xl:w-[1240px] w-full md:w-[700px] grid lg:grid-cols-12 grid-cols-4 xl:gap-4 gap-2 py-4 px-2"
      >
        <el-pagination
          size="small"
          background
          layout="pager"
          :total="50"
          class="mt-4 paginate-custom"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import Breadcrumb from "@/components/Breadcrumb.vue";
import PromoBanner from "@/components/PromoBanner.vue";
import Carousel from "~/components/CarouselComponent.vue";
import TitleProduct from "@/components/TitleProduct.vue";
import { banner3, news } from "@/dump/dump.ts";

const breadcrumbItems = [
  { text: "Home", to: "/" },
  { text: "Độ xe", to: "/product" },
];

const listNew = computed(() => {
  return news.data.slice(1, 3);
});
</script>

<style lang="scss" scoped>
.paginate-custom :deep(.is-active) {
    background-color: #DC0F0F !important;
}
</style>
