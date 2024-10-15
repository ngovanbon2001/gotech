<template>
    <div class="group-button flex justify-between mb-3 text-color-sub">
        <div class="text-sm text-center grow font-medium pb-2 border-b" :class="classTab(1)"
             @click.prevent="handleClickTab(1)">Phê Duyệt
        </div>
        <div class="text-sm text-center grow font-medium pb-2 border-b" :class="classTab(2)"
             @click.prevent="handleClickTab(2)">Đang vay
        </div>
        <div class="text-sm text-center grow font-medium pb-2 border-b" :class="classTab(3)"
             @click.prevent="handleClickTab(3)">Hoàn thành
        </div>
    </div>
</template>
<script>
import Status from "../config/Status";

export default {
    name: 'TabLoanManager',
    data() {
        return {
            tab: this.tab,
        }
    },
    props: {
        tab: {
            type: Number,
            default: 1,
        }
    },
    computed: {
        Status() {
            return Status
        }
    },
    methods: {
        handleClickTab(tab) {
            this.$emit('handleChangeTab', tab);
        },
        classTab(tab) {
            return tab == this.tab ? 'text-main' : 'border-b-gray-200'
        }
    },
    created() {
    }

}
</script>
