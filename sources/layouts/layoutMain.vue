<template>
    <div>
        <Header></Header>
        <div>
            <slot></slot>
        </div>
        <Footer></Footer>
    </div>
</template>
<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

</script>