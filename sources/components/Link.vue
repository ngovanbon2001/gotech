<template>
    <a href="#learn-more" :class="buttonClasses">
        <slot></slot>
    </a>
</template>

<script setup>
const props = defineProps({
    type: {
        type: String,
        default: 'primary', // Có thể là 'primary', 'secondary', 'danger', v.v.
    },
    size: {
        type: String,
        default: 'medium', // Có thể là 'small', 'medium', hoặc 'large'
    },
})

const buttonClasses = computed(() => {
    return [
        'btn',
        `btn-${props.type}`,
        `btn-${props.size}`
    ]
})

</script>

<style lang="scss" scoped>
.btn {
    max-width: 190px;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    font-size: 16px;
    text-decoration: none;
    text-align: center;
    font-weight:700;
}

.btn-primary {
    background-color: #DC0F0F;
    color: white;
}

.btn-secondary {
    background-color: #6c757d;
    color: white;
}

.btn-danger {
    background-color: #dc3545;
    color: white;
}

.btn-small {
    padding: 5px 10px;
    font-size: 12px;
}

.btn-medium {
    padding: 10px 20px;
    font-size: 16px;
}

.btn-large {
    padding: 15px 30px;
    font-size: 18px;
}
</style>