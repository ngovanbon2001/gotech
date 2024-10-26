<template>
  <div class="content">
    <section class="flex justify-center">
      <Breadcrumb :items="breadcrumbItems" />
    </section>
    <section class="product-sale">
      <PromoBanner :title="'Sản phẩm khuyến mãi'" />
      <div class="w-full flex justify-center md:gap-10 py-6">
        <el-button v-for="value in listButtonCategory" :key="value" class="btn-none !h-10 md:w-[228px]">{{ value.name }}</el-button>
      </div>
      <div class="w-full flex justify-center">
        <div class="relative w-full xl:w-[1000px] 2xl:w-[1240px] px-4 md:px-0">
          <el-carousel
            :interval="5000"
            arrow="never"
            class="custom-carousel"
            indicator-position="outside"
            :height="carouselHeight"
            @change="updateFooter"
          >
            <el-carousel-item v-for="item in listBanner" :key="item.id">
              <img
                class="transition-transform duration-300 transform hover:scale-105 w-full"
                :src="item.img"
                alt=""
              />
            </el-carousel-item>
          </el-carousel>

          <div class="w-full bg-white p-2 text-center mt-4 flex justify-center">
            <div class="w-[60%] md:w-full">
              <span class="text-lg font-bold">{{ currentFooter }}</span>
            </div>
          </div>
          <div class="w-full flex justify-center">
            <p class="w-[874px] text-justify" v-html="descFooter"></p>
          </div>
        </div>
      </div>
      <div class="w-full flex justify-center py-6">
        <div class="xl:w-[1000px] lg:w-[950px] 2xl:w-[1240px] w-[300px] md:w-[700px]">
          <Carousel :data="products" />
        </div>
      </div>
    </section>
    <section class="product-category">
      <PromoBanner :title="'Danh mục sản phẩm'" />
      <div class="text-center pt-6 pb-4">
        <span class="font-bold text-lg text-[#3F3F3F]">Tìm kiếm sản phẩm</span>
      </div>
      <div class="flex justify-center md:px-0 px-3">
        <el-input
          v-model="input2"
          class="md:max-w-[382px] h-10 mr-4"
          placeholder="Tìm kiếm sản phẩm"
          :suffix-icon="CaretRight"
        />
        <el-button class="btn-none !h-10 md:w-[150px] red-DC0F0F"
          >Tìm kiếm</el-button
        >
      </div>
      <div class="mt-4 mb-10 xl:ml-[29px] mx-4 xl:flex">
        <div
          class="category py-3 xl:w-[382px] xl:mr-8 md:w-[200px] w-full overflow-y-auto"
        >
          <div
            v-for="(value, key) in categories"
            :key="key"
            class="category-child"
          >
            {{ value.name }}
          </div>
        </div>
        <div class="grid xl:grid-cols-6 grid-cols-3 xl:w-[1046px] md:my-0 my-4">
          <div
            v-for="(value, key) in categories"
            :key="key"
            class="flex flex-col justify-center items-center transition-transform duration-300 transform hover:scale-105"
          >
            <div class="flex justify-center items-center w-[84px] h-[84px] bg-[#F8F8F8] rounded-[50%]">
              <img class="w-[63px] h-[44.91px]" :src="value.img" alt="no-img" />
            </div>
            <div class="font-bold md:text-lg text-sm text-center">{{ value.name }}</div>
          </div>
        </div>
      </div>
      <div>
        <div class="flex justify-center">
          <TitleProduct :title="'Android Box ô tô'" />
        </div>
        <div class="w-full flex justify-center py-4">
          <div class="xl:w-[1000px] lg:w-[950px] 2xl:w-[1240px] w-[300px] md:w-[700px]">
            <Carousel :data="products" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Breadcrumb from "@/components/Breadcrumb.vue";
import PromoBanner from "@/components/PromoBanner.vue";
import Carousel from "./components/Carousel.vue";
import TitleProduct from "@/components/TitleProduct.vue";
import { products, banners } from "@/dump/dump.ts";
import apiService  from "@/service/service.ts";
import { computed, ref } from "vue";

const breadcrumbItems = [
  { text: "Home", to: "/" },
  { text: "Sản phẩm", to: "/product" },
];
const carouselHeight = ref("295px");
const listCategory = ref([]);
const listCategoryDiscount = ref([]);
const listBanner = ref([]);
const currentFooter = ref("");
const descFooter = ref("");

const updateFooter = (index) => {
  currentFooter.value = listBanner?.value[index].title;
  descFooter.value = listBanner?.value[index]?.content;
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
const getCategory = async () => {
  let response = await apiService.getAll('/category');  
  listCategory.value = response.data.data;
}
const getCategoryDiscount = async () => {
  let response = await apiService.getAll('/category', {discount: true});  
  listCategoryDiscount.value = response.data.data;
}
const getBanner = async () => {
  let response = await apiService.postAll('/banners');  
  listBanner.value = response.data.data;
  currentFooter.value = listBanner.value[0].title
  descFooter.value = listBanner.value[0].content
}

const listButtonCategory = computed(() => {
  return listCategoryDiscount.value.slice(0, 2);
});
const categories = computed(() => {
  return listCategory.value;
});
const banners1 = computed(() => {
  return listBanner.value;
});

onMounted(() => {
  updateCarouselHeight();
  window.addEventListener("resize", updateCarouselHeight);
  getCategory();
  getCategoryDiscount();
  getBanner();
});
</script>

<style lang="scss" scoped>
.custom-carousel {
  height: 295px;
}

@media (max-width: 768px) {
  .custom-carousel {
    height: 200px;
  }
}

@media (max-width: 480px) {
  .custom-carousel {
    height: 80px;
  }
}

@media (max-width: 1400px) {
  .custom-carousel {
    height: 250px;
  }
}

.product-card {
  width: 200px;
  margin: auto;
}

.category {
  height: 164px;
  left: 29px;
  gap: 0px;
  opacity: 0px;
  background: #ffffff;
  box-shadow: 0px 0px 4px 0px #00000040;

  .category-child {
    height: 28px;
    gap: 0px;
    opacity: 0px;
    padding-left: 29px;
  }
  .category-child:hover {
    background: #f4f4f4;
    text-decoration: underline;
  }
}
</style>
