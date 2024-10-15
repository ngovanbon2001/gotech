<template>
    <card class="mb-3">
        <div class="flex gap-2">
            <div class="left w-xl">
                <img class="w-full" :src="src"/>
            </div>
            <div class="right w-5/6">
                <p class="time text-color-sub text-sm mb-2">{{ time }}</p>
                <p class="title font-bold mb-2" :class="isNew ? 'text-main' : 'text-color-sub'">{{ title }}</p>
                <div class="content text-sm" v-html="content"></div>
            </div>
        </div>
    </Card>
</template>
<script>
import Card from './Card.vue';

export default {
    components: {Card},
    name: "NotificationItem",
    props: {
        src: {
            type: String,
            default: "",
        },
        time: {
            type: String,
            default: "",
        },
        title: {
            type: String,
            default: "",
        },
        content: {
            type: String,
            default: "",
        },
        isNew: {
            type: Boolean,
            default: true,
        }
    },
};
</script>
