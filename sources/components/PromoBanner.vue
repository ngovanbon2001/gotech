<template>
  <div class="w-full flex justify-center items-center">
    <div :class="`w-5 md:w-[154px] h-[1px] ${white ? 'bg-black' : 'bg-[#ffffff]'}`"></div>
    <span
      :class="`font-[Roboto Slab] promo-banner text-center font-black text-2xl md:text-3xl md:px-4 px-1 uppercase ${white ? 'text-[#DC0F0F]' : 'text-[#ffffff]'}`"
    >
      {{ title }}
    </span>
    <div :class="`w-5 md:w-[154px] h-[1px] ${white ? 'bg-black' : 'bg-[#ffffff]'}`"></div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  white: {
    type: Boolean,
    default: true,
  },
});
</script>

<style scoped>
.promo-banner {
  font-weight: 900;
  line-height: 40.98px;
  text-align: center;
}
</style>
