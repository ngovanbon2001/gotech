<script setup>
import { ref, computed, onMounted } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import apiService from "@/service/service.ts";
import { Location, PhoneFilled } from "@element-plus/icons-vue";

const listBanner = ref([]);
const listProduct = ref([]);
const listPolicy = ref([]);
const listVideo = ref([]);
const listCategory = ref([]);
const listService = ref([]);
const loading = ref(false);
const listBrand = ref([]);
const listOrganization = ref([]);
const listCar = ref([]);
const brand_id = ref("");
const car_id = ref("");
const category_id = ref("");
const provinces = ref([]);
const districts = ref([]);
const province_id = ref("");
const district_id = ref("");
const organization = ref([]);
const breakpoints = {
  300: {
    itemsToShow: 1,
    snapAlign: "center",
  },
  700: {
    itemsToShow: 3,
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
const listNew = ref([]);

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
const getCategory = async () => {
  loading.value = true;
  const response = await apiService.getAll("/category");
  listCategory.value = response.data.data;
  loading.value = false;
};
const getOrganization = async () => {
  loading.value = true;
  const response = await apiService.getAll("/organization", { province_id: province_id.value, district_id: district_id.value });
  listOrganization.value = response.data.data;
  loading.value = false;
};
const getAllOrganization = async () => {
  loading.value = true;
  const response = await apiService.getAll("/organization");
  organization.value = response.data.data;
  loading.value = false;
};
const getPolicy = async () => {
  loading.value = true;
  const response = await apiService.postAll("/get-config", {
    filter: "policy_home",
  });
  listPolicy.value = response.data.data;
  loading.value = false;
};
const getNew = async () => {
  loading.value = true;
  const response = await apiService.getAll("/get-category-new");
  listNew.value = response.data.data;
  loading.value = false;
};
const getVideo = async () => {
  loading.value = true;
  const response = await apiService.getAll("/get-video");
  listVideo.value = response.data.data;
  loading.value = false;
};
const getProvinces = async () => {
  loading.value = true;
  const response = await apiService.getAll("/provinces");
  provinces.value = response.data.data;
  loading.value = false;
};
const getDistricts = async (province_id) => {
  loading.value = true;
  const response = await apiService.getAll("/districts", { province_id: province_id });
  districts.value = response.data.data;
  loading.value = false;
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
  getCategory();
  getBrand();
  getCar();
  getOrganization();
  getPolicy();
  getNew();
  getVideo();
  getProvinces();
  getAllOrganization();
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

    <div class="container m-auto mt-12 md:p-8 p-2">
      <div class="w-full flex justify-center">
        <div
          class="grid lg:grid-cols-2 grid-cols-1 gap-4 w-full xl:w-[1000px] 2xl:w-[1240px]"
        >
          <div v-for="value in banners" :key="value" class=" ">
            <img
              class="w-full cursor-pointer transition-transform duration-300 transform hover:scale-105"
              :src="value.img"
            />
          </div>
        </div>
      </div>

      <PromoBanner class="mt-8" :title="'KHÁM PHÁ GOTECH'" />

      <div class="flex justify-center text-justify">
        <div class="w-full xl:w-[800px] 2xl:w-[1040px]">
          Gotech là thương hiệu tiên phong trong lĩnh vực cung cấp phụ kiện và
          thiết bị thông minh cho xe ô tô, mang đến sự an tâm tuyệt đối cho
          khách hàng. Với sản phẩm đa dạng từ màn hình ô tô thông minh, Android
          Box, Cảm biến áp suất lốp, Camera 360 đến các giải pháp an toàn khác.
          Gotech không chỉ giúp nâng cao trải nghiệm
        </div>
      </div>

      <div class="w-full flex justify-center">
        <div
          class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 w-full xl:w-[1000px] 2xl:w-[1240px]"
        >
          <div
            v-for="value in listVideo"
            :key="value"
            class="flex flex-col justify-center items-center"
          >
            <video controls class="w-[359px] h-[202px]">
              <source :src="value.url" type="video/mp4" />
            </video>
            <span class="py-2 overflow-hidden font-normal text-sm">{{
              value.title
            }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-main-bg p-4">
      <div class="container m-auto">
        <PromoBanner class="mt-8" :title="'SẢN PHẨM NỔI BẬT'" />

        <div class="flex justify-center">
          <div
            class="w-full xl:w-[1000px] 2xl:w-[1240px] mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            <div class="transition-transform duration-300 transform hover:scale-105 cursor-pointer" v-for="value in listProduct" :key="value">
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

    <section class="py-2 lg:px-0 px-2">
      <PromoBanner class="mt-8" :title="'Dịch vụ nâng cấp - độ xe'" />
      <div class="w-full flex justify-center py-8">
        <div
          class="w-full xl:w-[800px] 2xl:w-[1040px] grid lg:grid-cols-3 grid-cols-1 gap-6"
        >
          <div v-for="value in service" :key="value">
            <div class="flex">
              <div
                class="w-[80px] h-[80px] border rounded-[50%] flex items-center justify-center"
              >
                <img :src="value.img" alt="" />
              </div>
              <div
                class="h-[80px] uppercase font-black text-base text-[#3F3F3F] flex items-center pl-4"
              >
                {{ value.name }}
              </div>
            </div>
            <div
              class="mt-4 h-[108px] text-justify"
              v-html="value.description"
            ></div>
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

    <!-- Tìm kiếm sản phẩm -->
    <section class="product-sale bg-[#F4F4F4] pt-8">
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

    <!-- Hệ thống đại lý -->
    <section class="pt-8">
      <PromoBanner :title="'Hệ thống đại lý'" />
      <div class="w-full uppercase text-center font-bold lg:text-2xl text-lg py-4">
        Nhà phân phối / ĐẠI LÝ tiêu biểu
      </div>
      <div class="w-full flex justify-center">
        <div
          class="xl:w-[1000px] lg:w-[950px] 2xl:w-[1240px] w-full md:w-[700px]"
        >
          <Carousel
            :autoplay="2000"
            v-bind="settings"
            :breakpoints="breakpoints"
          >
            <Slide v-for="(value, index) in organization" :key="index">
              <div
                :title="value.product_name"
                @click="goToSlugPage(value.slug)"
                class="cursor-pointer carousel__item w-[217px] transition-transform duration-300 transform hover:scale-105 h-[345px]"
              >
                <img
                  :src="value.img"
                  class="max-h-[232px] max-w-[217px] mb-3"
                  alt="no-img"
                />
                <div
                  class="font-bold text-base truncate w-full text-left uppercase"
                >
                  {{ value.name }}
                </div>
                <div class="flex pt-4">
                  <p class="font-bold text-base whitespace-nowrap">Khu vực:</p>
                  &emsp14; {{ value.province ?? "Hà Nội" }}
                </div>
                <div class="flex w-[217px] text-justify">
                  Địa chỉ: {{ value.address ?? "Hà Nội" }}
                </div>
              </div>
            </Slide>

            <template #addons>
              <Navigation />
            </template>
          </Carousel>
        </div>
      </div>
    </section>
    <!-- 500 Đại lý gần nhất -->
    <section class="flex justify-center mb-8">
      <div
        class="xl:w-[1000px] lg:w-[950px] 2xl:w-[1240px] w-full md:w-[700px] rounded py-8 lg:px-6 px-2 border-[#E4E4E4] border"
      >
        <div class="w-full uppercase text-center font-bold lg:text-2xl text-lg py-4">
          tìm đại lý gần nhất - 500 đại lý
        </div>
        <div>
          <div class="flex justify-center w-full py-6 px-2">
            <div class="grid grid-cols-3 lg:w-[856px] w-full gap-8">
              <div class="md:col-span-1 col-span-3">
                <select v-model="province_id" @change="getDistricts(province_id)" class="custom-select">
                  <option disabled value="">Chọn tỉnh/Thành phố</option>
                  <option
                    v-for="item in provinces"
                    :key="item.id"
                    :value="item.id"
                  >
                    {{ item.name }}
                  </option>
                </select>
              </div>

              <div class="md:col-span-1 col-span-3">
                <select v-model="district_id" class="custom-select">
                  <option disabled value="">Chọn Quận/Huyện</option>
                  <option
                    v-for="item in districts"
                    :key="item.id"
                    :value="item.id"
                  >
                    {{ item.name }}
                  </option>
                </select>
              </div>
              <div class="md:col-span-1 col-span-3">
                <el-button
                  @click="getOrganization"
                  class="red-DC0F0F !h-10 w-full"
                  >Tìm Đại Lý Lắp Đặt</el-button
                >
              </div>
            </div>
          </div>
        </div>
        <div class="w-full grid grid-cols-1 lg:grid-cols-4 gap-4 lg:px-8">
          <div v-for="value in listOrganization" :key="value">
            <div
              class="uppercase font-bold truncate cursor-pointer"
              :title="value.name"
            >
              {{ value.name }}
            </div>
            <div class="flex gap-2 pt-4">
              <el-icon class="w-[17px]"><Location /></el-icon>
              <div>{{ value.address ?? "Hà Nội" }}</div>
            </div>
            <div class="flex gap-2">
              <el-icon class="w-[17px]"><PhoneFilled /></el-icon>
              <div>{{ value.phone ?? "0933.84.6969" }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End 500 đại lý gần nhất -->
    <!-- Chính sách gotech -->
    <section class="py-8 bg-[url('/images/bg-dai-ly.png')] lg:px-0 px-2">
      <PromoBanner
        :white="false"
        class="!text-[#FFFFFF]"
        :title="'Chính sách gotech'"
      />
      <div class="w-full flex justify-center">
        <div
          class="xl:w-[1000px] lg:w-[950px] 2xl:w-[1240px] w-full md:w-[700px] grid grid-cols-1 lg:grid-cols-3"
        >
          <div v-for="value in listPolicy" :key="value" class="flex gap-4 pt-4">
            <div
              class="w-[80px] h-[80px] rounded-[50%] mt-4 bg-[#FFFFFF] flex justify-center items-center"
            >
              <div><img src="/images/chinh-sach.png" alt="no-img" /></div>
            </div>
            <div>
              <div class="w-full font-black text-base text-[#FFFFFF]">
                {{ value.title }}
              </div>
              <div
                class="max-w-[278px] text-justify text-[#FFFFFF] py-2 text-[13px]"
              >
                {{ value.value }}
              </div>
              <div>
                <BaseButton
                  label="Xem thêm"
                  class="bg-main text-[#FFFFFF] border-[#FFFFFF] hover:text-main hover:bg-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End chính sách gotech -->
    <!-- Tạp chí xe -->
    <section class="py-8 lg:px-0 px-2">
      <PromoBanner :title="'Chuyên trang tạp chí xe'" />
      <div class="flex justify-center py-4">
        <div
          class="xl:w-[1000px] lg:w-[950px] 2xl:w-[1240px] w-full md:w-[700px] grid grid-cols-2 lg:grid-cols-5 lg:gap-6 gap-2"
        >
          <div class="cursor-pointer transition-transform duration-300 transform hover:scale-105" v-for="value in listNew" :key="value">
            <img class="w-full" :src="value.img" alt="no-img" />
            <div class="text-center font-bold text-lg py-2">
              {{ value.name }}
            </div>
            <div class="text-center">
              {{ value.description ?? "Kinh nghiệm chọn sản phẩm cho xe" }}
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End tạp chí xe -->
  </div>
</template>
