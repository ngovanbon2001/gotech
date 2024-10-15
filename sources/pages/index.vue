<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
</script>
<template>
    <Carousel class="  m-auto w-full" :items-to-show="1">
        <Slide class=" w-full" v-for="slide in 10" :key="slide">
        <img class=" w-full" src="@/assets/images/slider.png">
        </Slide>

        <template #addons>
        <Navigation />
        <!-- <Pagination /> -->
        </template>
    </Carousel>

    <div class=" container m-auto mt-12 p-8">
        <div class=" grid grid-cols-2 gap-4">
        <div class=" ">
            <img class=" float-right" src="@/assets/images/banner1.png">
        </div>
        <div>
            <img src="@/assets/images/banner2.png">
        </div>
        </div>

        <div class="mt-8 grid grid-cols-7 w-1/2 m-auto">
        <div class=" bg-black h-1 mt-3 col-span-2">
        </div>
        <div class=" col-span-3 text-center m-auto text-main font-main-bold text-xl">
            KHÁM PHÁ GOTECH
        </div>
        <div class=" bg-black h-1 mt-3 col-span-2">
        </div>
        </div>

        <div class=" px-32 m-auto mt-4">
        Gotech là thương hiệu tiên phong trong lĩnh vực cung cấp phụ kiện và thiết bị thông minh cho xe ô tô, mang đến sự an tâm tuyệt đối cho khách hàng. Với sản phẩm đa dạng từ màn hình ô tô thông minh, Android Box, Cảm biến áp suất lốp, Camera 360 đến các giải pháp an toàn khác. Gotech không chỉ giúp nâng cao trải nghiệm
        </div>

        <div class=" grid grid-cols-3 mt-8 px-28">
        <div>
            <img class=" m-auto" src="@/assets/images/video.png">
            <div class=" text-center">
            Video tổng hợp sản phẩm về Gotech
            </div>
        </div>
        <div>
            <img class=" m-auto" src="@/assets/images/video.png">
            <div class=" text-center">
            Video tổng hợp sản phẩm về Gotech
            </div>
        </div>
        <div>
            <img class=" m-auto" src="@/assets/images/video.png">
            <div class=" text-center">
            Video tổng hợp sản phẩm về Gotech
            </div>
        </div>
        
        </div>
    </div>
    <div class=" bg-main-bg p-4">
        <div class=" container m-auto ">

        <div class="mt-8 grid grid-cols-7 w-1/2 m-auto">
            <div class=" bg-black h-1 mt-3 col-span-2">
            </div>
            <div class=" col-span-3 text-center m-auto text-main font-main-bold text-xl">
            SẢN PHẨM NỔI BẬT
            </div>
            <div class=" bg-black h-1 mt-3 col-span-2">
            </div>
        </div>


        <div class=" mt-8 grid grid-cols-4">

            <div class="mt-8">
            <img class=" m-auto" src="@/assets/images/video.png">
            <div class=" text-center font-main-bold text-lg">
                Video tổng hợp sản phẩm về Gotech
            </div>
            <div>
                Danh mục các mã sản phẩm màn hình phổ thông giá rẻ lắp cho nhiều dòng xe phổ biến với đầy đủ tính năng
            </div>
            <div class=" text-center">
                <BaseButton label="Tìm hiểu thêm" class="  bg-white hover:bg-main hover:text-white "> Tìm hiểu thêm</BaseButton>
            </div>
            </div>

            <div class="mt-8">
            <img class=" m-auto" src="@/assets/images/video.png">
            <div class=" text-center font-main-bold text-lg">
                Video tổng hợp sản phẩm về Gotech
            </div>
            <div>
                Danh mục các mã sản phẩm màn hình phổ thông giá rẻ lắp cho nhiều dòng xe phổ biến với đầy đủ tính năng
            </div>
            <div class=" text-center">
                <BaseButton label="Tìm hiểu thêm" class="  bg-white hover:bg-main hover:text-white "> Tìm hiểu thêm</BaseButton>
            </div>
            </div>

            <div class="mt-8">
            <img class=" m-auto" src="@/assets/images/video.png">
            <div class=" text-center font-main-bold text-lg">
                Video tổng hợp sản phẩm về Gotech
            </div>
            <div>
                Danh mục các mã sản phẩm màn hình phổ thông giá rẻ lắp cho nhiều dòng xe phổ biến với đầy đủ tính năng
            </div>
            <div class=" text-center">
                <BaseButton label="Tìm hiểu thêm" class="  bg-white hover:bg-main hover:text-white "> Tìm hiểu thêm</BaseButton>
            </div>
            </div>

            <div class="mt-8">
            <img class=" m-auto" src="@/assets/images/video.png">
            <div class=" text-center font-main-bold text-lg">
                Video tổng hợp sản phẩm về Gotech
            </div>
            <div>
                Danh mục các mã sản phẩm màn hình phổ thông giá rẻ lắp cho nhiều dòng xe phổ biến với đầy đủ tính năng
            </div>
            <div class=" text-center">
                <BaseButton label="Tìm hiểu thêm" class="  bg-white hover:bg-main hover:text-white "> Tìm hiểu thêm</BaseButton>
            </div>
            </div>

            <div class="mt-8">
            <img class=" m-auto" src="@/assets/images/video.png">
            <div class=" text-center font-main-bold text-lg">
                Video tổng hợp sản phẩm về Gotech
            </div>
            <div>
                Danh mục các mã sản phẩm màn hình phổ thông giá rẻ lắp cho nhiều dòng xe phổ biến với đầy đủ tính năng
            </div>
            <div class=" text-center">
                <BaseButton label="Tìm hiểu thêm" class="  bg-white hover:bg-main hover:text-white "> Tìm hiểu thêm</BaseButton>
            </div>
            </div>

            <div class="mt-8">
            <img class=" m-auto" src="@/assets/images/video.png">
            <div class=" text-center font-main-bold text-lg">
                Video tổng hợp sản phẩm về Gotech
            </div>
            <div>
                Danh mục các mã sản phẩm màn hình phổ thông giá rẻ lắp cho nhiều dòng xe phổ biến với đầy đủ tính năng
            </div>
            <div class=" text-center">
                <BaseButton label="Tìm hiểu thêm" class="  bg-white hover:bg-main hover:text-white "> Tìm hiểu thêm</BaseButton>
            </div>
            </div>

            <div class="mt-8">
            <img class=" m-auto" src="@/assets/images/video.png">
            <div class=" text-center font-main-bold text-lg">
                Video tổng hợp sản phẩm về Gotech
            </div>
            <div>
                Danh mục các mã sản phẩm màn hình phổ thông giá rẻ lắp cho nhiều dòng xe phổ biến với đầy đủ tính năng
            </div>
            <div class=" text-center">
                <BaseButton label="Tìm hiểu thêm" class="  bg-white hover:bg-main hover:text-white "> Tìm hiểu thêm</BaseButton>
            </div>
            </div>

            <div class="mt-8">
            <img class=" m-auto" src="@/assets/images/video.png">
            <div class=" text-center font-main-bold text-lg">
                Video tổng hợp sản phẩm về Gotech
            </div>
            <div>
                Danh mục các mã sản phẩm màn hình phổ thông giá rẻ lắp cho nhiều dòng xe phổ biến với đầy đủ tính năng
            </div>
            <div class=" text-center">
                <BaseButton label="Tìm hiểu thêm" class="  bg-white hover:bg-main hover:text-white "> Tìm hiểu thêm</BaseButton>
            </div>
            </div>
        </div>

        </div>
    </div>
</template>