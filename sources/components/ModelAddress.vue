<template>
    <div
        :class="isDisabled ? 'bg-[#F2F2F2]' : 'bg-white'"
        class="w-full h-12 border-b border-[#D9D9D9] pb-4"
    >
        <div
            class="w-full h-full px-3 flex flex-row items-center justify-between"
            @click="showDrawer"
        >
            <div class="flex flex-1">
                <span
                    :class="value? 'text-[#262626]' : 'text-[#808080]'"
                    class="w-full t-ellipsis-1 text-base"
                    v-text="labelValue"
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
                        v-text="`Chọn ${label}`"
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
                        v-for="(item, index) in listOptionsShow"
                        :key="index"
                        class="w-full px-3 h-11 border-b border-[#F2F2F2] flex flex-row items-center"
                        @click="changeValue(item)"
                    >
                        <div class="flex flex-1">
                            <p
                                class="text-base text-[#262626] t-ellipsis-1 w-full"
                                v-text="item[labelItem]"
                            />
                        </div>
                        <div
                            v-if="item[keyItem] === value"
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
        <div
            v-if="showError"
            class=" text-main text-sm text-left"
            v-text="errorMessage"
        />
    </div>
</template>

<script>
import {removeAccents} from "../utils/format";

export default {
    props: {
        listOptions: {
            type: Array,
            required: true
        },
        value: {
            type: [Number, String],
            default: 0
        },
        label: {
            type: String,
            default: 'Thành phố/ Tỉnh'
        },
        isDisabled: {
            type: Boolean,
            default: false
        },
        keyItem: {
            type: String,
            default: 'code'
        },
        labelItem: {
            type: String,
            default: 'name'
        },
        errorMessage:{
            type: String,
            default: ''
        },
        showError:{
            type: Boolean,
            default: false
        }

    },
    data() {
        return {
            isLoadedMounted: false,
            drawer: false,
            keyword: ''
        }
    },
    computed: {
        listOptionsShow() {
            if (this.keyword) {
                return this.listOptions.filter(item=> removeAccents(item[this.labelItem]).toLowerCase().includes(removeAccents(this.keyword).toLowerCase()))
            } else {
                return this.listOptions
            }
        },
        value: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit('update:value', value);
            }
        },
        labelValue() {
            const option = this.listOptions.find((item) => item[this.keyItem] == this.value)
            return option ? option[this.labelItem] : this.label
        },
    },
    mounted() {
        this.isLoadedMounted = true
    },
    methods: {
        handleClose() {
            this.drawer = false
        },
        showDrawer() {
            if (!this.isDisabled) {
                this.drawer = true;
            }
        },
        changeKeyword(e) {
            this.keyword = e.target.value
        },
        changeValue(item) {
            if (item.id !== this.value) {
                this.$emit('change',item[this.keyItem]);
                this.$emit('update:value', item[this.keyItem]);
            } else {
                this.$emit('change', 0)
                this.$emit('update:value', 0)
            }
            this.drawer = false
        }
    },
};


</script>

<style>
.t-ellipsis-1 {
    -webkit-box-orient: vertical !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    display: -webkit-box !important;
    -webkit-line-clamp: 1 !important;
    word-break: break-word;
    white-space: normal;
}
.drawer-address .el-drawer {
    background: #FFFFFF;
    border-radius: 12px 12px 0 0;
}
.top-center {
    top: 50%;
    transform: translateY(-50%);
}
.drawer-address .el-drawer__body {
    padding: 0 !important;
}
.max-h-full-104 {
    max-height: calc(100% - 104px);
}
</style>
