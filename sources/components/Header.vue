<template>
  <header class="header">
    <div
      class="container mx-auto flex flex-col items-center justify-between p-4"
    >
      <!-- Logo -->
      <div class="w-full bg-[#FFFFFF] flex items-center flex-col">
        <div
          class="flex xl:w-[1000px] lg:w-[950px] 2xl:w-[1240px] w-full md:w-[700px] py-4 lg:gap-0 gap-4"
        >
          <div class="flex items-center justify-center">
            <img src="/images/gotech.png" alt="logo" />
          </div>
          <div class="px-10 lg:flex hidden">
            <el-input
              v-model="input1"
              style="width: 367px"
              size="large"
              placeholder="Tìm kiếm sản phẩm, dòng xe"
              :suffix-icon="Search"
            />
          </div>
          <div class="information flex gap-4">
            <div class="hotline flex items-center gap-2">
              <img
                src="/images/hotline.png"
                class="w-[28px] h-[28px]"
                alt="hotline"
              />
              <div>
                <div class="hotline-label text-[13px]" aria-hidden="true">
                  Tổng đài
                </div>
                <div class="whitespace-nowrap text-sm">
                  <a
                    href="tel:+123456789"
                    class="hotline-number text-[#DC0F0F]"
                    aria-label="Call us at +123 456 789"
                    >+123 456 789</a
                  >
                </div>
              </div>
            </div>

            <div class="hotline items-center xl:flex hidden gap-2">
              <img src="/images/email.png" alt="hotline" />

              <div>
                <div class="hotline-label text-[13px]" aria-hidden="true">
                  Email
                </div>
                <div class="whitespace-nowrap text-sm font-bold">
                  <a href="mailto:contact@example.com" class="email-address"
                    >contact@gotech.vn</a
                  >
                </div>
              </div>
            </div>

            <div class="hotline items-center xl:flex hidden gap-2">
              <img src="/images/location.png" alt="hotline" />

              <div>
                <div class="hotline-label text-[13px]" aria-hidden="true">
                  Hệ thống đại lý
                </div>
                <div class="whitespace-nowrap text-sm font-bold">
                  <span class="email-address">Tại 63 tỉnh thành</span>
                </div>
              </div>
            </div>
          </div>
          <button
            @click="isMenuOpen = !isMenuOpen"
            data-collapse-toggle="mobile-menu-2"
            type="button"
            class="block lg:hidden text-[#DC0F0F] focus:outline-none items-center p-2 ml-1 text-sm rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              class="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div class="lg:hidden flex w-full">
          <el-input
            v-model="input1"
            style="width: 100%"
            size="large"
            placeholder="Tìm kiếm sản phẩm, dòng xe"
            :suffix-icon="Search"
          />
        </div>
      </div>
    </div>
    <div class="ct-overflow">
      <div class="header-nav width-1000px">
        <ul class="nav-menu">
          <li class="nav-item whitespace-nowrap">
            <nuxt-link to="/" exact>Trang chủ</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/about">Về Gotech</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/do-xe">Độ xe</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/tap-chi-xe" class="has-menu">Tạp chí xe</nuxt-link>
            <!-- <ul class="nav-menu-level-2">
              <li class="nav-item-level-2">
                <nuxt-link to="/tap-chi-xe" class="has-menu"
                  >Sản phẩm theo xe<span></span
                ></nuxt-link>
              </li>
              <li class="nav-item-level-2">
                <nuxt-link to="/services" class="has-menu"
                  >Màn hình android ô tô<span></span
                ></nuxt-link>
              </li>
              <li class="nav-item-level-2">
                <nuxt-link to="/services" class="has-menu"
                  >Android box ô tô<span></span
                ></nuxt-link>
              </li>
              <li class="nav-item-level-2">
                <nuxt-link to="/services" class="has-menu"
                  >Camera hành trình<span></span
                ></nuxt-link>
              </li>
              <li class="nav-item-level-2">
                <nuxt-link to="/services" class="has-menu"
                  >Cảm biến áp suất lốp<span></span
                ></nuxt-link>
              </li>
              <li class="nav-item-level-2">
                <nuxt-link to="/services" class="has-menu"
                  >Phụ kiện<span></span
                ></nuxt-link>
              </li>
            </ul> -->
          </li>
          <li class="nav-item">
            <nuxt-link to="/chinh-sach-bao-hanh">Chính sách</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/tinh-nang">Tính năng</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="#">Đại lý</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="lg:flex hidden bg-[#1E1E1E] h-[42px] items-center text-[#FFFFFF] justify-center relative"
    >
      <ul class="flex gap-2">
        <li
          class="nav-item relative"
          @mouseover="showDropdown = true"
          @mouseleave="showDropdown = false"
        >
          <nuxt-link to="#" class="has-menu">Sản phẩm theo xe</nuxt-link>
          <ul class="dropdown-menu">
            <li v-for="value in listCar" :key="value.id">
              <nuxt-link to="/" class="dropdown-item">{{
                value.name
              }}</nuxt-link>
            </li>
          </ul>
        </li>
        <li v-for="value in listCategory" :key="value.id" class="nav-item">
          <nuxt-link to="#" class="has-menu">{{ value.name }}</nuxt-link>
          <ul class="dropdown-menu">
            <li v-for="val in value.category" :key="val.id">
              <nuxt-link to="/" class="dropdown-item">{{ val.name }}</nuxt-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <div
      v-if="isMenuOpen"
      class="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-end menu-child"
      @click.self="isMenuOpen = false"
    >
      <div class="bg-[#DC0F0F] w-4/5 h-full p-6 text-black" @click.stop>
        <ul>
          <li
            class="relative py-2"
          >
            <div
              class="text-[#FFFFFF] uppercase flex items-center w-full justify-between"
              @click="showDropdownProduct = !showDropdownProduct"
            >
              <div>
                Sản phẩm theo xe
              </div>
              <div>
                <span class="ml-2">
                  <el-icon>
                    <arrow-down v-if="!showDropdownProduct" />
                    <arrow-up v-else />
                  </el-icon>
                </span>
              </div>
            </div>
            <ul v-if="showDropdownProduct">
              <li
                v-for="(subItem, subIndex) in listCar"
                :key="subIndex"
                class="relative"
              >
                <nuxt-link to="#" class="dropdown-item">{{
                  subItem.name
                }}</nuxt-link>
                <ul
                  v-if="subItem.subMenu && subItem.subMenu.length"
                  class="dropdown-submenu"
                >
                  <li
                    v-for="(subSubItem, subSubIndex) in subItem.subMenu"
                    :key="subSubIndex"
                  >
                    <nuxt-link to="#" class="dropdown-item">{{
                      subSubItem.name
                    }}</nuxt-link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li
            class="relative py-2"
            v-for="(item, index) in listCategory"
            :key="index"
          >
            <div
              class="text-[#FFFFFF] uppercase flex items-center w-full justify-between"
              @click="toggleDropdown(item.id)"
            >
              <div>
                {{ item.name }}
              </div>
              <div v-if="item.category.length > 0">
                <span class="ml-2">
                  <el-icon>
                    <arrow-down v-if="!isDropdownOpen[item.id]" />
                    <arrow-up v-else />
                  </el-icon>
                </span>
              </div>
            </div>
            <ul v-if="isDropdownOpen[item.id]">
              <li
                v-for="(subItem, subIndex) in item.category"
                :key="subIndex"
                class="relative"
              >
                <nuxt-link to="#" class="dropdown-item">{{
                  subItem.name
                }}</nuxt-link>
                <ul
                  v-if="subItem.subMenu && subItem.subMenu.length"
                  class="dropdown-submenu"
                >
                  <li
                    v-for="(subSubItem, subSubIndex) in subItem.subMenu"
                    :key="subSubIndex"
                  >
                    <nuxt-link to="#" class="dropdown-item">{{
                      subSubItem.name
                    }}</nuxt-link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
<script setup>
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";
import apiService from "@/service/service.ts";
import { ArrowUp, ArrowDown } from "@element-plus/icons-vue";

const listCategory = ref([]);
const isMenuOpen = ref(false);
const listCar = ref([]);
const isDropdownOpen = ref([]);
const showDropdownProduct = ref(false);

const getCategory = async () => {
  const response = await apiService.getAll("/category");
  listCategory.value = response.data.data;
};
const getCar = async () => {
  const response = await apiService.postAll("/car");
  listCar.value = response.data.data;
};
const toggleDropdown = (index) => {
  console.log(12312312312);

  isDropdownOpen.value[index] = !isDropdownOpen.value[index];
};

onMounted(() => {
  getCategory();
  getCar();
});
</script>

<style lang="scss" scoped>
.header-1 {
  width: 80%;
  margin: 16px auto;

  align-items: center;

  .search-form {
    margin-left: 36px;
    margin-right: 36px;
    width: 360px;
    height: 40px;
    border-radius: 5px;
    border: 2px solid #ccc;
    position: relative;

    img {
      position: absolute;
      height: 22px;
      width: 22px;

      right: 5px;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .search-input {
    padding: 10px;
    border-color: transparent;
    font-size: 16px;
    width: 100%;
    margin-right: 10px;
  }

  .information {
    .hotline {
      font-weight: 400;
      font-size: 13px;
      line-height: 16px;
      margin-left: 20px;

      img {
        width: 28px;
        height: 28px;
      }

      div {
        margin-left: 8px;
        display: flex;
        flex-direction: column;

        span {
          font-size: 13px;
          font-weight: 400;
          line-height: 18px;
          color: #000;
        }

        a {
          color: #dc0f0f;
          font-weight: 400;
          font-size: 14px;
          line-height: 18px;
          text-decoration: none;
        }

        .email-address {
          font-weight: 700;
          font-size: 14px;
          line-height: 18px;
          color: #030303;
        }
      }
    }
  }
}

.header-nav {
  display: flex;
  height: 62px;
  background-color: #dc0f0f;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  .nav-menu {
    height: 100%;
    width: 100%;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    width: 100%;
    .nav-item {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      a {
        text-align: left;
        color: #ffffff;
        text-decoration: none;
        font-size: 16px;
        padding: 10px 25px;
        transition: #dc0f0f;
      }

      &:hover {
        background-color: #1e1e1e;

        .nav-menu-level-2 {
          display: flex;
        }
      }

      .nav-menu-level-2 {
        list-style: none;
        display: none;
        justify-content: center;
        align-items: center;

        box-sizing: border-box;
        position: absolute;
        z-index: 1000;
        top: 100%;
        left: 0;
        width: 100vw;
        height: 42px;

        background-color: #1e1e1e;
      }
    }
  }
}
a.has-menu {
  background-image: url("/images/arrow-down.png");
  background-repeat: no-repeat;
  background-position: right 10px center;
  padding-right: 30px;
}
.menu-child {
  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #1e1e1e;
    padding: 10px 0;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    z-index: 1000;
  }
  .dropdown-submenu {
    position: absolute;
    left: 100%; /* Đưa submenu sang bên phải menu cha */
    top: 0; /* Căn giữa theo chiều dọc */
  }
  .dropdown-item {
    padding: 8px 20px;
    color: #ffffff;
    text-decoration: none;
    display: block;
  }
  .dropdown-item:hover {
    background-color: #dc0f0f;
  }
}
@media only screen and (max-width: 768px) {
  .ct-overflow {
    overflow-x: scroll;
    white-space: nowrap;
  }
  .width-1000px {
    width: 1000px;
  }
}
.nav-item {
  position: relative; /* Đảm bảo nav-item có vị trí tương đối để dropdown được định vị chính xác */
}

.dropdown-menu {
  position: absolute; /* Đặt dropdown ở vị trí tuyệt đối */
  top: 100%; /* Đặt dropdown ngay dưới menu cha */
  left: 0; /* Căn trái */
  display: none; /* Ẩn dropdown mặc định */
  flex-direction: column; /* Đặt các item theo chiều dọc */
  background-color: #1e1e1e; /* Màu nền của menu dropdown */
  padding: 10px 0; /* Padding cho dropdown */
  border-radius: 5px; /* Bo góc cho dropdown */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); /* Đổ bóng cho dropdown */
  z-index: 1000; /* Đảm bảo dropdown hiển thị trên các phần tử khác */
}

.nav-item:hover .dropdown-menu,
.nav-item:focus-within .dropdown-menu {
  display: flex; /* Hiện dropdown khi hover vào nav-item */
}

.dropdown-item {
  padding: 10px 20px; /* Padding cho các item trong dropdown */
  white-space: nowrap;
  color: #ffffff; /* Màu chữ */
  width: 100%; /* Chiều rộng đầy đủ */
  box-sizing: border-box; /* Đảm bảo padding không làm thay đổi kích thước tổng thể */
  transition: background-color 0.3s ease; /* Hiệu ứng cho màu nền */
}

.dropdown-item:hover {
  text-decoration: underline; /* Gạch chân mặc định */
}
</style>
