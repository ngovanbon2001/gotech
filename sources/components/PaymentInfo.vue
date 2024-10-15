<template>
    <h3 class="font-medium mb-3">Thông tin thanh toán</h3>
<!--    <div class="flex mb-5">-->
<!--        <div class="w-1/2 px-3">-->
<!--            <img :src="paymentInfo.qr">-->
<!--        </div>-->
<!--        <div class="w-1/2 pt-3">-->
<!--            <p class="mb-3">Bạn có thể mở ứng dụng ngân hàng và quét mã QR để thanh toán</p>-->
<!--            <Button>Tải ảnh về</Button>-->
<!--        </div>-->
<!--    </div>-->
<!--    <span class="mb-3">Hoặc nhập thông tin chuyển khoản</span>-->
    <Card class="bank-info text-white p-0">
        <div class="flex justify-between border-b border-white m-3 py-2 border-opacity-10">
            <span class="text-gray-300 min-w-[100px]">Ngân hàng</span>
            <span class="text-end">{{paymentInfo.bank_info.bank}}</span>
        </div>
        <div class="flex justify-between m-3 py-2 mb-2">
            <span class="text-gray-300 min-w-[100px]">Tên</span>
            <span  class="text-end">{{paymentInfo.bank_info.name}}</span>
        </div>
       <div class="flex justify-between p-3 bg-white bg-opacity-10 items-center mb-1">
           <div class="flex flex-col">
               <span class="text-gray-300">Số tài khoản</span>
               <span class="font-medium text-xl">{{ paymentInfo.bank_info.number }}</span>
           </div>
           <div>
               <Button @click="handleClickCopy(paymentInfo.bank_info.number)">Sao chép</Button>
           </div>
       </div>
        <div class="flex justify-between p-3 bg-white bg-opacity-10 items-center mb-3">
            <div class="flex flex-col">
                <span class="text-gray-300">Nội dung chuyển khoản</span>
                <span class="font-medium text-sm">{{ paymentInfo.bank_info.content }}</span>
            </div>
            <div>
                <Button @click="handleClickCopy(paymentInfo.bank_info.content)">Sao chép</Button>
            </div>
        </div>
    </Card>
</template>
<script>
import Button from "./Button.vue";
import Card from "./Card.vue";
import {copy} from "../helpers/helpers";

export default {
    name: 'PaymentInfo',
    components: {Card, Button},
    props: {
        paymentInfo: {
            type: Object,
            default: {
                qr: '',
                bank_info: {
                    bank: '',
                    name: '',
                    number: '',
                    content: '',
                },
            }
        }
    },
    methods:{
        handleClickCopy(text){
            copy(text);
        }
    }
}
</script>
<style scoped>
.bank-info {
    background: linear-gradient(90deg, #4F4E4E 0%, #262626 100%);
}
.p-0{
    padding: 0 !important;
}
</style>
