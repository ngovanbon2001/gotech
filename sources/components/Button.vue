<template>
    <button @click="handleClick()" v-if="outline" :class="getClass()" class="font-medium rounded-xl border">
        <slot/>
    </button>
    <button @click="handleClick()" v-if="isBlur" :class="getClass()" class="font-medium rounded-xl bg-main-blur text-main">
        <slot/>
    </button>
    <button @click="handleClick()" v-else :class="getClass()" class="bg-main text-white font-medium rounded-xl">
        <slot/>
    </button>
</template>
<script>
export default {
    name: 'Button',
    props: {
        full: {
            type: Boolean,
            default: false
        },
        outline: {
            type: Boolean,
            default: false
        },
        large: {
            type: Boolean,
            default: false
        },
        isBlur: {
            type: Boolean,
            default: false,
        },
        grow:{
            type: Boolean,
            default: false,
        }
    },
    methods: {
        getClass() {
            return `${this.getClassOutline()} ${this.getClassLarge()} ${this.getClassFull()} ${this.grow ? 'grow': ''}`;
        },
        getClassLarge() {
            return this.large ? 'py-2 px-4' : 'py-1 px-2 text-sm';
        },
        getClassFull() {
            return this.full ? 'w-full' : '';
        },
        getClassOutline() {
            return this.outline ? '' : '';
        },
        handleClick(){
            this.$emit('click');
        }
    }

}
</script>
