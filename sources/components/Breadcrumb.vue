<template>
  <div class="w-full lg:w-[900px] xl:w-[1100px] 2xl:w-[1240px] lg:px-0 px-4">
    <el-breadcrumb class="py-4" :separator="separator">
      <el-breadcrumb-item
        v-for="(item, index) in items"
        :key="index"
        :to="item.to"
      >
        <template v-if="item.to">
          <router-link class="text-sm" :to="item.to">{{
            item.text
          }}</router-link>
        </template>
        <template v-else>
          {{ item.text }}
        </template>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => [],
  },
  separator: {
    type: String,
    default: "»",
  },
});
</script>

<style scoped></style>
