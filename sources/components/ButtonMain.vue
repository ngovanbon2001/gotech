<script setup>
import { computed } from "vue";
import { Link } from '@inertiajs/vue3'

const props = defineProps({
  label: {
    type: [String, Number],
    default: null,
  },
  href: {
    type: String,
    default: null,
  },
  target: {
    type: String,
    default: null,
  },
  type: {
    type: String,
    default: null,
  },
  color: {
    type: String,
    default: "white",
  },
  as: {
    type: String,
    default: null,
  },
  small: Boolean,
  outline: Boolean,
  loading: Boolean,
  active: Boolean,
  disabled: Boolean,
  roundedFull: Boolean,
});

const is = computed(() => {
  if (props.as) {
    return props.as;
  }

  if (props.href) {
    return Link;
  }

  return "button";
});

const computedType = computed(() => {
  if (is.value === "button") {
    return props.type ?? "button";
  }

  return null;
});

const labelClass = computed(() =>
  props.small ? "px-1" : "px-2"
);

const componentClass = computed(() => {
    const base = [
        "inline-flex",
        "justify-center",
        "items-center",
        "whitespace-nowrap",
        "transition-colors",
        "duration-150",
        "border",
        "bg-main",
        "text-white",
        "w-full",
        "text-base",
        props.disabled ? "cursor-not-allowed" : "cursor-pointer",
        props.roundedFull ? "rounded-full" : "rounded-xl",

    ];

 if (props.small) {
    base.push("text-sm", props.roundedFull ? "px-3 py-1" : "p-1");
  } else {
    base.push("py-2", props.roundedFull ? "px-6" : "px-3");
  }

  if (props.disabled) {
    base.push(props.outline ? "opacity-50" : "opacity-70");
  }

  return base;
});
</script>

<template>
  <component
    :is="is"
    :class="componentClass"
    :href="href"
    :type="computedType"
    :target="target"
    :disabled="disabled"
  >
    <!-- <img v-if="loading" class=" w-6 h-6" src="@/assets/loading3.gif" > -->
    <span v-if="label" :class="labelClass">{{ label }}</span>
  </component>
</template>
