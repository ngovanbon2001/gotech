<template>
  <div class="content">
    <section class="flex justify-center bg-[#F4F4F4]">
      <Breadcrumb :items="breadcrumbItems" />
    </section>
    <section class="product-sale bg-[#F4F4F4]">
      <PromoBanner :title="'CHỌN SẢN PHẨM CỦA GOTECH THEO XE'" />
      <!-- Tìm kiếm sản phẩm -->
      <div class="flex justify-center w-full py-6">
        <div class="grid grid-cols-4 lg:w-[856px] w-full gap-8">
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
            <el-select
              v-model="value"
              placeholder="Chọn sản phẩm"
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
    <!-- Sản phẩm theo xe -->
    <section class="product-category pt-8 pb-4">
      <div>
        <div class="flex justify-center">
          <TitleProduct :title="'Android Box ô tô'" />
        </div>
        <div class="w-full flex justify-center py-4">
          <div
            class="xl:w-[1000px] 2xl:w-[1240px] w-[300px] md:w-[700px] lg:w-[950px]"
          >
            <CarouselPR :data="products" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Breadcrumb from "@/components/Breadcrumb.vue";
import PromoBanner from "@/components/PromoBanner.vue";
import CarouselPR from "./components/Carousel.vue";
import TitleProduct from "~/components/TitleProduct.vue";
import { products, banners, categories } from "@/dump/dump.ts";

const breadcrumbItems = [
  { text: "Home", to: "/" },
  { text: "Sản phẩm Gotech theo xe", to: "/product" },
];
const currentFooter = ref(banners.value[0].title);
const descFooter = ref(banners.value[0]?.description);
const carouselHeight = ref("295px");
const options = ref([
  { label: "Option 1", value: 1 },
  { label: "Option 2", value: 2 },
  { label: "Option 3", value: 3 },
]);

const updateFooter = (index) => {
  currentFooter.value = banners.value[index].title;
  descFooter.value = banners.value[index]?.description;
};
const updateCarouselHeight = () => {
  if (typeof window !== "undefined") {
    if (window.innerWidth <= 480) {
      carouselHeight.value = "100px";
    } else if (window.innerWidth <= 768) {
      carouselHeight.value = "150px";
    } else {
      carouselHeight.value = "295px";
    }
  }
};

onMounted(() => {
  updateCarouselHeight();
  window.addEventListener("resize", updateCarouselHeight);
});
</script>

<style lang="scss" scoped>
.custom-carousel {
  height: 295px;
}

.custom-select :deep(.el-select__wrapper) {
  @media (max-width: 1024px) {
    .custom-carousel {
      height: 214px;
    }
  }
}
</style>
