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
import Header from './components/header.vue';
import Footer from './components/footer.vue';

</script>