<template>
    <div class="flex gap-3 mb-3">
        <SelectBox
            v-if="false"
            :options="bankList"
            v-model:model-value="accountReceivingMoney.bank"
            key-item="code"
            lable-item="name"
            label-form="Chọn ngân hàng"
            :grow="true"
        />
        <model-address
            v-model:value="accountReceivingMoney.bank"
            :list-options="bankList"
            keyItem="code"
            labelItem="name"
            label="Ngân hàng"
        />
    </div>
    <InputForm
        type="text"
        input-mode="numeric"
        v-model:model-value="accountReceivingMoney.accountNumber"
        :input-value="accountReceivingMoney.accountNumber"
        input-value=""
        label-form="Số tài khoản"
        :border-main="false"/>
</template>
<script>
import InputForm from "./InputForm.vue";
import SelectBox from "./SelectBox.vue";
import ModelAddress from "./ModelAddress.vue";

export default {
    name: 'AccountReceivingMoney',
    components: {
        SelectBox,
        InputForm,
        ModelAddress
    },
    props: {
        accountReceivingMoney: {
            type: Object,
            required: true,
            default: {
                bank: 0,
                accountNumber: '',
            }
        },
        bankList: Array,
        disable: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        accountReceivingMoney: {
            get() {
                return this.accountReceivingMoney;
            },
            set(value) {
                this.$emit('update:accountReceivingMoney', value);
            }
        }
    }

}
</script>
