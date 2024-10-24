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
          <p class="font-bold text-lg">{{ new1.data.name }}</p>
          <img src="/images/do-xe-hot.png" alt="no-img" />

          <div
            class="w-full lg:w-[950px] xl:w-[1000px] 2xl:w-[1240px] grid grid-cols-3 gap-6"
          >
            <div class="lg:col-span-2 col-span-3">
              <nav class="toc p-4 bg-[#D8D8D8] my-4">
                <p class="font-bold text-[#000000] text-sm">Mục lục</p>
                <ul>
                  <li v-for="(item, index) in toc" :key="index">
                    <a
                      class="font-normal text-sm text-[#398EFF] hover:underline pl-4"
                      :href="'#' + item.id"
                      @click.prevent="scrollTo(item.id)"
                    >
                      {{ item.prefix }} {{ item.text }}
                    </a>
                  </li>
                </ul>
              </nav>
              <div
                class="text-justify"
                ref="content"
                v-html="processedContent"
              ></div>
            </div>
          </div>
        </div>
        <div class="lg:col-span-1 col-span-3">
          <div
            class="uppercase w-full pb-4 border-b border-[#000000] font-bold text-[18px]"
          >
            Sản phẩm liên quan
          </div>
          <div class="w-full grid grid-cols-2 gap-2">
            <div
              class="border border-[#DFDFE7] p-2 w-[161px] h-[225px] bg-[#FCFCFC] transition-transform duration-300 transform hover:scale-105"
            >
              <img src="/images/san-pham-01.png" class="h-206px" alt="no-img" />
              <div class="flex flex-col py-4">
                <span class="font-bold text-sm">GOTECH GT2K PRO</span>
                <span class="font-bold text-sm text-[#DC0F0F]">6.700.000đ</span>
              </div>
            </div>
            <div
              class="border border-[#DFDFE7] p-2 w-[161px] h-[225px] bg-[#FCFCFC] transition-transform duration-300 transform hover:scale-105"
            >
              <img src="/images/san-pham-01.png" class="h-206px" alt="no-img" />
              <div class="flex flex-col py-4">
                <span class="font-bold text-sm">GOTECH GT2K PRO</span>
                <span class="font-bold text-sm text-[#DC0F0F]">6.700.000đ</span>
              </div>
            </div>
            <div
              class="border border-[#DFDFE7] p-2 w-[161px] h-[225px] bg-[#FCFCFC] transition-transform duration-300 transform hover:scale-105"
            >
              <img src="/images/san-pham-01.png" class="h-206px" alt="no-img" />
              <div class="flex flex-col py-4">
                <span class="font-bold text-sm">GOTECH GT2K PRO</span>
                <span class="font-bold text-sm text-[#DC0F0F]">6.700.000đ</span>
              </div>
            </div>
            <div
              class="border border-[#DFDFE7] p-2 w-[161px] h-[225px] bg-[#FCFCFC] transition-transform duration-300 transform hover:scale-105"
            >
              <img src="/images/san-pham-01.png" class="h-206px" alt="no-img" />
              <div class="flex flex-col py-4">
                <span class="font-bold text-sm">GOTECH GT2K PRO</span>
                <span class="font-bold text-sm text-[#DC0F0F]">6.700.000đ</span>
              </div>
            </div>
          </div>
          <!-- Kinh nghiệm chọn xe -->
          <div class="mt-4">
            <div
              class="uppercase w-full pb-4 border-b border-[#000000] font-bold text-[18px]"
            >
              KINH NGHIỆM CHỌN SP CHO XE
            </div>
            <div class="w-full">
              <div
                class="flex gap-2 py-2 transition-transform duration-300 transform hover:scale-105"
              >
                <img class="w-[98px]" src="/images/tin-tuc2.png" alt="no-img" />
                <div class="text-justify font-normal text-sm">
                  Tổng hợp phụ kiện cho xe Mazda CX5 2023
                </div>
              </div>
              <div
                class="flex gap-2 py-2 transition-transform duration-300 transform hover:scale-105"
              >
                <img class="w-[98px]" src="/images/tin-tuc2.png" alt="no-img" />
                <div class="text-justify font-normal text-sm">
                  Tổng hợp phụ kiện cho xe Mazda CX5 2023
                </div>
              </div>
              <div
                class="flex gap-2 py-2 transition-transform duration-300 transform hover:scale-105"
              >
                <img class="w-[98px]" src="/images/tin-tuc2.png" alt="no-img" />
                <div class="text-justify font-normal text-sm">
                  Tổng hợp phụ kiện cho xe Mazda CX5 2023
                </div>
              </div>
            </div>
          </div>
          <!-- Độ xe hot -->
          <div class="mt-4">
            <div
              class="uppercase w-full pb-4 border-b border-[#000000] font-bold text-[18px]"
            >
              Độ xe hot
            </div>
            <div class="w-full">
              <div
                class="flex gap-2 py-2 transition-transform duration-300 transform hover:scale-105"
              >
                <img class="w-[98px]" src="/images/tin-tuc2.png" alt="no-img" />
                <div class="text-justify font-normal text-sm">
                  Tổng hợp phụ kiện cho xe Mazda CX5 2023
                </div>
              </div>
              <div
                class="flex gap-2 py-2 transition-transform duration-300 transform hover:scale-105"
              >
                <img class="w-[98px]" src="/images/tin-tuc2.png" alt="no-img" />
                <div class="text-justify font-normal text-sm">
                  Tổng hợp phụ kiện cho xe Mazda CX5 2023
                </div>
              </div>
              <div
                class="flex gap-2 py-2 transition-transform duration-300 transform hover:scale-105"
              >
                <img class="w-[98px]" src="/images/tin-tuc2.png" alt="no-img" />
                <div class="text-justify font-normal text-sm">
                  Tổng hợp phụ kiện cho xe Mazda CX5 2023
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-1 border-y border-[#636363] py-4 my-4">
            <img src="/images/banner-2.png" alt="no-img" class="w-full" />
          </div>
          <!-- Tạp chí xe -->
          <div class="mt-4">
            <div
              class="uppercase w-full pb-4 border-b border-[#000000] font-bold text-[18px]"
            >
              Tạp chí xe
            </div>
            <div class="w-full">
              <div
                class="flex gap-2 py-2 transition-transform duration-300 transform hover:scale-105"
              >
                <img class="w-[98px]" src="/images/tin-tuc2.png" alt="no-img" />
                <div class="text-justify font-normal text-sm">
                  Tổng hợp phụ kiện cho xe Mazda CX5 2023
                </div>
              </div>
              <div
                class="flex gap-2 py-2 transition-transform duration-300 transform hover:scale-105"
              >
                <img class="w-[98px]" src="/images/tin-tuc2.png" alt="no-img" />
                <div class="text-justify font-normal text-sm">
                  Tổng hợp phụ kiện cho xe Mazda CX5 2023
                </div>
              </div>
              <div
                class="flex gap-2 py-2 transition-transform duration-300 transform hover:scale-105"
              >
                <img class="w-[98px]" src="/images/tin-tuc2.png" alt="no-img" />
                <div class="text-justify font-normal text-sm">
                  Tổng hợp phụ kiện cho xe Mazda CX5 2023
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="lg:flex justify-center my-4 overflow-x-auto">
      <div
        class="w-full lg:w-[950px] xl:w-[1000px] 2xl:w-[1240px] lg:px-0 px-4 border-t-[1px] pt-4"
      >
        <div class="font-bold text-[18px] uppercase mb-4">Sản phẩm gotech</div>
        <div class="flex gap-4">
          <div
            class="border border-[#DFDFE7] p-2 w-[229px] bg-[#FCFCFC] transition-transform duration-300 transform hover:scale-105"
          >
            <img src="/images/san-pham-01.png" class="h-206px" alt="no-img" />
            <div class="flex flex-col py-4">
              <span class="font-bold text-sm">GOTECH GT2K PRO</span>
              <span class="font-bold text-sm text-[#DC0F0F]">6.700.000đ</span>
            </div>
          </div>
          <div
            class="border border-[#DFDFE7] p-2 w-[229px] bg-[#FCFCFC] transition-transform duration-300 transform hover:scale-105"
          >
            <img src="/images/san-pham-01.png" class="h-206px" alt="no-img" />
            <div class="flex flex-col py-4">
              <span class="font-bold text-sm">GOTECH GT2K PRO</span>
              <span class="font-bold text-sm text-[#DC0F0F]">6.700.000đ</span>
            </div>
          </div>
          <div
            class="border border-[#DFDFE7] p-2 w-[229px] bg-[#FCFCFC] transition-transform duration-300 transform hover:scale-105"
          >
            <img src="/images/san-pham-01.png" class="h-206px" alt="no-img" />
            <div class="flex flex-col py-4">
              <span class="font-bold text-sm">GOTECH GT2K PRO</span>
              <span class="font-bold text-sm text-[#DC0F0F]">6.700.000đ</span>
            </div>
          </div>
          <div
            class="border border-[#DFDFE7] p-2 w-[229px] bg-[#FCFCFC] transition-transform duration-300 transform hover:scale-105"
          >
            <img src="/images/san-pham-01.png" class="h-206px" alt="no-img" />
            <div class="flex flex-col py-4">
              <span class="font-bold text-sm">GOTECH GT2K PRO</span>
              <span class="font-bold text-sm text-[#DC0F0F]">6.700.000đ</span>
            </div>
          </div>
          <div
            class="border border-[#DFDFE7] p-2 w-[229px] bg-[#FCFCFC] transition-transform duration-300 transform hover:scale-105"
          >
            <img src="/images/san-pham-01.png" class="h-206px" alt="no-img" />
            <div class="flex flex-col py-4">
              <span class="font-bold text-sm">GOTECH GT2K PRO</span>
              <span class="font-bold text-sm text-[#DC0F0F]">6.700.000đ</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref, nextTick, computed } from "vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import { banner3, news, new1 } from "@/dump/dump.ts";

const breadcrumbItems = [
  { text: "Home", to: "/" },
  { text: "Độ xe", to: "/product" },
];

const listNew = computed(() => {
  return news.data.slice(1, 3);
});

const toc = ref([]);
const processedContent = ref("");

const generateId = (text, index) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "") + `-${index}`;

// Hàm gán ID cho các thẻ h2, h3 trong nội dung
const assignIdsToHeadings = (htmlString) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");
  const headers = doc.querySelectorAll("h2, h3");

  let h2Index = 0;
  let h3Index = 0;
  toc.value = []; // Reset toc trước khi gán ID

  headers.forEach((header, index) => {
    if (!header.id) {
      header.id = generateId(header.textContent, index); // Gán ID chuẩn hóa
    }

    if (header.tagName === "H2") {
      h2Index++;
      h3Index = 0; // Reset chỉ số h3 khi gặp h2 mới
      toc.value.push({
        id: header.id,
        text: header.textContent,
        // prefix: `${h2Index}.`, // Đánh số cho h2
      });
    } else if (header.tagName === "H3") {
      h3Index++;
      toc.value.push({
        id: header.id,
        text: header.textContent,
        prefix: `${h2Index}.${h3Index}.`, // Đánh số cho h3
      });
    }
  });

  return doc.body.innerHTML; // Trả về nội dung đã được xử lý
};

// Hàm cuộn đến phần tử có ID tương ứng
const scrollTo = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  } else {
    console.error(`Không tìm thấy phần tử với id: ${id}`);
  }
};

onMounted(async () => {
  processedContent.value = assignIdsToHeadings(new1.data.content);
  await nextTick();
});
</script>

<style lang="scss" scoped>
.paginate-custom :deep(.is-active) {
  background-color: #dc0f0f !important;
}
</style>
