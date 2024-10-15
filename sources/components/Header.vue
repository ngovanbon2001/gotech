<template>
    <div class="fixed bg-white z-50 max-w-md w-full">
        <Container class="w-full">
            <div v-if="isSearch" class="flex justify-between items-center h-8">
                <div class="icon-back flex justify-center pr-3"
                     @click="handleClickIconBack">
                    <img class="" :src="iconBack">
                </div>
                <div class="input-group grow w-6/6 rounded-xl border border-gray flex">
                    <label class="input-icon p-2">
                        <img :src="iconSearch">
                    </label>
                    <input
                        type="text" class="grow rounded-2xl"
                        @input="$emit('update:modelValue', $event.target.value)"
                        :value="modelValue"
                        placeholder="Tìm mã khoản vay"
                    >
                </div>
            </div>
            <div v-else class="flex justify-center relative items-center h-8">
                <div class="icon-back flex justify-center absolute left-0 pr-3"
                     v-if="back"
                     @click="handleClickIconBack">
                    <img class="" :src="iconBack">
                </div>
                <div class="text-lg font-bold">
                    <slot/>
                </div>
                <div class="flex absolute right-0 top-0 bottom-0 gap-2 items-center">
                    <div class="w-6 h-6" v-if="search" @click="handleClickIconSearch">
                        <img class="w-full" :src="iconSearch"/>
                        <!--                        <BaseIcon :path="mdiMagnify()" size="24"/>-->
                    </div>
                    <div class="w-6 h-6" v-if="call">
                        <a href="tel:19002198">
                            <img class="w-full" :src="iconCall"/>
                        </a>
                    </div>
                </div>
            </div>
        </Container>
    </div>
</template>
<script>
import iconCall from "../assets/svgs/support.svg";
import iconSearch from "../assets/icon-search.svg";
import iconBack from "./../assets/icon_back.png";
import Container from "./Container.vue";
import BaseIcon from "./BaseIcon.vue";
import {mdiMagnify} from "@mdi/js";

export default {
    name: "Header",
    components: {BaseIcon, Container},
    data() {
        return {
            iconCall: iconCall,
            iconSearch: iconSearch,
            iconBack: iconBack,
            isSearch: false,
        };
    },
    props: {
        call: {
            type: Boolean,
            default: false,
        },
        search: {
            type: Boolean,
            default: false,
        },
        modelValue: {
            type: String,
            default: '',
        },
        back: {
            type: Boolean,
            default: false,
        },
        backLink: {
            type: String,
            default: '/',
        }
    },
    computed: {},
    methods: {
        mdiMagnify() {
            return mdiMagnify
        },
        handleClickIconSearch() {
            this.isSearch = true;
        },
        handleClickIconBack() {
            if (this.isSearch) {
                this.isSearch = false;
                return;
            }
            this.$inertia.get(this.backLink);
        }
    },
    watch: {
        isSearch(isSearch) {
            this.$emit('update:isSearch', isSearch);
        }
    }
};
</script>
