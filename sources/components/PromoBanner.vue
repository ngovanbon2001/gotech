<template>
  <div class="w-full flex justify-center items-center">
    <div class="w-5 md:w-[154px] h-[1px] bg-black"></div>
    <span class="text-center font-black text-2xl md:text-3xl text-[#DC0F0F] md:px-4 px-1 uppercase">
      {{ title }}
    </span>
    <div class="w-5 md:w-[154px] h-[1px] bg-black"></div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
/* Thêm các kiểu CSS khác nếu cần */
</style>
