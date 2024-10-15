<script setup>
import {computed, onMounted, ref} from "vue"
import {toThousandFilter} from "../utils/format";

const props = defineProps({
    columns: {
        type: Array,
        default: []
    },
    datas: {
        type: Array,
        default: []
    },
    from: {
        type: Number,
        default: 0
    },
})

const emit = defineEmits(["update:modelValue", "change", "update:value"]);

</script>
<template>
    <div class="">
        <table class="min-w-full  bg-main shadow-md   rounded-3xl w-full">
            <thead class=" border-b border-gray-100 text-white ">
                <tr class=" ">
                    <th v-for="column in columns" :key="column" class="py-3 px-4 text-left">{{ (column.label) ? column.label : column }}</th>
                    <th class="py-3 px-4 text-center">Action</th>
                </tr>
            </thead>
            <tbody class="text-blue-gray-900 bg-white">
                    <tr class="border border-main " v-for="(item,index) in datas" :key="index + from">
                        <template v-for="column in columns">
                            <td class="px-2 py-1 max-w-40 border border-main overflow-x-hidden" v-if="column && !column.slot">
                                <span v-if=" column.value == 'price' || column.value == 'amount' || column.value == 'bonus'">
                                    {{ toThousandFilter(item[(column.value) ? column.value : column]) }}
                                </span>
                                <span v-else-if=" column.value == 'img' || column.value == 'image' ">
                                    <img :src="item[(column.value) ? column.value : column]">
                                </span>
                                <span v-else>
                                    {{ item[(column.value) ? column.value : column] }}
                                </span>
                                
                            </td>
                            <td class="px-2 py-1 max-w-40 whitespace-nowrap overflow-x-hidden" v-if="column && column.slot"><slot :name="column.slot" :item="item"></slot></td>
                        </template>
                        <td class="px-3 py-1 text-center min-w-28">
                            <slot name="action" :item="item"></slot>
                            <!-- <a href="#" class="font-medium text-blue-600 hover:text-blue-800">Edit</a> -->
                        </td>
                    </tr>
            </tbody>
        </table>
    </div>
</template>

