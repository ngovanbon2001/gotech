<template>
  <div class="content" v-loading="loading">
    <section class="flex justify-center">
      <Breadcrumb :items="breadcrumbItems" />
    </section>
    <section class="product-detail">
      <div
        class="flex px-2 md:px-9 lg:px-0 lg:flex-row flex-col items-center-ct justify-center lg:gap-10"
      >
        <div class="w-full md:w-[400px] 2xl:w-[554px]">
          <!-- Hình ảnh sản phẩm -->
          <Carousel v-bind="settings" :breakpoints="breakpoints" ref="carousel">
            <Slide v-for="(value, index) in filteredImages" :key="index">
              <div
                class="carousel__item transition-transform duration-300 transform hover:scale-105"
              >
                <img :src="value.img" alt="no-img" />
              </div>
            </Slide>

            <template #addons>
              <Navigation />
            </template>
          </Carousel>
          <!-- Menu đặc điểm -->
          <Carousel
            class="py-4"
            id="thumbnails"
            :items-to-show="5"
            :wrap-around="true"
          >
            <Slide v-for="value in slide" :key="value">
              <div
                class="carousel__item cursor-pointer h-[100px] flex flex-col items-center transition-transform duration-300 transform hover:scale-105"
                @click="slideTo(value.id)"
              >
                <div class="h-[60px]">
                  <img :src="value.img" class="2xl:w-[60px] w-[40px]" alt="" />
                </div>
                <div class="w-full text-center text-[12px]">
                  {{ value.title }}
                </div>
              </div>
            </Slide>
            <template #addons>
              <Navigation />
            </template>
          </Carousel>
        </div>
        <div class="lg:w-[500px] xl:w-[646px] w-full">
          <span class="font-bold text-2xl text-[#3F3F3F]">{{
            product.data?.product_name
          }}</span>
          <div>
            <span class="font-bold text-[22px] text-[#E70F0F] mr-8"
              >{{ formatMoney(product.data?.discount) }}đ</span
            >
            <del class="font-bold text-[22px] text-[#464646]"
              >{{ formatMoney(product.data?.price) }}đ</del
            >
          </div>
          <div
            class="w-full grid md:grid-cols-2 grid-cols-1 gap-2 rounded-xl py-4"
          >
            <img
              v-for="value in banners"
              :key="value"
              class="w-full h-[76px]"
              :src="value.img"
              alt="no-img"
            />
          </div>
          <div
            class="w-full border border-[#54A0FF] rounded-md h-[138px] px-4 py-2 overflow-y-scroll md:overflow-hidden"
          >
            <span class="uppercase font-bold text-[#3F3F3F] text-[18px]"
              >Tính năng nổi bật của sản phẩm</span
            >
            <div class="grid md:grid-cols-2 grid-cols-1">
              <div
                v-for="value in product.data?.feature"
                :key="value"
                class="flex gap-2 items-center py-1"
              >
                <img
                  src="/images/check.png"
                  class="h-[19px]"
                  alt="no-img"
                /><span class="font-normal text-sm">{{ value }}</span>
              </div>
            </div>
          </div>
          <div class="w-full gap-4 my-4 lg:flex">
            <div
              class="border h-[281px] py-4 px-4 lg:w-[55%] xl:w-[348px] w-full border-[#54A0FF] rounded-md overflow-y-scroll md:overflow-hidden"
            >
              <span class="font-bold text-[18px]"
                >Điểm nổi bật của sản phẩm</span
              >
              <div
                v-for="value in product.data?.characteristics"
                :key="value"
                class="flex gap-2 items-center py-4 border-b"
              >
                <img
                  src="/images/secur.png"
                  class="h-[19px]"
                  alt="no-img"
                /><span class="font-normal text-sm">{{ value }}</span>
              </div>
            </div>
            <div class="grid grid-rows-4 gap-4 lg:w-[45%] xl:w-[282px] w-full">
              <div
                v-for="value in configs"
                :key="value"
                class="border flex items-center lg:my-0 my-4 py-2 px-2 xl:py-2 xl:px-4 border-[#54A0FF] rounded-md"
              >
                <div class="flex gap-2 items-center">
                  <img
                    src="/images/check-1.png"
                    class="h-[19px]"
                    alt="no-img"
                  /><span
                    v-html="value.value"
                    class="font-normal text-sm"
                  ></span>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full grid md:grid-cols-2 grid-cols-1 gap-2">
            <div>
              <el-button class="btn-black !h-10 w-full !font-bold text-[18px]"
                >ĐĂNG KÝ DÙNG THỬ MIỄN PHÍ</el-button
              >
            </div>
            <div>
              <el-button class="btn-primary !h-10 w-full !font-bold text-[18px]"
                >CẦN TƯ VẤN</el-button
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="video lg:flex justify-center my-4 bg-[#F4F4F4] overflow-x-auto"
    >
      <div
        class="w-[1240px] lg:w-[900px] xl:w-[1100px] 2xl:w-[1240px] lg:px-0 px-4 py-2"
      >
        <span class="font-bold text-[18px] uppercase"
          >Video Tín năng sản phẩm (5)</span
        >
        <div class="w-full py-4 gap-4 grid grid-cols-5">
          <div
            v-for="value in product.data?.video"
            :key="value"
            class="flex flex-col justify-center"
          >
            <video controls class="h-[131px]">
              <source :src="value.url" type="video/mp4" />
            </video>
            <span class="py-2 overflow-hidden font-normal text-sm">{{
              value.title
            }}</span>
          </div>
        </div>
      </div>
    </section>
    <!-- Hình ảnh trên xe -->
    <section class="image lg:flex justify-center my-4 overflow-x-auto">
      <div
        class="w-[1240px] lg:w-[900px] xl:w-[1100px] 2xl:w-[1240px] lg:px-0 px-4"
      >
        <span class="font-bold text-[18px] uppercase"
          >HÌNH ẢNH THỰC TẾ TRÊN XE</span
        >
        <div
          class="cursor-pointer w-[95%] py-4 gap-4 grid grid-cols-5 overflow-x-auto overflow-y-hidden md:overflow-hidden"
        >
          <div
            class="border p-1 border-[#DFDFE7] text-left h-[232px] max-w-[169px]"
            v-for="value in listImgInSide"
            :key="value"
          >
            <img
              class="m-auto h-[152.03px] w-[152.03px]"
              :src="value.img"
              alt=""
            />
            <span class="py-2 overflow-hidden font-normal text-sm">{{
              value.description ?? "Hình ảnh trên xe"
            }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="flex justify-center my-4">
      <div
        class="w-[1240px] lg:w-[900px] xl:w-[1100px] 2xl:w-[1240px] lg:px-0 px-4 grid grid-cols-3 gap-4"
      >
        <!-- Mô tả sản phẩm -->
        <div class="lg:col-span-2 col-span-3">
          <div
            class="uppercase w-full py-4 border-b border-[#000000] font-bold text-[18px]"
          >
            Mô tả sản phẩm
          </div>
          <div v-html="product.data?.description"></div>
          <div class="w-full">
            <img src="/images/comment.png" alt="" />
          </div>
          <div class="description-container">
            <div
              v-html="showFullText ? product.data?.content : shortDescription"
            ></div>
            <!-- Chỉ hiển thị hiệu ứng mờ khi không hiển thị đầy đủ văn bản -->
            <div v-if="!showFullText" class="fade-effect"></div>
          </div>
          <div class="w-full flex justify-center">
            <el-button
              @click="toggleText"
              class="w-[344px] font-normal text-[#2F80ED]"
            >
              {{ showFullText ? "Ẩn đi" : "Xem thêm >" }}
            </el-button>
          </div>
          <!-- Đặt câu hỏi cho Gotech -->
          <div class="w-full pt-4">
            <span class="font-bold text-[18px] uppercase"
              >XIN MỜI ĐẶT CÂU HỎI CHO GOTECH</span
            >
            <div class="py-2 pt-4 grid grid-cols-2 gap-4">
              <div class="col-span-2 lg:col-span-1">
                <el-input v-model="question.name" placeholder="Họ tên" />
              </div>
              <div class="col-span-2 lg:col-span-1">
                <el-input
                  v-model="question.phone"
                  placeholder="Số điện thoại"
                />
              </div>
            </div>
            <div>
              <el-input
                class="custom-textarea"
                v-model="question.question"
                autosize
                type="textarea"
                show-word-limit
                placeholder="Nội dung"
              />
            </div>
            <div class="py-2">
              <el-button
                @click="handleSendQuestion"
                class="!h-[46px] !w-[130px]"
                type="primary"
                >Gửi câu hỏi</el-button
              >
            </div>
          </div>
        </div>
        <!-- Thông số kỹ thuật -->
        <div class="lg:col-span-1 col-span-3">
          <div
            class="uppercase w-full py-4 border-b border-[#000000] font-bold text-[18px]"
          >
            Thông số kỹ thuật
          </div>
          <div
            class="grid grid-rows-[16] w-full p-4 border h-[597px] my-4 rounded-md border-[#DBDBDB]"
          >
            <div class="flex justify-between py-1 border-b border-[#DBDBDB]">
              <p>RAM</p>
              <p>{{ product.data?.specifications?.ram }}</p>
            </div>
            <div class="flex justify-between py-1 border-b border-[#DBDBDB]">
              <p>ROM</p>
              <p>{{ product.data?.specifications?.rom }}</p>
            </div>
            <div class="flex justify-between py-1 border-b border-[#DBDBDB]">
              <p>CPU</p>
              <p>{{ product.data?.specifications?.cpu }}</p>
            </div>
            <div class="flex justify-between py-1 border-b border-[#DBDBDB]">
              <p>GPU</p>
              <p>{{ product.data?.specifications?.gpu }}</p>
            </div>
            <div class="flex justify-between py-1 border-b border-[#DBDBDB]">
              <p>Hệ điều hành</p>
              <p>{{ product.data?.specifications?.operating_system }}</p>
            </div>
            <div class="flex justify-between py-1 border-b border-[#DBDBDB]">
              <p>Màn hình</p>
              <p>{{ product.data?.specifications?.display }}</p>
            </div>
            <div class="flex justify-between py-1 border-b border-[#DBDBDB]">
              <p>Độ phân giải</p>
              <p>{{ product.data?.specifications?.resolution }}</p>
            </div>
            <div class="flex justify-between py-1 border-b border-[#DBDBDB]">
              <p>Kết nối internet 4G</p>
              <p>{{ product.data?.specifications?.internet_4g }}</p>
            </div>
            <div class="flex justify-between py-1 border-b border-[#DBDBDB]">
              <p>Phát Wifi</p>
              <p>{{ product.data?.specifications?.wifi }}</p>
            </div>
            <div class="flex justify-between py-1 border-b border-[#DBDBDB]">
              <p>Radio FM/AM</p>
              <p>{{ product.data?.specifications?.radio }}</p>
            </div>
            <div class="flex justify-between py-1 border-b border-[#DBDBDB]">
              <p>Bluetooth</p>
              <p>{{ product.data?.specifications?.bluetooth }}</p>
            </div>
            <div class="flex justify-between py-1 border-b border-[#DBDBDB]">
              <p>Kết nối hệ thống loa trên xe</p>
              <p>{{ product.data?.specifications?.speaker }}</p>
            </div>
            <div class="flex justify-between py-1 border-b border-[#DBDBDB]">
              <p>Hỗ trợ tích hợp cảm biến áp suất lốp</p>
              <p>{{ product.data?.specifications?.sensor }}</p>
            </div>
            <div class="flex justify-between py-1 border-b border-[#DBDBDB]">
              <p>Bộ xử lý âm thanh số DSP</p>
              <p>{{ product.data?.specifications?.audio_processor }}</p>
            </div>
            <div class="flex justify-between py-1 border-b border-[#DBDBDB]">
              <p>Kho ứng dụng CH Play</p>
              <p>{{ product.data?.specifications?.application }}</p>
            </div>
            <div class="py-2">
              <el-button class="w-full" type="primary" plain
                >Chi tiết thông số kỹ thuật</el-button
              >
            </div>
          </div>
          <!-- Sản phẩm mua cùng -->
          <div
            class="uppercase w-full pb-4 border-b border-[#000000] font-bold text-[18px]"
          >
            Sản phẩm thường mua cùng
          </div>
          <div class="w-full">
            <div
              v-for="value in listProductHot"
              :key="value"
              class="cursor-pointer flex gap-2 py-2 transition-transform duration-300 transform hover:scale-105"
            >
              <img
                class="w-[70px] h-[70px]"
                src="/images/san-pham-01.png"
                alt="no-img"
              />
              <div class="flex flex-col">
                <span class="font-normal text-sm">{{
                  value.product_name
                }}</span>
                <span class="font-normal text-sm"
                  >{{ formatMoney(value.price) }}đ</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Sản phẩm cùng phân khúc -->
    <section
      class="lg:flex justify-center my-4 overflow-y-hidden overflow-x-auto"
    >
      <div
        class="w-[1240px] lg:w-[900px] xl:w-[1100px] 2xl:w-[1240px] lg:px-0 px-4"
      >
        <div class="font-bold text-[18px] uppercase mb-4">
          Sản phẩm cùng phân khúc
        </div>
        <div class="flex gap-4">
          <div
            v-for="value in segement"
            :key="value"
            :title="value.product_name"
            class="cursor-pointer border border-[#DFDFE7] p-2 w-[229px] h-[289px] bg-[#FCFCFC] transition-transform duration-300 transform hover:scale-105"
          >
            <img src="/images/san-pham-01.png" class="h-206px" alt="no-img" />
            <div class="flex flex-col py-4">
              <span class="font-bold text-sm truncate w-full">{{
                value.product_name
              }}</span>
              <span class="font-bold text-sm text-[#DC0F0F]"
                >{{ formatMoney(value.price) }}đ</span
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import CarouselP from "./components/Carousel.vue";
import { settings, breakpoints, slide, banner, products } from "@/dump/dump.ts";
import { formatMoney } from "@/helper/helper.ts";
import { useRoute } from "vue-router";
import apiService from "@/service/service.ts";
import { constant } from "@/constant/constant";
import { ElMessage } from "element-plus";

// Const
const route = useRoute();
const slug = route.params.slug;
const product = ref([]);
const configs = ref([]);
const loading = ref(false);
const breadcrumbItems = [
  { text: "Home", to: "/" },
  { text: "Sản phẩm", to: "/san-pham" },
];
const carousel = ref(null);
const currentType = ref(1);
let activeThumbnail = null;
const showFullText = ref(false);
const listBanner = ref([]);
const listProduct = ref([]);
const listProductSegment = ref([]);
const question = ref({
  product_id: product.id,
  question: "",
  name: "",
  phone: "",
  car: "",
});
// End const

// Function
const slideTo = (id) => {
  const index = filteredImages.value.findIndex((image) => image.type === id);
  carousel.value.slideTo(index);
};
const toggleText = () => {
  showFullText.value = !showFullText.value;
};
const getProduct = async () => {
  loading.value = true;
  const response = await apiService.getAll(`/product/${slug}`);
  product.value = response.data;
  const responseList = await apiService.postAll("/product", {
    brand_id: [response.data?.data?.brand_id],
  });
  listProduct.value = responseList.data.data.items;
  const responseListSegment = await apiService.postAll("/product", {
    price: [response.data?.data?.price, response.data?.data?.price + 1000000],
  });
  listProductSegment.value = responseListSegment.data.data.items;
  loading.value = false;
};
const getConfig = async () => {
  const response = await apiService.postAll(`/get-config`, {
    filter: constant.common_commitment,
  });
  configs.value = response.data.data;
};
const getBanner = async () => {
  const response = await apiService.postAll("/banners");
  listBanner.value = response.data?.data;
};
const handleSendQuestion = async () => {
  const response = await apiService.postAll("/question", question.value);
  if (response.data.code === 200) {
    ElMessage({
      message: "Gửi thành công.",
      type: "success",
    });
  }
};
// End function

// Computed
const filteredImages = computed(() => {
  return product.value.data?.image;
});
const listImgInSide = computed(() => {
  return product.value.data?.image.filter(
    (item) => item.type === constant.type_in_side
  );
});
const banners = computed(() => {
  return listBanner.value.slice(0, 2);
});
const listProductHot = computed(() => {
  return listProduct.value.slice(0, 5);
});
const shortDescription = computed(() => {
  return (
    product.value.data?.description.replace(/(<([^>]+)>)/gi, "").slice(0, 400) +
    "..."
  );
});
const segement = computed(() => {
  return listProductSegment.value.slice(0, 5);
});
// End computed

onMounted(() => {
  getProduct();
  getConfig();
  getBanner();
});
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 768px) {
  .items-center-ct {
    align-items: center;
  }
}
.description-container {
  position: relative; /* Để chứa các phần tử con */
}

.fade-effect {
  position: absolute; /* Để lớp mờ nằm trên văn bản */
  bottom: 0; /* Đặt ở cuối */
  left: 0;
  right: 0;
  height: 50px; /* Chiều cao của hiệu ứng mờ */
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 100%
  ); /* Hiệu ứng mờ */
  pointer-events: none; /* Để không ảnh hưởng đến các sự kiện chuột */
}
.custom-textarea :deep(.el-textarea__inner) {
  height: 145px !important; /* Điều chỉnh chiều cao của textarea */
}
</style>
