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
    <div class="header-nav w-full overflow-x-auto overflow-y-hidden">
      <ul class="nav-menu gap-10">
        <li class="nav-item">
          <nuxt-link to="/" exact>Trang chủ</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/about">Về Gotech</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/services" class="has-menu">Độ xe</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/contact" class="has-menu">Tạp chí xe</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/contact" class="has-menu">Chính sách</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/contact">Tính năng</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/contact">Đại lý</nuxt-link>
        </li>
      </ul>
    </div>

    <!-- <div class="nav-item">
      <ul class="nav-menu-level-2">
        <li class="nav-item-level-2">
          <nuxt-link to="/services" class="has-menu"
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
      </ul>
    </div> -->
    <!-- Menu cho màn hình nhỏ -->
    <div
      v-if="isMenuOpen"
      class="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-end"
      @click.self="isMenuOpen = false"
    >
      <div class="bg-white w-4/5 h-full p-6 text-black" @click.stop>
        <!-- Nội dung Menu -->
        <a href="#" class="block px-4 py-2 text-lg hover:bg-gray-200">Home</a>
        <a href="#" class="block px-4 py-2 text-lg hover:bg-gray-200">About</a>
        <a href="#" class="block px-4 py-2 text-lg hover:bg-gray-200"
          >Services</a
        >
        <a href="#" class="block px-4 py-2 text-lg hover:bg-gray-200"
          >Contact</a
        >
      </div>
    </div>
  </header>
</template>
<script setup>
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";

const isMenuOpen = ref(false);
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
      white-space: nowrap;
      a {
        text-align: left;
        color: #ffffff;
        text-decoration: none;
        font-size: 16px;
        transition: #dc0f0f;
      }

      a.has-menu {
        background-image: url("/images/arrow-down.png");
        background-repeat: no-repeat;
        background-position: right 10px center;
        padding-right: 30px;
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
</style>
