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
      <NewHot :news="news"/>
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
      <ListNew :data="news"/>
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
import Banner from "@/components/new/Banner.vue";
import NewHot from "@/components/new/NewHot.vue";
import ListNew from "@/components/new/ListNew.vue";

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
