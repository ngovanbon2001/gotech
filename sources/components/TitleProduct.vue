<template>
  <div
    class="border border-t-0 border-x-0 border-b-4 w-full lg:w-[950px] xl:w-[1000px] 2xl:w-[1240px] border-b-[#333333] font-bold text-lg"
  >
    {{ title }}
  </div>
</template>

<script setup>
defineProps({
  title: String,
});
</script>

<style scoped></style>
