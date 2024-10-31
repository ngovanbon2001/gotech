<template>
  <div class="content" v-loading="loading">
    <section class="flex justify-center">
      <Breadcrumb :items="breadcrumbItems" />
    </section>
    <!-- Banner -->
    <section class="flex justify-center md:px-0 px-2">
      <Banner :data="listBanner" />
    </section>
    <!-- Độ xe hot -->
    <section class="flex justify-center items-center flex-col md:px-0 px-2">
      <NewHot :news="listNew"/>
    </section>
    <!-- Bài viết theo xe -->
    <section class="bg-[#F4F4F4] py-4 md:px-0 px-2">
      <PromoBanner :title="'Lọc bài viết theo xe'" />
      <!-- Tìm kiếm sản phẩm -->
      <div class="flex justify-center w-full py-6">
        <div class="grid grid-cols-3 lg:w-[705px] w-full gap-8">
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
            <el-button class="red-DC0F0F !h-10 w-full">Tìm sản phẩm</el-button>
          </div>
        </div>
      </div>
      <!-- Logo -->
      <div class="w-full flex justify-center">
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
    <!-- Tin tức -->
    <section class="flex justify-center py-8 md:px-0 px-2">
      <ListNew :data="listNew"/>
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
          :total="listNew?.total"
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
import apiService from "@/service/service.ts";

const breadcrumbItems = [
  { text: "Home", to: "/" },
  { text: "Độ xe", to: "/news" },
];
const brand_id = ref("");
const car_id = ref("");
const listBrand = ref([]);
const listBanner = ref([]);
const listCar = ref([]);
const listNew = ref([]);
const loading = ref(false);

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
const getBanner = async () => {
  let response = await apiService.postAll('/banners');  
  listBanner.value = response.data.data.slice(0, 3);
}
const getNew = async () => {
  loading.value = true;
  const response = await apiService.postAll("/news", { category_id: [12] });
  listNew.value = response.data.data;
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
  getBrand();
  getCar();
  getBanner();
  getNew();
});
</script>

<style lang="scss" scoped>
.paginate-custom :deep(.is-active) {
  background-color: #dc0f0f !important;
}
</style>
