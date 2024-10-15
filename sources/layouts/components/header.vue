<template>
    <div class=" container m-auto grid md:grid-cols-2 xs:grid-cols-1 h-[60px] justify-center items-center">
        
        <div class=" flex justify-center items-center">
            <img class=" h-[28px] " src="@/assets/images/logox2.png">
            <InputForm class=" ml-12 mr-12" :placeholder="'Tìm kiếm theo sản phẩm, dòng xe'"></InputForm>
            
        </div>
        <div class="  grid grid-cols-3">
            <div class=" flex">
                <img src="@/assets/images/support.svg">
                <div class="ml-2">
                    <div class=" font-main">Tổng đài</div>
                    <div class=" font-main-bold text-main"> 1900 633 642</div>
                </div>
            </div>
            <div class=" flex">
                <img src="@/assets/images/email.svg">
                <div class="ml-2">
                    <div class=" font-main">Email</div>
                    <div class=" font-main-bold"> contact@gotech.vn</div>
                </div>
            </div>
            <div class=" flex">
                <img src="@/assets/images/location.svg">
                <div class="ml-2">
                    <div class=" font-main">Hệ thống đại lý</div>
                    <div class=" font-main-bold"> Tại 63 tỉnh thành</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import InputForm from '~/components/InputForm.vue';
</script>