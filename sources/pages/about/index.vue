<template>
  <div v-loading="loading">
    <section class="flex justify-center bg-[#F4F4F4]">
      <Breadcrumb :items="breadcrumbItems" />
    </section>
    <section
      class="bg-[url('/images/bg-about.png')] lg:h-[567px] flex justify-center lg:py-8"
    >
      <div
        class="xl:w-[1000px] lg:w-[950px] 2xl:w-[1240px] w-full md:w-[700px] flex lg:flex-row flex-col-reverse gap-10"
      >
        <div class="lg:w-[55%] w-full lg:pl-12">
          <img src="/images/about-1.png" alt="no-img" />
        </div>
        <div class="lg:pt-8 lg:w-[45%] w-full">
          <div class="font-black lg:text-[28px] text-[22px] uppercase italic text-center font-[SFU Helvetica]">
            CÙNG GOTECh <br />
            AN TÂM TRÊN MỌI HÀNH TRÌNH
          </div>
          <div class="text-justify w-full py-4 text-sm">
            Gotech đang nỗ lực kiến tạo sự an tâm tuyệt đối cho khách hàng qua
            từng sản phẩm và dịch vụ. Với công nghệ tiên tiến, kiểm soát chất
            lượng nghiêm ngặt và đội ngũ hỗ trợ chuyên nghiệp, chúng tôi đảm bảo
            rằng mỗi sản phẩm không chỉ mang đến sự tiện nghi mà còn là niềm tin
            và sự an toàn trên mọi hành trình của bạn. Khi chọn Gotech, bạn
            không chỉ chọn sản phẩm, mà còn chọn sự bảo đảm vững chắc cho mỗi
            chuyến đi.
          </div>
          <div class="w-full flex justify-center">
            <el-button class="btn-red !h-10 md:w-[228px]">Hotline: 1900.633.642</el-button>
          </div>
        </div>
      </div>
    </section>
    <!-- Lịch sử hình thành -->
    <section class="flex justify-center py-4 lg:px-0 px-2">
      <div
        class="xl:w-[1000px] lg:w-[950px] 2xl:w-[1240px] w-full md:w-[700px] grid lg:grid-cols-2 grid-cols-1 gap-4"
      >
      <div>
        <div class="w-full flex justify-center items-center">
          <div :class="`max-w-5 md:w-[154px] h-[1px] bg-black`"></div>
          <span
            :class="`promo-banner text-center font-black text-2xl md:text-3xl md:px-4 px-1 uppercase text-[#DC0F0F]`"
          >
            {{intro?.history?.[0]?.title}}
          </span>
          <div :class="`max-w-5 md:w-[154px] h-[1px] bg-black`"></div>
        </div>
        <div class="text-justify text-[14px] font-[Roboto Slab] py-4" v-html="intro?.history?.[0]?.content"></div>
      </div>
      <div>
        <img :src="intro?.history?.[0]?.url" alt="">
      </div>
      </div>
    </section>
    <!-- End lịch sử hình thành -->
    <!-- Đội ngũ sáng lập -->
    <section class="py-4 bg-[#F4F4F4] lg:px-0 px-2">
      <PromoBanner :title="'Đội ngũ sáng lập'" />
      <div class="w-full flex justify-center py-4">
        <div
          class="xl:w-[1000px] lg:w-[950px] 2xl:w-[1240px] w-full md:w-[700px] grid lg:grid-cols-5 grid-cols-2 gap-4"
        >
          <div v-for="value in intro?.manager" :key="value">
              <img class="w-full" :src="value.img" alt="">
              <div class="w-full text-center py-2 font-bold text-lg uppercase">{{ value.name }}</div>
              <div class="w-full text-center text-sm">{{ value.position }}</div>
              <div class="flex justify-center py-4">
                <div class="w-[40%] border-t"></div>
              </div>
              <div class="w-full text-center text-sm">{{ value.exp }}</div>
          </div>
        </div>
      </div>
    </section>
    <!-- End đội ngũ sáng lập -->
    <!-- Tầm nhìn sứ mệnh -->
    <section class="py-4 lg:px-0 px-2">
      <PromoBanner :title="'Tầm nhìn - sứ mệnh - giá trị cốt lõi'" />
      <div class="w-full flex justify-center py-4">
        <div
          class="xl:w-[1000px] lg:w-[950px] 2xl:w-[1240px] w-full md:w-[700px] grid lg:grid-cols-2 grid-cols-1 gap-4"
        >
          <div class="" v-for="value in listHistory" :key="value">
            <div class="w-full flex justify-center items-center">
              <div :class="`w-full h-[1px] bg-[#DC0F0F]`"></div>
              <span
                :class="`promo-banner whitespace-nowrap text-center font-black text-lg md:text-lg md:px-4 px-1 uppercase text-[#000000]`"
              >
                {{value?.title}}
              </span>
              <div :class="`w-full h-[1px] bg-[#DC0F0F]`"></div>
            </div>
            <div class="text-justify h-[200px] overflow-y-auto" v-html="value.content"></div>
            <div>
              <img class="w-full" :src="value.url" alt="no-img">
            </div>
          </div>
        </div>
      </div>

      <div class="w-full flex justify-center py-4">
        <div
          class="xl:w-[1000px] lg:w-[950px] 2xl:w-[1240px] w-full md:w-[700px]"
        >
            <div class="w-full flex justify-center items-center">
              <div :class="`w-full h-[1px] bg-[#DC0F0F]`"></div>
              <span
                :class="`promo-banner whitespace-nowrap text-center font-black text-lg md:text-lg md:px-4 px-1 uppercase text-[#000000]`"
              >
                Giá trị cốt lõi
              </span>
              <div :class="`w-full h-[1px] bg-[#DC0F0F]`"></div>
            </div>
            <div class="lg:grid hidden lg:grid-cols-5 grid-cols-1 gap-4 py-4">
              <div class="flex w-full flex-col items-center" v-for="value in intro?.core_value" :key="value">
                  <div class="w-[80px] h-[80px] border border-[#DC0F0F] rounded-[50%] flex justify-center items-center">
                    <img :src="value.image" alt="no-img">
                  </div>
                  <div class="w-full text-center py-1 text-sm uppercase">{{ value.title }}</div>
                  <div class="w-full flex justify-center">
                    <div class="border w-[30%]"></div>
                  </div>
                  <div class="text-justify text-sm">{{ value.content }}</div>
              </div>
            </div>
            <div class="grid lg:hidden lg:grid-cols-5 grid-cols-1 gap-4 py-4">
              <div class="flex w-full items-center gap-4" v-for="value in intro?.core_value" :key="value">
                  <div class="w-[80px] h-[80px] border border-[#DC0F0F] rounded-[50%] flex justify-center items-center">
                    <img :src="value.image" alt="no-img">
                  </div>
                  <div class="w-full">
                    <div class="w-full text-left py-1 text-sm uppercase">{{ value.title }}</div>
                    <div class="text-justify text-sm">{{ value.content }}</div>
                  </div>
              </div>
            </div>
        </div>
      </div>
    </section>
    <!-- End tầm nhìn sứ mệnh -->
    <!-- Nhận xét chuyên gia -->
    <section class="bg-[#F4F4F4] py-4">
      <div class="lg:px-0 px-2">
        <PromoBanner :title="'Nhận xét chuyên gia'" />
      </div>
      <div class="w-full flex justify-center">
        <div
          class="xl:w-[1000px] lg:w-[950px] 2xl:w-[1240px] w-full md:w-[700px] py-4"
        >
          <Carousel
            :autoplay="2000"
            v-bind="settings"
            :breakpoints="breakpoints"
          >
            <Slide v-for="(value, index) in comment" :key="index">
              <div
                :title="value.product_name"
                class="cursor-pointer carousel__item w-[217px] transition-transform duration-300 transform hover:scale-105"
              >
                <img
                  :src="value.url"
                  class="h-[166px] w-full mb-3"
                  alt="no-img"
                />
                <div
                  class="font-bold text-lg truncate w-full text-center uppercase"
                >
                  {{ value.description }}
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
    <!-- End nhận xét chuyên gia -->
    <!-- Người nổi tiếng chọn -->
    <section class="py-4">
      <div class="lg:px-0 px-2">
        <PromoBanner :title="'Người nổi tiếng chọn'" />
      </div>
      <div class="w-full flex justify-center">
        <div
          class="xl:w-[1000px] lg:w-[950px] 2xl:w-[1240px] w-full md:w-[700px] py-4"
        >
          <Carousel
            :autoplay="2000"
            v-bind="settings"
            :breakpoints="breakpoints"
          >
            <Slide v-for="(value, index) in listIdol" :key="index">
              <div
                :title="value.product_name"
                class="cursor-pointer carousel__item w-[217px] transition-transform duration-300 transform hover:scale-105"
              >
                <img
                  :src="value.url"
                  class="h-[166px] w-full mb-3"
                  alt="no-img"
                />
                <div
                  class="font-bold text-lg truncate w-full text-center uppercase"
                >
                  {{ value.description }}
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
    <!-- End người nổi tiếng chọn -->
    <!-- Báo chí nói về Gotech -->
    <section class="py-4 bg-[#F4F4F4] lg:px-0 px-2">
      <PromoBanner :title="'Báo chí nói về gotech'" />
      <div class="w-full flex justify-center">
        <div
          class="xl:w-[1000px] lg:w-[950px] 2xl:w-[1240px] w-full md:w-[700px] grid lg:grid-cols-4 grid-cols-2 py-4 gap-4"
        >
          <div class="cursor-pointer transition-transform duration-300 transform hover:scale-105" v-for="value in intro?.magazine" :key="value">
            <img class="w-full" :src="value.img" alt="">
          </div>
        </div>
      </div>
    </section>
    <!-- End báo chí nói về Gotech -->
    <!-- Đối tác của gotech -->
    <section class="py-4 lg:px-0 px-2">
      <PromoBanner :title="'Đối tác của gotech'" />
      <div class="w-full flex justify-center">
        <div class="xl:w-[674px] lg:w-[550px] 2xl:w-[874px] w-full">
          <div class="text-sm font-bold text-justify py-6">GOTECH đang bắt tay hợp tác với các thương hiệu đầu ngành về công nghệ, viễn thông</div>
          <div class="text-sm text-justify pb-4">Là một doanh nghiệp trẻ nhưng GOTECH được đánh giá có sức bật mạnh mẽ ngay từ khi ra mắt thị trường những thiết bị thông minh dành cho ô tô, GOTECH hợp tác với nhiều thương hiệu đầu hành trong lĩnh vực bản đồ số, viễn thông nhằm mang đến những trải nghiệm tốt nhất dành cho người dùng, trong đó phải kể đến như: CarMap, VOV, Zalo AI, Google, Youtube, Viettel…</div>
        </div>
      </div>
      <div class="w-full flex justify-center">
        <div
          class="xl:w-[1000px] lg:w-[950px] 2xl:w-[1240px] w-full md:w-[700px] grid lg:grid-cols-4 grid-cols-2 py-4 gap-4"
        >
          <div class="cursor-pointer transition-transform duration-300 transform hover:scale-105" v-for="value in intro?.partner" :key="value">
            <img class="w-full" :src="value.value" alt="">
          </div>
        </div>
      </div>
    </section>
    <!-- End đối tác gotech -->
  </div>
</template>
<script setup>
import { ref, computed, onMounted } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import apiService from "@/service/service.ts";

const breadcrumbItems = [
  { text: "Home", to: "/" },
  { text: "Về Gotech", to: "/san-pham" },
];
const intro = ref([]);
const comment = ref([]);
const listOrganization = ref([]);
const loading = ref(false);
const listIdol = ref([]);
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

const getIntro = async () => {
  loading.value = true;
  const response = await apiService.getAll("/intro");
  intro.value = response.data.data;
  loading.value = false;
};
const getOrganization = async () => {
  loading.value = true;
  const response = await apiService.getAll("/organization");
  listOrganization.value = response.data.data;
  loading.value = false;
};
const getComment = async () => {
  loading.value = true;
  const response = await apiService.getAll("/slide", { slide_type: 3 });
  comment.value = response.data.data;
  loading.value = false;
};
const getIdol = async () => {
  loading.value = true;
  const response = await apiService.getAll("/slide", { slide_type: 1 });
  listIdol.value = response.data.data;
  loading.value = false;
};

const listHistory = computed(() => {
  return intro.value.history ? intro.value.history.slice(1, 3) : [];
});

onMounted(() => {
  getIntro();
  getOrganization();
  getComment();
  getIdol();
});
</script>
