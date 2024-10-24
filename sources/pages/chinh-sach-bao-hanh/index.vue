<template>
  <div class="content">
    <section class="flex justify-center">
      <Breadcrumb :items="breadcrumbItems" />
    </section>
    <section class="flex flex-col items-center">
      <PromoBanner :title="'Chính sách bảo hành chung'" />
      <div
        class="pt-8 xl:w-[1000px] 2xl:w-[1240px] w-[300px] md:w-[700px] lg:w-[950px]"
      >
        <el-table class="w-full table-custom" :data="tableData" stripe>
          <el-table-column prop="id" label="STT" />
          <el-table-column prop="id_product" label="Mã sản phẩm" />
          <el-table-column prop="date" label="Tên sản phẩm" />
          <el-table-column prop="name" label="Thời gian bảo hành" />
          <el-table-column prop="address" label="Điều kiện bảo hành" />
        </el-table>
      </div>
    </section>
    <!-- Phân trang -->
    <section class="flex justify-center py-2 md:px-0 px-2">
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

const breadcrumbItems = [
  { text: "Home", to: "/" },
  { text: "chính sách bảo hành chung", to: "/product" },
];

const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
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
