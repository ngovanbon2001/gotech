<template>
    <div class="mb-2">
        <InputForm
            format-number
            input-mode="numeric"
            v-model:model-value="this.financialCapacity.monthlyIncome"
            :input-value="toThousandFilter(this.financialCapacity.monthlyIncome)"
            label-form="Thu nhập hàng tháng"
            :border-main="false"
        />
        <span class="text-xs block -mt-2 pl-3 text-color-sub">Tối thiểu 3.000.000đ</span>
    </div>
    <SelectBox
        :options="getOptionDate()"
        v-model:model-value="financialCapacity.dateSalary"
        label-form="Ngày nhận lương hàng tháng"
        :grow="true"
        :input-value="financialCapacity.dateSalary"
        key-item="id"
        lable-item="label"
    />
    <InputForm
        :formatNumber="true"
        input-mode="numeric"
        v-model:model-value="this.financialCapacity.totalSpending"
        :input-value="toThousandFilter(this.financialCapacity.totalSpending)"
        label-form="Tổng chi tiêu hàng tháng"
        :border-main="false"/>

    <div class="flex gap-3 mb-3">
        <SelectBox
            :options="purposesList"
            v-model:model-value="financialCapacity.loanPurpose"
            input-value="computedValue.gender"
            :key-item="'code'"
            :lable-item="'name'"
            :label-form="'Chọn mục đích'"
            :grow="true"
        >
        </SelectBox>
    </div>
</template>
<script>
import InputForm from "./InputForm.vue";
import SelectBox from "./SelectBox.vue";
import {toThousandFilter} from "../utils/format";

export default {
    name: 'FinancialCapacity',
    components: {SelectBox, InputForm},
    props: {
        financialCapacity: {
            type: Object,
            required: true,
            default: {
                monthlyIncome: '',
                dateSalary: '',
                totalSpending: '',
                loanPurpose: 0,
            }
        },
        purposesList: {
            type: Object,
            required: true,
        },
        disable: {
            type: Boolean,
            default: false,
        }
    },
    computed: {
        financialCapacity: {
            get() {
                return this.financialCapacity;
            },
            set(value) {
                console.log('oo',value)
                this.$emit('update:financialCapacity', value)
            }
        },
        // dateSalary: {
        //     get() {
        //         console.log(this.financialCapacity)
        //         return {
        //             value: this.financialCapacity.dateSalary,
        //             label: this.financialCapacity.dateSalary,
        //         };
        //     },
        //     set(value) {
        //         console.log(value)
        //         this.financialCapacity.dateSalary = value.value;
        //     }
        // }

    },
    methods: {
        toThousandFilter,
        isNumeric(str) {
            if (typeof str != "string") return false;
            return !isNaN(str) && !isNaN(parseFloat(str));
        },
        getOptionDate() {
            let result = [];
            for (let index = 1; index < 32; index++) {
                let item = {
                    id: index, label: index
                }
                result = [...result, item];
            }
            return result;
        }
    }
}
</script>
