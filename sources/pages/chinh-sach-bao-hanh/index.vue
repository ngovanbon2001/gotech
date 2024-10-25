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
    <!-- Điều kiện bảo hành -->
    <section class="flex justify-center">
      <div
        class="xl:w-[1000px] 2xl:w-[1240px] w-[300px] md:w-[700px] lg:w-[950px]"
      >
        <div class="uppercase font-bold text-lg">
          2. Điều kiện bảo hành hợp lệ
        </div>
        <div class="text-sm font-normal">
          Sản phẩm sẽ được bảo hành nếu thỏa mãn đầy đủ các điều kiện sau:
        </div>
        <div class="text-sm font-normal">
          <li>
            Sản phẩm còn trong hạn bảo hành tại thời điểm khách hàng yêu cầu, áp
            dụng như mục 1 – thời gian bảo hành sản phẩm.
          </li>
          <li>
            Hư hỏng do chất lượng linh kiện hay lỗi kỹ thuật trong quá trình sản
            xuất.
          </li>
          <li>Sản phẩm phải còn nguyên dạng, nhãn sản phẩm, số sê ri (S/N)</li>
          <li>
            Sản phẩm không thuộc trường hợp bị từ chối bảo hành quy định tại mục
            3 – các trường hợp từ chối bảo hành.
          </li>
        </div>

        <div class="uppercase font-bold text-lg mt-4">
          3. Trường hợp từ chối bảo hành
        </div>
        <div class="text-sm font-normal">
          Sản phẩm thuộc một trong những trường hợp sau sẽ bị mất quyền bảo
          hành:
        </div>
        <div class="text-sm font-normal">
          <li>Sản phẩm bị hư hại do thiên tai, hỏa hoạn, lụt lội, sét đánh.</li>
          <li>Sản phẩm bị đặt tại nơi bụi bẩn, ẩm ướt</li>
          <li>
            Sản phẩm bị biến dạng do tác động nhiệt, tác động lực bên ngoài
          </li>
          <li>
            Sản phẩm có vết mốc, rỉ sét hoặc bị ăn mòn, oxy hóa bởi hóa chất
          </li>
          <li>
            Sản phẩm bị hư hỏng do dùng sai điện thế và dòng điện chỉ định
          </li>
          <li>
            Sản phẩm lắp đặt, bảo trì, sử dụng không đúng theo hướng dẫn của
            GOTECH nên gây ra hư hỏng
          </li>
          <li>
            Sản phẩm đã từng bị thay đổi, sửa chữa nhưng không được thực hiện
            bởi các Trung tâm Bảo hành – đại lý của GOTECH
          </li>
          <li>Không bảo hành các phụ kiện kèm theo</li>
          <li>Không bảo hành các chi tiết hao mòn</li>
          <li>Sản phẩm hết hạn bảo hành.</li>
        </div>
      </div>
    </section>
    <section class="flex flex-col items-center py-4">
      <PromoBanner :title="'Chính sách bảo hành chi tiết từng dòng sản phẩm'" />
      <div
        class="md:px-0 px-2 grid lg:grid-cols-4 gap-4 grid-cols-2 xl:w-[1000px] 2xl:w-[1240px] w-full md:w-[700px] lg:w-[950px]"
      >
        <div>
          <div
            class="px-1 py-4 flex flex-col items-center border border-[#E2E2E2]"
          >
            <img class="mt-4" src="/images/bao-hanh-1.png" alt="no-img" />
            <div
              class="uppercase font-bold mt-6 text-[10px] md:text-sm bg-[#000000] px-4 py-1 rounded-[32px] text-[#FFFFFF]"
            >
              Bảo hành 2 năm 1 đổi 1
            </div>
          </div>
          <div class="w-full text-left py-4">
            <p class="uppercase font-bold text-sm">Màn hình ô tô thông minh</p>
            <div class="py-2">
              <p class="font-bold text-sm">Loại dịch vụ bảo hành</p>
              <div class="font-normal text-sm text-justify">
                <li>Sửa chữa tại Trung Tâm Bảo Hành Ủy Quyền của Gotech</li>
              </div>
            </div>
            <div class="py-2">
              <p class="font-bold text-sm">Thời gian bảo hành</p>
              <div class="font-normal text-sm text-justify">
                <li>
                  Căn cứ vào ngày mua hàng (dựa trên tin nhắn kích hoạt bảo hành
                  điện tử)
                </li>
                <li>1 đổi 1 trong vòng 2 năm</li>
                <li>Bảo hành điện tử trên toàn quốc</li>
              </div>
            </div>
          </div>
          <div class="text-center">
            <el-button class="btn-none w-[170px]">Xem chi tiết</el-button>
          </div>
        </div>
        <div>
          <div
            class="px-1 py-4 flex flex-col items-center border border-[#E2E2E2]"
          >
            <img class="mt-4" src="/images/bao-hanh-1.png" alt="no-img" />
            <div
              class="uppercase font-bold mt-6 text-[10px] md:text-sm bg-[#000000] px-4 py-1 rounded-[32px] text-[#FFFFFF]"
            >
              Bảo hành 2 năm 1 đổi 1
            </div>
          </div>
          <div class="w-full text-left py-4">
            <p class="uppercase font-bold text-sm">Màn hình ô tô thông minh</p>
            <div class="py-2">
              <p class="font-bold text-sm">Loại dịch vụ bảo hành</p>
              <div class="font-normal text-sm text-justify">
                <li>Sửa chữa tại Trung Tâm Bảo Hành Ủy Quyền của Gotech</li>
              </div>
            </div>
            <div class="py-2">
              <p class="font-bold text-sm">Thời gian bảo hành</p>
              <div class="font-normal text-sm text-justify">
                <li>
                  Căn cứ vào ngày mua hàng (dựa trên tin nhắn kích hoạt bảo hành
                  điện tử)
                </li>
                <li>1 đổi 1 trong vòng 2 năm</li>
                <li>Bảo hành điện tử trên toàn quốc</li>
              </div>
            </div>
          </div>
          <div class="text-center">
            <el-button class="btn-none w-[170px]">Xem chi tiết</el-button>
          </div>
        </div>
        <div>
          <div
            class="px-1 py-4 flex flex-col items-center border border-[#E2E2E2]"
          >
            <img class="mt-4" src="/images/bao-hanh-1.png" alt="no-img" />
            <div
              class="uppercase font-bold mt-6 text-[10px] md:text-sm bg-[#000000] px-4 py-1 rounded-[32px] text-[#FFFFFF]"
            >
              Bảo hành 2 năm 1 đổi 1
            </div>
          </div>
          <div class="w-full text-left py-4">
            <p class="uppercase font-bold text-sm">Màn hình ô tô thông minh</p>
            <div class="py-2">
              <p class="font-bold text-sm">Loại dịch vụ bảo hành</p>
              <div class="font-normal text-sm text-justify">
                <li>Sửa chữa tại Trung Tâm Bảo Hành Ủy Quyền của Gotech</li>
              </div>
            </div>
            <div class="py-2">
              <p class="font-bold text-sm">Thời gian bảo hành</p>
              <div class="font-normal text-sm text-justify">
                <li>
                  Căn cứ vào ngày mua hàng (dựa trên tin nhắn kích hoạt bảo hành
                  điện tử)
                </li>
                <li>1 đổi 1 trong vòng 2 năm</li>
                <li>Bảo hành điện tử trên toàn quốc</li>
              </div>
            </div>
          </div>
          <div class="text-center">
            <el-button class="btn-none w-[170px]">Xem chi tiết</el-button>
          </div>
        </div>
        <div>
          <div
            class="px-1 py-4 flex flex-col items-center border border-[#E2E2E2]"
          >
            <img class="mt-4" src="/images/bao-hanh-1.png" alt="no-img" />
            <div
              class="uppercase font-bold mt-6 text-[10px] md:text-sm bg-[#000000] px-4 py-1 rounded-[32px] text-[#FFFFFF]"
            >
              Bảo hành 2 năm 1 đổi 1
            </div>
          </div>
          <div class="w-full text-left py-4">
            <p class="uppercase font-bold text-sm">Màn hình ô tô thông minh</p>
            <div class="py-2">
              <p class="font-bold text-sm">Loại dịch vụ bảo hành</p>
              <div class="font-normal text-sm text-justify">
                <li>Sửa chữa tại Trung Tâm Bảo Hành Ủy Quyền của Gotech</li>
              </div>
            </div>
            <div class="py-2">
              <p class="font-bold text-sm">Thời gian bảo hành</p>
              <div class="font-normal text-sm text-justify">
                <li>
                  Căn cứ vào ngày mua hàng (dựa trên tin nhắn kích hoạt bảo hành
                  điện tử)
                </li>
                <li>1 đổi 1 trong vòng 2 năm</li>
                <li>Bảo hành điện tử trên toàn quốc</li>
              </div>
            </div>
          </div>
          <div class="text-center">
            <el-button class="btn-none w-[170px]">Xem chi tiết</el-button>
          </div>
        </div>
        <div>
          <div
            class="px-1 py-4 flex flex-col items-center border border-[#E2E2E2]"
          >
            <img class="mt-4" src="/images/bao-hanh-1.png" alt="no-img" />
            <div
              class="uppercase font-bold mt-6 text-[10px] md:text-sm bg-[#000000] px-4 py-1 rounded-[32px] text-[#FFFFFF]"
            >
              Bảo hành 2 năm 1 đổi 1
            </div>
          </div>
          <div class="w-full text-left py-4">
            <p class="uppercase font-bold text-sm">Màn hình ô tô thông minh</p>
            <div class="py-2">
              <p class="font-bold text-sm">Loại dịch vụ bảo hành</p>
              <div class="font-normal text-sm text-justify">
                <li>Sửa chữa tại Trung Tâm Bảo Hành Ủy Quyền của Gotech</li>
              </div>
            </div>
            <div class="py-2">
              <p class="font-bold text-sm">Thời gian bảo hành</p>
              <div class="font-normal text-sm text-justify">
                <li>
                  Căn cứ vào ngày mua hàng (dựa trên tin nhắn kích hoạt bảo hành
                  điện tử)
                </li>
                <li>1 đổi 1 trong vòng 2 năm</li>
                <li>Bảo hành điện tử trên toàn quốc</li>
              </div>
            </div>
          </div>
          <div class="text-center">
            <el-button class="btn-none w-[170px]">Xem chi tiết</el-button>
          </div>
        </div>
        <div>
          <div
            class="px-1 py-4 flex flex-col items-center border border-[#E2E2E2]"
          >
            <img class="mt-4" src="/images/bao-hanh-1.png" alt="no-img" />
            <div
              class="uppercase font-bold mt-6 text-[10px] md:text-sm bg-[#000000] px-4 py-1 rounded-[32px] text-[#FFFFFF]"
            >
              Bảo hành 2 năm 1 đổi 1
            </div>
          </div>
          <div class="w-full text-left py-4">
            <p class="uppercase font-bold text-sm">Màn hình ô tô thông minh</p>
            <div class="py-2">
              <p class="font-bold text-sm">Loại dịch vụ bảo hành</p>
              <div class="font-normal text-sm text-justify">
                <li>Sửa chữa tại Trung Tâm Bảo Hành Ủy Quyền của Gotech</li>
              </div>
            </div>
            <div class="py-2">
              <p class="font-bold text-sm">Thời gian bảo hành</p>
              <div class="font-normal text-sm text-justify">
                <li>
                  Căn cứ vào ngày mua hàng (dựa trên tin nhắn kích hoạt bảo hành
                  điện tử)
                </li>
                <li>1 đổi 1 trong vòng 2 năm</li>
                <li>Bảo hành điện tử trên toàn quốc</li>
              </div>
            </div>
          </div>
          <div class="text-center">
            <el-button class="btn-none w-[170px]">Xem chi tiết</el-button>
          </div>
        </div>
      </div>
    </section>
    <!-- Các dịch vụ ngoài bảo hành -->
    <section class="flex flex-col items-center py-4">
      <PromoBanner :title="'Các dịch vụ ngoài bảo hành'" />
      <div
        class="xl:w-[1000px] 2xl:w-[1240px] w-[300px] md:w-[700px] lg:w-[950px]"
      >
        <div class="uppercase font-bold text-lg">
          1. Trung tâm Chăm sóc Khách hàng của GOTECH
        </div>
        <div class="text-sm font-normal text-justify">
          <li>Tổng đài Chăm sóc Khách hàng trên toàn quốc: 1900 633 642</li>
          <li>
            Khách hàng có thể liên lạc đến số điện thoại này để được giải đáp
            về: thông tin sản phẩm, thông tin linh kiện, thông tin khuyến mại,
            thông tin dịch vụ, điều kiện, thủ tục, địa điểm bảo hành được cập
            nhật mới nhất.
          </li>
        </div>

        <div class="uppercase font-bold text-lg mt-4">
          2. Các dịch vụ bảo hành cơ bản
        </div>
        <div class="text-sm font-bold">Dịch vụ sửa chữa bảo hành</div>
        <div class="text-sm font-normal text-justify">
          Khi sản phẩm phát sinh hư hỏng trong thời hạn bảo hành, Khách hàng có
          thể đến trực tiếp Trung Tâm Bảo hành – đại lý GOTECH để yêu cầu dịch
          vụ bảo hành. Đồng thời Khách hàng sẽ được trung tâm yêu cầu cung cấp
          thông tin, bao gồm:
        </div>
        <div class="text-sm font-normal text-justify">
          <li>Thông tin sản phẩm: Kiểu máy, số máy, ngày mua sản phẩm…</li>
          <li>
            Thông tin Khách hàng: Tên Khách hàng, số điện thoại liên hệ, địa chỉ
            liên lạc và nội dung yêu cầu dịch vụ sửa chữa.
          </li>
        </div>
        <div class="text-sm font-bold">Dịch vụ sửa chữa ngoài bảo hành</div>
        <div class="text-sm font-normal text-justify">
          <li>
            Trong trường hợp Khách hàng có nhu cầu yêu cầu dịch vụ sửa chữa
            ngoài bảo hành, các Trung tâm Bảo hành của GOTECH có trách nhiệm
            phục vụ và sửa chữa sản phẩm tận tình và chu đáo. Khách hàng sẽ
            thanh toán các chi phí phát sinh cho việc sửa chữa như linh kiện
            thay thế, tiền công và chi phí khác (nếu có) dựa theo thỏa thuận
            giữa 2 bên.
          </li>
        </div>

        <div class="uppercase font-bold text-lg mt-4">
          3. Thời gian nhận bảo hành
        </div>
        <div class="text-sm font-normal">
          <li>Trong giờ hành chính: 8h – 17h từ thứ 2 đến chủ nhật</li>
        </div>

        <div class="uppercase font-bold text-lg mt-4">4. Địa điểm bảo hành</div>
        <div class="text-sm font-normal text-justify">
          <li>
            Địa chỉ các Trung tâm Bảo hành trên toàn quốc của Công ty Cổ phần
            sản xuất và dịch vụ GOTECH được niêm yết trên website: Gotech.vn
          </li>
        </div>
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
