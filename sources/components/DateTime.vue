<template>
    <div
        class="datetime-picker border p-1 relative rounded-lg border-gray-300 bg-[#FFFFFF] flex items-center"
    >
        <BaseIcon class="ml-1" v-if="icon" :path="icon" size="22" />
        <el-date-picker
            v-model="internalValue"
            class="custom-date-picker w-full"
            type="daterange"
            :placeholder="placeholder"
            start-placeholder="Ngày bắt đầu"
            end-placeholder="Ngày kết thúc"
            :value-format="'YYYY-MM-DD'"
        >
        </el-date-picker>
        <BaseIcon class="absolute right-0 sm:block hidden" v-if="icon" :path="mdiChevronDown" size="22" />
    </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { mdiChevronDown } from "@mdi/js";
import BaseIcon from "./BaseIcon.vue";
const props = defineProps({
    placeholder: {
        type: String,
        default: "Select date and time",
    },
    modelValue: {
        type: String,
        default: null,
    },
    icon: {
        type: String,
        default: null,
    },
});

const shortcuts = [
    {
        text: "1 giờ",
        value: () => {
            const date = new Date();
            date.setHours(date.getHours() - 1);
            return date;
        },
    },
    {
        text: "Hôm nay",
        value: new Date(),
    },
    {
        text: "Hôm qua",
        value: () => {
            const date = new Date();
            date.setDate(date.getDate() - 1);
            return date;
        },
    },
    {
        text: "30 ngày",
        value: () => {
            const date = new Date();
            date.setDate(date.getDate() - 30);
            return date;
        },
    },
];

const emit = defineEmits(["update:modelValue"]);

const internalValue = ref(props.modelValue);

watch(
    () => props.modelValue,
    (newValue) => {
        internalValue.value = newValue;
    }
);

watch(internalValue, (newValue) => {
    emit("update:modelValue", newValue);
});
</script>

<style>
.datetime-picker {
    font-family: Arial, sans-serif;
}
.datetime-picker .el-input__wrapper {
    border: none;
    box-shadow: none !important;
    border-radius: 50%;
}
.datetime-picker .el-input__prefix-inner {
    display: none !important;
}
</style>
