<template>
    <div>
        <div class="mb-3">
            <input class="form-control" type="file" @change="onFileChange">
        </div>
        <div class="preview mt-2">
            <img v-if="newUrl" :src="newUrl"/>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        url: null,
    },
    data() {
        return {
            newUrl: (typeof this.url == 'string' || !this.url) ? this.url : URL.createObjectURL(this.url),
        }
    },
    methods: {
        onFileChange(e) {
            const file = e.target.files[0];
            this.newUrl = URL.createObjectURL(file);
            this.$emit('changeInputFile', file);
        },

    },
    created() {
    },

};
</script>
<style scoped>
.preview img {
    max-width: 100%;
    height: auto;
}
</style>
