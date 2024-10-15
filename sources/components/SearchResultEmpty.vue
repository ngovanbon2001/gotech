<template>
    <h1 class="text-center font-bold pt-3 pb-10">Kết quả tìm kiếm</h1>
    <div>
        <div>
            <div class="flex justify-center">
                <img :src="loan2">
            </div>
            <h4 class="text-center text-color-sub">Kết quả tìm kiếm sẽ được hiển thị tại đây</h4>
        </div>
    </div>
</template>
<script>
import loan2 from '../assets/loan-2.png'

export default {
    name: 'SearchResultEmpty',
    data() {
        return {
            loan2: loan2,
        }
    },
}
</script>
