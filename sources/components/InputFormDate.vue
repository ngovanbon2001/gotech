<script setup>
import { computed,ref } from "vue"
const props = defineProps({
    labelForm: {
        type: String,
        default: ''
    },
    inputMode: {
        type: String,
        default: 'text'
    },
    type: {
        type: String,
        default: 'text'
    },
    borderMain: {
        type: Boolean,
        default: true
    },
    bgGray: {
        type: Boolean,
        default: false
    },
    formatPhoneNumber: {
        type: Boolean,
        default: false
    },
    // error: {
    //     type: Boolean,
    //     default: false
    // },
    errorMessage: {
        type: String,
        default: ''
    },
    modelValue: {
        type: [Array, String, Number, Boolean],
        default: null,
    },
    inputValue: {
        type: [String, Number, Boolean],
        required: true,
    },
    borderClass:{
        type:[String, Boolean],
        default: null,

    },
    showError:{
        type: Boolean,
        default: false
    }
})

const valueActive = ref(false)

const error = ref(false)

const emit = defineEmits(["update:modelValue"]);
const computedValue = computed({
  get: () => props.modelValue,
  set: (value) => {
    if(value.length > 0){
        valueActive.value = true
    } else {
        valueActive.value = false
    }

    emit("update:modelValue", value);
  },
});


</script>
<template>
    <div
        class="w-full h-[52px] relative mb-3
        border-b border-[#D9D9D9]"
        data-te-input-wrapper-init
    >
        <!-- <input
            type="text"
            onfocus="(this.type='date')" onblur="if(!this.value)this.type='text'"
            :inputmode="inputMode"
            v-model="computedValue"
            :class="{ 'border-main' :  borderMain, 'border-gray-100' : !borderMain,  'bg-gray-50' : bgGray}"
            class=" border-b-2 peer block min-h-[auto] w-full   bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlInputTel"
            placeholder="Example label"
             /> -->

        <el-date-picker
            v-model="computedValue"
            type="date"
            placeholder="dd/mm/yyyy"
            format="DD/MM/YYYY"
            value-format="YYYY-MM-DD"
            class="input-form-date bg-transparent border-none relative z-10
            focus:border-none focus-visible:border-none outline-none
            text-base placeholder-[#808080] text-[#262626] uppercase"
        />

        <input
            v-if="false"
            type="date"
            :inputmode="inputMode"
            v-model="computedValue"
            :class="'pt-[22px] pb-[6px]'"
            class="w-full h-full pl-3 pr-3 bg-transparent border-none relative z-10
            focus:border-none focus-visible:border-none outline-none
            text-base placeholder-[#808080] text-[#262626] uppercase"
            placeholder="dd/mm/yyyy"
         />
        <label
            for="exampleFormControlInputTel"
            class="absolute top-[6px] text-xs left-3 transition-all text-[#808080]"
            v-text="labelForm"
        />

        <div class=" absolute right-0 top-1 ">
            <slot />
        </div>
    </div>
    <div v-if="error || showError" class=" text-main2 text-sm text-right">
        {{ errorMessage }}
    </div>
</template>
<style>
::-webkit-datetime-edit-year-field:not([aria-valuenow]),
::-webkit-datetime-edit-month-field:not([aria-valuenow]),
::-webkit-datetime-edit-day-field:not([aria-valuenow]) {
    color: transparent;
}

/* input[type="date"]::-webkit-inner-spin-button,
input[type="date"]::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
} */
.bg-transparent {
    background: transparent;
}

.input-form-date {
    width: 100% !important;
    height: 100% !important;
    position: relative !important;
}

.input-form-date .el-input__wrapper {
    padding: 22px 12px 6px 12px !important;
    border: none !important;
    box-shadow: none !important;
    background-color: transparent !important;
    text-transform: uppercase !important;
    font-size: 16px !important;
    line-height: 24px !important;
    letter-spacing: -0.3px !important;
    color: #262626 !important;
}

.input-form-date .el-input__inner {
    text-transform: uppercase;
    font-size: 16px !important;
    line-height: 24px !important;
    letter-spacing: -0.3px !important;
    color: #262626 !important;
}

.input-form-date .el-input__prefix {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    color: #262626;
}
.input-form-date .el-input__icon {
    font-size: 24px !important;
    color: #262626;

}
.input-form-date .el-input__suffix {
    display: none !important;
}
</style>
