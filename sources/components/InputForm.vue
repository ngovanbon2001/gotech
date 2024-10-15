<script setup>
import { computed,ref } from "vue"
import BaseIcon from "@/components/BaseIcon.vue";

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
    formatName: {
        type: Boolean,
        default: false
    },
    formatIdCard: {
        type: Boolean,
        default: false
    },
    formatTypeEmail: {
        type: Boolean,
        default: false
    },
    formatNumber: {
        type: Boolean,
        default: false
    },
    formatOtp: {
        type: Boolean,
        default: false
    },
    // error: {
    //     type: Boolean,
    //     default: false
    // },
    disabled: {
        type: Boolean,
        default: false
    },
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
        required: false,
    },
    borderClass:{
        type:[String, Boolean],
        default: null,

    },
    idForm:{
        type: String,
        default: ''
    },
    placeholder:{
        type: String,
        default: ''
    },
    showError:{
        type: Boolean,
        default: false
    },
    icon: {
        type: String,
        default: null,
    },
    showIcon: {
        type: Boolean,
        default: false,
    },
    password: {
        type: Boolean,
        default: false,
    },
    passwordClose: {
        type: Boolean,
        default: false,
    },
    iconSize: {
        type: [String, Number],
        default: null,
    },
    min: Number,
    max: Number,
})

const valueActive = ref(false)

const error = ref(false)

const isFocus = ref(false)

const errorMessage = ref(props.errorMessage)

const convertNameBank = (str) => {
    
    str = str.replace(/A|Á|À|Ã|Ạ|Â|Ấ|Ầ|Ẫ|Ậ|Ă|Ắ|Ằ|Ẵ|Ặ/g, "A");
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/E|É|È|Ẽ|Ẹ|Ê|Ế|Ề|Ễ|Ệ/, "E");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/I|Í|Ì|Ĩ|Ị/g, "I");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/O|Ó|Ò|Õ|Ọ|Ô|Ố|Ồ|Ỗ|Ộ|Ơ|Ớ|Ờ|Ỡ|Ợ/g, "O");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/U|Ú|Ù|Ũ|Ụ|Ư|Ứ|Ừ|Ữ|Ự/g, "U");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/Y|Ý|Ỳ|Ỹ|Ỵ/g, "Y");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/Đ/g, "D");
    str = str.replace(/đ/g, "d");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng 
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư

    return str
};

const emit = defineEmits(["update:modelValue"]);
const computedValue = computed({
    get: () => {
        if(props.formatNumber && props.modelValue){
            return props.modelValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        return props.modelValue
    },
    set: (value) => {
        if(value.length > 0){
            valueActive.value = true
        } else {
            valueActive.value = false

        }
        if(props.formatName){
            var a = convertNameBank(value)
            //console.log(a)
            emit("update:modelValue",a );
        }

        if(props.formatNumber){
            var a = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            emit("update:modelValue",a );
        }else{
            emit("update:modelValue", value);
        }
    },
});

const showPass = ref(false)

const showPassword = () => {
    var a = computedValue.value
    showPass.value = !showPass.value
    computedValue.value = a
}
const formatPhone = () => {
    var phone_ = ''
    if(computedValue.value.length < 10){
        console.log('ok1')
        error.value = true
        errorMessage.value = 'Số điện thoại phải bao gồm 10 ký tự'
    } else {
            if(computedValue.value.substring(0, 2) == '84'){
            var x = computedValue.value.replace(/\D/g, '').match(/(\d{0,5})(\d{0,3})(\d{0,3})/)
            phone_ = x[0]
            computedValue.value = !x[2] ? x[1] : '' + x[1] + '' + x[2] + (x[3] ? '' + x[3] : '')
            if( computedValue.value.length > 2 && !/(84)+[3|5|7|8|9]\b/.test(computedValue.value.substring(0, 3))){
                error.value = true
            } else {
                error.value = false
            }
        } else {
            var x = computedValue.value.replace(/\D/g, '').match(/(\d{0,4})(\d{0,3})(\d{0,3})/)
            phone_ = x[0]

            computedValue.value = !x[2] ? x[1] : '' + x[1] + '' + x[2] + (x[3] ? '' + x[3] : '')
            if( computedValue.value.length > 1 && !/(0)+[3|5|7|8|9]\b/.test(computedValue.value.substring(0, 2))){
                error.value = true
            } else {
                error.value = false
            }
        }
        error.value != /(84|0)+[3|5|7|8|9]+([0-9]{8})\b/.test(phone_.replaceAll(' ',''))
        let checkPhone = /(84|0)+[3|5|7|8|9]+([0-9]{8})\b/.test(phone_.replaceAll(' ',''))
        if(checkPhone){
            error.value = false
        } else {
            error.value = true
        }
        errorMessage.value = 'Số điện thoại không hợp lệ'
    }
    
}

const formatId = () => {
    if(computedValue.value.length == 12){
        error.value = false
    } else {
        error.value = true
        errorMessage.value = 'Số CCCD phải bao gồm 12 ký tự'
    }
}

const formatEmail = () => {
    if(validateEmail(computedValue.value)){
        error.value = false
    } else {
        error.value = true
    }
}

const formatInputNumber = () => {
    var x = computedValue.value.replace(/\D/g, '').match(/(\d{0,15})(\d{0,3})(\d{0,3})/)
    computedValue.value = !x[2] ? x[1] : '' + x[1] + '' + x[2] + (x[3] ? '' + x[3] : '')
};

const formatNameBank = () => {
    
    var str = computedValue.value
    str = str.replace(/A|Á|À|Ã|Ạ|Â|Ấ|Ầ|Ẫ|Ậ|Ă|Ắ|Ằ|Ẵ|Ặ/g, "A");
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/E|É|È|Ẽ|Ẹ|Ê|Ế|Ề|Ễ|Ệ/, "E");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/I|Í|Ì|Ĩ|Ị/g, "I");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/O|Ó|Ò|Õ|Ọ|Ô|Ố|Ồ|Ỗ|Ộ|Ơ|Ớ|Ờ|Ỡ|Ợ/g, "O");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/U|Ú|Ù|Ũ|Ụ|Ư|Ứ|Ừ|Ữ|Ự/g, "U");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/Y|Ý|Ỳ|Ỹ|Ỵ/g, "Y");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/Đ/g, "D");
    str = str.replace(/đ/g, "d");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng 
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư

    computedValue.value = str.toUpperCase()
};


const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};
</script>
<template>
    <div
        class="w-full relative mb-1"
    >
        <BaseIcon class=" mt-2 absolute top-0 left-2" v-if="icon" :path="icon" size="22" />
        <MdiIcon icon="mdiMagnify" size="32" class=" absolute top-2 right-2 cursor-pointer"/>

        <!-- <BaseIcon @click="showPass=!showPass" class=" absolute top-2 right-2 cursor-pointer" v-if="password" :path="!showPass ? mdiEyeOutline : mdiEyeOffOutline" size="22" /> -->

        <label :for="idForm" class="block mb-1 text-sm font-medium text-gray-900">{{ labelForm }}</label>
        <input v-if="formatPhoneNumber" :type="type" :id="idForm" :inputmode="inputMode"  v-model="computedValue" @input="formatPhone" 
        @focus="isFocus=true"
        @blur="isFocus = false"
        autocomplete="off"
        class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none
        focus:ring-gray-900 focus:border-main block w-full p-2.5 " :class="[ showIcon ? 'px-10' : '', showError ? 'border-error' : '' ]" :placeholder="placeholder">

        <input v-else-if="formatNumber" :type="type" :id="idForm" :inputmode="inputMode"  v-model="computedValue" @input="formatInputNumber" 
        @focus="isFocus=true"
        @blur="isFocus = false"
        autocomplete="off"
        class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none
        focus:ring-gray-900 focus:border-main block w-full p-2.5" :class="[ showIcon ? 'px-10' : '', showError ? 'border-error' : '' ]" :placeholder="placeholder">

        <input v-else-if="formatOtp" :type="type" :id="idForm" :inputmode="inputMode"  v-model="computedValue"
        @focus="isFocus=true"
        @blur="isFocus = false"
        autocomplete="off"
        class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none
        focus:ring-gray-900 focus:border-main block w-full p-2.5" :class="[ showIcon ? 'px-10' : '', showError ? 'border-error' : '' ]" :placeholder="placeholder">

        <input v-else-if="formatIdCard" :type="type" :id="idForm" :inputmode="inputMode"  v-model="computedValue" @input="formatId" 
        @focus="isFocus=true"
        @blur="isFocus = false"
        autocomplete="off"
        class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none
        focus:ring-gray-900 focus:border-main block w-full p-2.5" :class="[ showIcon ? 'px-10' : '', showError ? 'border-error' : '' ]" :placeholder="placeholder">

        <input v-else-if="formatTypeEmail" :type="type" :id="idForm" :inputmode="inputMode"  v-model="computedValue" @input="formatEmail" 
        @focus="isFocus=true"
        @blur="isFocus = false"
        autocomplete="off"
        class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none
        focus:ring-gray-900 focus:border-main block w-full p-2.5 "  :class="[ showIcon ? 'px-10' : '', showError ? 'border-error' : '' ]" :placeholder="placeholder">

        <input v-else-if="formatName" :type="type" :id="idForm" :inputmode="inputMode"  v-model="computedValue" @input="formatNameBank" 
        @focus="isFocus=true"
        @blur="isFocus = false"
        autocomplete="off"
        class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none
        focus:ring-gray-900 focus:border-main block w-full p-2.5" :class="[ showIcon ? 'px-10' : '', showError ? 'border-error' : '' ]" :placeholder="placeholder">

        <input v-else-if="password" :type="showPass ? 'text' : 'password'" :id="idForm" :inputmode="inputMode"  v-model="computedValue"
        @focus="isFocus=true"
        @blur="isFocus = false"
        autocomplete="off"
        class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none
        focus:ring-gray-900 focus:border-main block w-full p-2.5" :class="[ showIcon ? 'px-10' : '', showError ? 'border-error' : '' ]" :placeholder="placeholder">

        <input v-else :type="type" :id="idForm" :inputmode="inputMode"  v-model="computedValue"
        :min="min"
        :max="max"
        @focus="isFocus=true"
        @blur="isFocus = false"
        autocomplete="off"
        class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none
        focus:ring-gray-900 focus:border-black block w-full p-2.5" :class="[ showIcon ? 'px-10' : '', showError ? 'border-error' : '' ]" :placeholder="placeholder">
        <!-- <label
            for="exampleFormControlInputTel"
            :class="[((computedValue || isFocus) ? 'top-[6px] text-xs' : 'top-center') , (error || showError) ? 'text-main': 'text-base']"
            class="absolute left-3 transition-all text-[#808080]"
            v-text="labelForm"
        /> -->
        <div class="absolute right-3 top-center z-50">
            <slot />
        </div>
    </div>
    <!-- <div
        v-if="showError"
        class=" text-error text-sm text-left"
    > {{ errorMessage }} </div> -->
</template>

<style scoped>
.top-center {
    top: 50%;
    transform: translateY(-50%);
}
input::-webkit-datetime-edit-year-field:not([aria-valuenow]),
input::-webkit-datetime-edit-month-field:not([aria-valuenow]),
input::-webkit-datetime-edit-day-field:not([aria-valuenow]) {
    color: transparent;
}
.bg-transparent {
    background: transparent;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
/* Change the white to any color */
.autofill-transparent:-webkit-autofill,
.autofill-transparent:-webkit-autofill:hover,
.autofill-transparent:-webkit-autofill:focus,
.autofill-transparent:-webkit-autofill:active{
    -webkit-box-shadow: 0 0 0 30px transparent inset !important;
    transition: background-color 5000s ease-in-out 0s;
}

.autofill-transparent:-webkit-autofill,
.autofill-transparent:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s !important;
}
.autofill-transparent[data-autocompleted] {
    background-color: transparent !important;
}

.autofill-transparent::-webkit-outer-spin-button,
.autofill-transparent::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}
.autofill-transparent[type=number] {
    -moz-appearance:textfield; /* Firefox */
}

</style>
