<template>
    <div class="rounded-2xl border border-gray-200 p-3">
        <slot />
    </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
    name: "Card",
});
</script>
