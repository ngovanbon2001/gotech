<template>
    <div class="group-button flex justify-between text-color-sub border-gray-200 border-t">
        <div class="text-center grow font-medium w-1/2">
            <SelectBox
                v-model:model-value="status"
                :input-value="status"
                :options="getStatus()"
                key-item="key"
                lable-item="label"
                label-form="Trạng thái"
            />
        </div>
        <span class="border-gray-100 p-0 border h-[51px]"></span>
        <div class="text-center grow font-medium w-1/2 relative">
            <InputFormDate :input-value="date" v-model:model-value="date" type="date"/>
        </div>
    </div>
</template>
<script>
import Status from "../config/Status";
import iconCalender from "./../assets/calendar.png";
import SelectBox from "./SelectBox.vue";
import InputFormDate from "./InputFormDate.vue";

export default {
    name: 'TabLoanSearchManager',
    components: {InputFormDate, SelectBox},
    data() {
        return {
            status: '',
            iconCalender: iconCalender,
            inputType: 'text',
            date: ''
        }
    },
    methods: {
        getStatus() {
            let keys = Object.keys(Status.loan);
            return keys.map(key => {
                return {
                    key: key,
                    label: Status.loan[key].label
                }
            });
        },
        getStatusNumbers(key) {
            let keys = Object.keys(Status.loan);
            let status = keys.reduce((acc, current) => {
                if (current == key) {
                    return Status.loan[key];
                }
                return acc;
            }, {});
            return status?.numbers ?? [];
        },
        getAllStatusNumbers() {
            let app = this;
            let keys = Object.keys(Status.loan);
            return keys.reduce(function (acc, current) {
                if (acc){
                    return [...acc, ...app.getStatusNumbers(current)];
                }
                return app.getStatusNumbers(current);
            }, [])
        }
    },
    created() {
        this.$emit('changeStatus', this.getAllStatusNumbers());
    },
    watch: {
        status(status) {
            let numbers = this.getStatusNumbers(status);
            this.$emit('changeStatus', numbers);
        },
        date(date) {
            this.$emit('changeDate', date);

        }
    }
}
</script>
<style scoped>
.icon-calender {
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
}
</style>
