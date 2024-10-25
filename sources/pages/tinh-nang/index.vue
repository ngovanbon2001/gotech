<template>
  <div class="content">
    <section class="flex justify-center">
      <Breadcrumb :items="breadcrumbItems" />
    </section>
    <!-- Tin tức -->
    <section class="flex justify-center md:px-0 px-2">
      <ListNew :title="'Tính năng màn hình ô tô gotech'" :data="news" />
    </section>
    <!-- Phân trang -->
    <section class="flex justify-center py-2 md:px-0">
      <div
        class="xl:w-[1000px] lg:w-[950px] 2xl:w-[1240px] w-full md:w-[700px] grid lg:grid-cols-12 grid-cols-4 xl:gap-4 gap-2 py-4 px-2"
      >
        <el-pagination
          size="small"
          background
          layout="pager"
          :total="50"
          class="paginate-custom"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import Breadcrumb from "@/components/Breadcrumb.vue";
import PromoBanner from "@/components/PromoBanner.vue";
import Pagination from "@/components/Pagination.vue";
import ListNew from "@/components/new/ListNew.vue";
import { news } from "@/dump/dump.ts";

const breadcrumbItems = [
  { text: "Home", to: "/" },
  { text: "tính năng", to: "/product" },
];

onMounted(() => {});
</script>
<style lang="scss" scoped>
.table-custom :deep(th) {
  background-color: #94a2ba;
  color: #ffffff;
  font-weight: bold;
  text-align: left;
}
.paginate-custom :deep(.is-active) {
  background-color: #dc0f0f !important;
}
</style>
