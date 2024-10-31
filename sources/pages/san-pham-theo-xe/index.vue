<template>
  <div class="content" v-loading="loading">
    <section class="flex justify-center bg-[#F4F4F4]">
      <Breadcrumb :items="breadcrumbItems" />
    </section>
    <section class="product-sale bg-[#F4F4F4]">
      <PromoBanner :title="'CHỌN SẢN PHẨM CỦA GOTECH THEO XE'" />
      <!-- Tìm kiếm sản phẩm -->
      <div class="flex justify-center w-full py-6 px-2">
        <div class="grid grid-cols-4 lg:w-[856px] w-full gap-8">
          <div class="md:col-span-1 col-span-4">
            <select
              v-model="brand_id"
              class="custom-select"
              @change="handleSelectBrand"
            >
              <option disabled value="">Chọn hãng xe</option>
              <option v-for="item in listBrand" :key="item.id" :value="item.id">
                {{ item.name }}
              </option>
            </select>
          </div>

          <div class="md:col-span-1 col-span-4">
            <select v-model="car_id" class="custom-select">
              <option disabled value="">Chọn tên xe</option>
              <option
                v-for="item in filteredCars"
                :key="item.id"
                :value="item.id"
              >
                {{ item.name }}
              </option>
            </select>
          </div>

          <div class="md:col-span-1 col-span-4">
            <select v-model="category_id" class="custom-select">
              <option disabled value="">Chọn sản phẩm</option>
              <option
                v-for="item in listCategory"
                :key="item.id"
                :value="item.id"
              >
                {{ item.name }}
              </option>
            </select>
          </div>
          <div class="md:col-span-1 col-span-4">
            <el-button
              @click="handleClickSearch"
              class="red-DC0F0F !h-10 w-full"
              >Tìm sản phẩm</el-button
            >
          </div>
        </div>
      </div>
      <!-- Logo -->
      <div class="w-full flex justify-center px-2">
        <div
          class="xl:w-[1000px] lg:w-[950px] 2xl:w-[1240px] w-full md:w-[700px] grid lg:grid-cols-12 grid-cols-4 xl:gap-4 gap-2 py-4 px-2"
        >
          <el-dropdown
            v-for="value in listBrand"
            :key="value"
            @command="handleCommand"
          >
            <template #dropdown>
              <el-dropdown-menu v-model="car_id">
                <el-dropdown-item
                  v-for="(option, index) in value.cars"
                  :key="index"
                  :value="option.id"
                  :command="option.value"
                  @click="updateDrop(option.id)"
                >
                  {{ option.name }}
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
            <img class="w-[93px] h-[51px]" :src="value.img" alt="no-img" />
          </el-dropdown>
        </div>
      </div>
    </section>
    <!-- Sản phẩm theo xe -->
    <section class="product-category pt-8 pb-4">
      <div v-for="value in listCategoryChild" :key="value">
        <div class="flex justify-center">
          <TitleProduct :title="value.name" />
        </div>
        <div class="w-full flex justify-center py-4">
          <div
            class="xl:w-[1000px] 2xl:w-[1240px] w-[300px] md:w-[700px] lg:w-[950px]"
          >
            <CarouselPR :data="value.product" />
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
import { products, banners } from "@/dump/dump.ts";
import apiService from "@/service/service.ts";
import { computed, reactive, ref } from "vue";

const breadcrumbItems = [
  { text: "Home", to: "/" },
  { text: "Sản phẩm Gotech theo xe", to: "/product" },
];
const currentFooter = ref(banners.value[0].title);
const descFooter = ref(banners.value[0]?.description);
const carouselHeight = ref("295px");
const listCategory = ref([]);
const listCategoryChild = ref([]);
const searchCategoryChild = reactive({
  product_name: "",
  category_id: 0,
});
const listBrand = ref([]);
const listCar = ref([]);
const brand_id = ref("");
const car_id = ref("");
const category_id = ref("");
const loading = ref(false);

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
const getCategory = async () => {
  loading.value = true;
  const response = await apiService.getAll("/category");
  listCategory.value = response.data.data;
  loading.value = false;
};
const getCategoryChild = async () => {
  loading.value = true;
  const response = await apiService.postAll(
    "/category-child",
    searchCategoryChild
  );
  listCategoryChild.value = response.data.data;
  loading.value = false;
};
const getBrand = async () => {
  loading.value = true;
  const response = await apiService.postAll("/brand");
  listBrand.value = response.data.data;
  loading.value = false;
};
const getCar = async () => {
  loading.value = true;
  const response = await apiService.postAll("/car");
  listCar.value = response.data.data;
  loading.value = false;
};
const updateDrop = (id) => {
  brand_id.value = null;
  car_id.value = null;
  car_id.value = id;
};
const handleSelectBrand = () => {
  car_id.value = null;
};
const handleClickSearch = async () => {
  loading.value = true;
  let brand_id = [];
  if (brand_id.value) {
    brand_id = [brand_id.value];
  }
  const response = await apiService.postAll("/category-child", {
    car_id: car_id.value,
    brand_id: brand_id,
    category_id: category_id.value,
  });
  listCategoryChild.value = response.data.data;
  loading.value = false;
};

const filteredCars = computed(() => {
  if (!Array.isArray(listCar.value)) {
    return [];
  }

  return brand_id.value
    ? listCar.value.filter((car) => car.brand_id === brand_id.value)
    : listCar.value;
});

onMounted(() => {
  updateCarouselHeight();
  window.addEventListener("resize", updateCarouselHeight);
  getCategory();
  getBrand();
  getCar();
  getCategoryChild();
});
</script>

<style lang="scss" scoped>
.custom-carousel {
  height: 295px;
}
</style>
