<template>
    <div
        class="dataTables_paginate paging_simple_numbers"
        id="dataTable_paginate"
    >
        <ul class="pagination justify-content-end">
            <li
                v-for="link in links"
                :key="link"
                @click.prevent="handleClickLink(link.url)"
                class="paginate_button page-item previous"
                :class="{ disabled: !link.url, active: link.active }"
            >
                <a :href="link.url" class="page-link" v-html="link.label"></a>
            </li>
        </ul>
    </div>
</template>

<script setup>
const props = defineProps({
    links: {
        type: Object,
        default: [],
    },
});

const emit = defineEmits(["handleClickLink"]);

const handleClickLink = (url) => {
    if (url) {
        emit("handleClickLink", url);
    }
};
</script>
<style scoped>
.dataTables_paginate {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
}

.pagination {
    list-style: none;
    padding: 0;
}

.paginate_button {
    display: inline-block;
    margin-right: 5px;
    padding: 5px 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
    background-color: #fff;
    height: 32px;
    min-width: 32px;
}

.paginate_button:hover {
    background-color: #f0f0f0;
}

.page-link {
    color: #333;
    text-decoration: none;
}

.page-item.disabled .page-link {
    color: #999;
    cursor: not-allowed;
}

li.paginate_button.active {
    border-color: #296CD1;
}
</style>
