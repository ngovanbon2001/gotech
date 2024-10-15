<script setup>
import Multiselect from '@vueform/multiselect'
import { ref, reactive, computed } from "vue";

const props = defineProps({
    labelForm: {
        type: String,
        default: ''
    },
    labelProp: {
        type: String,
        default: 'id'
    },
    valueProp: {
        type: String,
        default: 'name'
    },
    modelValue: {
        type: [Array, String, Number, Boolean],
        default: null,
    },
    options: Array,
    
})
const value = reactive([])

const emit = defineEmits(["update:modelValue", "change", "update:value"]);

const computedValue = computed({
    get: () => props.modelValue,
    set: (value) => {
        emit("update:modelValue", value);
    },
});

// const options = reactive([
//     { value: 'batman', label: 'Batman' },
//     { value: 'robin', label: 'Robin' },
//     { value: 'joker', label: 'Joker' },

// ])

</script>
<template>
    <!-- <label  class="block mb-1 text-sm font-medium text-gray-900">{{ labelForm }}</label> -->
    <Multiselect
    class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none
        focus:ring-gray-900 focus:border-main block w-full"
    v-model="computedValue"
    mode="tags"
    :label="labelProp"
    :value-prop="valueProp"
    :close-on-select="false"
    :searchable="true"
    :create-option="true"
        :options="options"
    />
</template>

<style src="@vueform/multiselect/themes/default.css"></style>
<style>
.multiselect-tag{
    background: #296CD1;
}
</style>
