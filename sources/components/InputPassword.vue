<template>
    <div class="flex items-center gap-1 border-b border-gray-200 mb-3 p-3">
        <input @input="$emit('update:modelValue', $event.target.value)"
               :type="type" :placeholder="placeholder"
               class="grow">
        <label @click="handleClickIcon">
            <BaseIcon :path="type=== 'password' ? mdiEyeOutline() : mdiEyeOffOutline()" size="24"/>
        </label>
    </div>
</template>
<script>
import iconEye from './../assets/eye_close.png'
import BaseIcon from "./BaseIcon.vue";
import {mdiEyeOffOutline, mdiEyeOutline} from "@mdi/js";

export default {
    name: 'InputPassword',
    components: {BaseIcon},
    props: {
        placeholderCustom: {
            type: String,
            default: '',
        },
        modelValue: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            iconEye: iconEye,
            type: 'password',
            placeholder: this.placeholderCustom
        }
    },
    methods: {
        mdiEyeOffOutline() {
            return mdiEyeOffOutline
        },
        mdiEyeOutline() {
            return mdiEyeOutline
        },
        handleClickIcon() {
            this.type = this.type === 'password' ? 'text' : 'password';
        }
    }
}
</script>
