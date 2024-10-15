<template>
    <span class="text-sm font-medium mr-2 px-2.5 py-0.5 rounded-2xl" :class="getClass()">
        <slot/>
    </span>
</template>
<script>
export default {
    props: {
        green: Boolean,
        ping: Boolean,
        orange: Boolean,
        gray: Boolean,
        purple: Boolean,
        red: Boolean,
        blue: Boolean,
        type: String,
    },
    methods: {
        getClass() {
            if (this.green || this.type === 'green') return 'text-green bg-green-100';
            if (this.ping || this.type === 'ping') return 'text-purple-600 bg-purple-100';
            if (this.orange || this.type === 'orange') return 'text-orange bg-orange-100';
            if (this.gray || this.type === 'gray') return 'text-color-normal bg-gray-200';
            if (this.purple || this.type === 'purple') return 'text-indigo-900 bg-purple-200';
            if (this.red || this.type === 'red') return 'text-red-500 bg-red-100';
            if (this.blue || this.type === 'blue') return 'text-blue-500 bg-blue-100';
            return 'text-color-normal bg-gray-200';
        }
    }
}
</script>
