<template>
    <Card class="mb-3">
        <div class="flex justify-between pb-3">
            <label class="font-bold text-[13px]">{{ code }}</label>
            <Badge :type="getBadgeType(status)">{{ getLabelBadge(status) }}</Badge>
        </div>
        <div class="flex justify-between pb-3">
            <label class="text-sm">{{ amount }} - {{ duration }}</label>
            <label class="text-color-sub text-sm">{{ time }}</label>
        </div>
<!--        <div v-if="getButtonType(status)" @click.stop="$emit('handleClickButton',code,getButtonType(status))">-->
<!--            <Button >{{ getButtonType(status) === 1 ? 'Ký hợp đồng' : 'Thanh toán'}}</Button>-->
<!--        </div>-->

    </Card>
</template>
<script>
import Card from "./Card.vue";
import Badge from "./Badge.vue";
import Status from "../config/Status";
import Button from "./Button.vue";

export default {
    name: 'LoanItem',
    components: {Button, Badge, Card},
    props: {
        code: String,
        status: Number,
        amount: String,
        duration: String,
        time: String,
    },
    methods: {
        getLabelBadge(status) {
            let statusKey = Object.keys(Status.loan).filter(key => {
                return Status.loan[key].numbers.includes(status);
            });
            return Status?.loan[statusKey]?.label ?? 'Không xác định';
        },
        getBadgeType(status) {
            if (status){
                let statusKey = Object.keys(Status.loan).filter(key => Status.loan[key].numbers.includes(status));
                return Status?.loan[statusKey]?.badge ?? 'gray';
            }
        },
        /*1: ký hợp đồng 2: thanh toán*/
        getButtonType(status) {
            if (Status.loan.STATUS_WAITING_TO_CONTRACT.numbers.includes(status)) {
                return 1;
            }
            if (Status.loan.STATUS_DISBURSED.numbers.includes(status)) {
                return 2;
            }
            return 0;
        }

    }
}
</script>
