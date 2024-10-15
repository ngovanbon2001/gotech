<script setup>
import {computed, onMounted, ref} from "vue"
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
    errorMessage: {
        type: String,
        default: ''
    },
    modelValue: {
        type: [Array, String, Number, Boolean],
        default: null,
    },
    borderClass: {
        type: [String, Boolean],
        default: null,

    },
    showError: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    },
    options: Array,
    keyItem: Number,
    lableItem: String,
    placeholder: String,
    grow: {
        type: Boolean,
        default: false
    },
    icon: {
        type: Boolean,
        default: false
    },
    maxWidth: {
        type: [Number, String, Boolean],
        default: null,
    }
})

const emit = defineEmits(["update:modelValue", "change", "update:value"]);

const computedValue = computed({
    get: () => props.modelValue,
    set: (value) => {
        emit("update:modelValue", value);
    },
});

const isSelected = ref(false);
const isLoadedMounted = ref(false);
const drawer = ref(false);
const keyword = ref('');

const showDrawer = () => {
    if (!props.disabled) {
        drawer.value = true;
    }
};
const handleClose = () => {
    drawer.value = false
};

const changeKeyword = (e) => {
    keyword.value = e.target.value
};

const changeValue = (item) => {
    console.log(item)
    if (item.id !== props.modelValue) {
        emit('change', item[props.keyItem]);
        emit('update:modelValue', item[props.keyItem]);
    } else {
        emit('change', 0)
        emit('update:modelValue', 0)
    }
    drawer.value = false
}

onMounted(() => {
    isLoadedMounted.value = true;
});

const getValueByKey = (key) => {
    let item = props.options.find(item => item[props.keyItem] == key);
    if (item) {
        return item[props.lableItem];
    }
    return '';
}

const handleClickLabel = ()=>{
    drawer.value = true;
}

</script>
<template>
    <div class="inline-block relative mt-1 w-full">
        <BaseIcon class=" mt-2 absolute top-0 left-2" v-if="icon" :path="icon" size="22" />
        <select v-model="computedValue" class="block h-[42px] appearance-none border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none
        focus:ring-gray-900 focus:border-main  py-2 p-8   leading-tight ">
            <option value="" disabled selected >{{ placeholder }}</option>
            <option class=" cursor-pointer" v-for="(item, index) in options"
            :key="index"
            :value="item[props.keyItem]"
            @click="changeValue(item)">
                {{ item[props.lableItem] }}
            </option>
            <!-- <option>Option 3</option> -->
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
    </div>
</template>
