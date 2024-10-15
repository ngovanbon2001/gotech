<script setup>
import {computed, onMounted, ref} from "vue"

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
    inputValue: {
        type: [String, Number, Boolean],
        required: true,
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
    <div
        :class="disabled ? 'bg-[#F2F2F2]' : ''"
        class="w-full h-[52px] relative mb-3 border-b border-[#D9D9D9]"
    >
        <div
            class="w-full h-full px-3 flex flex-row items-center justify-between"
            @click="showDrawer"
        >
            <div class="flex flex-1">
                <span
                    :class="computedValue? 'text-[#262626]' : 'text-[#808080]'"
                    class="w-full t-ellipsis-1 text-base"
                    v-text="getValueByKey(props.modelValue)"
                />
            </div>
            <div class="w-6 h-6 ml-2">
                <img
                    src="@/assets/svgs/arrow-down.svg"
                    class="w-full h-full"
                    alt=""
                >
            </div>
        </div>

        <el-drawer
            v-if="isLoadedMounted"
            v-model="drawer"
            :direction="'btt'"
            :show-close="false"
            :withHeader="false"
            size="80vh"
            modal-class="drawer-address"
            :before-close="handleClose"
        >
            <div class="w-full pb-2 bg-white z-50">
                <div class="w-full px-4 h-[52px] relative flex flex-row items-center justify-center">
                    <p
                        class="text-lg text-[#262626] font-medium text-center"
                        v-text="labelForm"
                    />
                    <div
                        class="w-6 h-6 absolute left-4 top-center"
                        @click="handleClose"
                    >
                        <img
                            src="@/assets/svgs/close.svg"
                            class="w-full h-full"
                            alt=""
                        >
                    </div>
                </div>
                <div class="w-full px-4 mt-2">
                    <div class="w-full h-[36px] px-2 flex flex-row items-center
                    border border-[#D9D9D9] rounded-xl">
                        <div class="w-4 h-4">
                            <img
                                src="@/assets/svgs/search.svg"
                                class="w-full h-full"
                                alt=""
                            >
                        </div>
                        <div class="flex h-full flex-1 ml-2">
                            <input
                                v-model="keyword"
                                type="text"
                                class="w-full h-full text-sm placeholder-[#808080] text-[#262626]
                                bg-transparent border-none relative z-10
                                focus:border-none focus-visible:border-none outline-none"
                                @input="changeKeyword"
                                placeholder="Tìm tên"
                            >
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full px-4 pt-2 pb-20 relative max-h-full-104 overflow-y-auto">
                <div class="w-full">
                    <div
                        v-for="(item, index) in options"
                        :key="index"
                        class="w-full px-3 h-11 border-b border-[#F2F2F2] flex flex-row items-center"
                        @click="changeValue(item)"
                    >
                        <div class="flex flex-1">
                            <p
                                class="text-base text-[#262626] t-ellipsis-1 w-full"
                                v-text="item[props.lableItem]"
                            />
                        </div>
                        <div
                            v-if="item[props.keyItem] === props.modelValue"
                            class="w-6 h-6 ml-2"
                        >
                            <img
                                src="@/assets/svgs/checked.svg"
                                class="w-full h-full"
                                alt=""
                            >
                        </div>
                    </div>
                </div>
            </div>
        </el-drawer>
        <div class="w-6 h-6 absolute top-center right-3" @click="showDrawer">
            <img
                src="@/assets/svgs/arrow-down.svg"
                alt=""
                class="w-full h-full"
            >
        </div>
        <label
            v-if="!computedValue"
            :class="computedValue ? 'top-[6px] text-xs' : 'top-center text-base'"
            class="absolute left-3 transition-all text-[#808080]"
            v-text="labelForm"
            @click.stop = "handleClickLabel"
        />
        <div
            v-if="showError"
            class=" text-main text-sm text-left"
            v-text="errorMessage"
        />
    </div>
</template>

<style scoped>
.top-center {
    top: 50%;
    transform: translateY(-50%);
}

select {
    -moz-appearance: none; /* Firefox */
    -webkit-appearance: none; /* Safari and Chrome */
    appearance: none;
}

.bg-transparent {
    background: transparent;
}
</style>
