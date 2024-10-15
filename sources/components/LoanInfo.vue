<template>
    <h3 class="font-medium mb-3">Thông tin khoản vay</h3>
    <Card class="!p-0">
        <div class="flex justify-between border-b p-3 border-gray-200">
            <span class="font-normal text-color-sub">Mã hợp đồng</span>
            <span>{{loanInfo.code}}</span>
        </div>
        <div class="flex justify-between border-b p-3 border-gray-200">
            <span class="font-normal text-color-sub">Ngày đến hạn</span>
            <span>{{loanInfo.payment_date}}</span>
        </div>
        <div class="flex justify-between  p-3 border-gray-200">
            <span class="font-normal text-color-sub">Số dư nợ trong kỳ</span>
            <span>{{loanInfo.unpaid_amount}}</span>
        </div>
    </Card>
</template>
<script>
import Card from "./Card.vue";

export default {
    name: 'LoanInfo',
    components: {Card},
    data(){
        return {
            loanInfo:this.loan_info,
        }
    },
    props: {
        loan_info: {
            type: Object,
            default: {
                code: '',
                payment_date: '',
                unpaid_amount: '',
            }
        }
    }
}
</script>
