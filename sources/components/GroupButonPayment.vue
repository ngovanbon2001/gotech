<template>
    <div class="flex gap-3 fixed bottom-5 px-3 max-w-md bg-white w-full">
<!--        <Button large outline class="bg-white">Tất toán</Button>-->
        <Button @click="handleClickPayment" grow large>Thanh toán</Button>
    </div>
</template>
<script>
import Button from "./Button.vue";
import Url from "../config/Url";

export default {
    name: 'GroupButtonPayment',
    components: {Button},
    props: {
        code: {
            type: String,
            default: '',
        }
    },
    methods: {
        handleClickPayment() {
            let url = `${Url.paymentGuide}/${this.code}`;
            this.$inertia.get(url);
        }
    }
}
</script>
