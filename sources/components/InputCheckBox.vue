<script setup>
import { computed } from "vue";

const props = defineProps({
    // label: {
    //     type: String,
    //     default: ''
    // },
    name: {
        type: String,
        required: true,
    },
    modelValue: {
        type: [Array, String, Number, Boolean],
        default: null,
    },
    inputValue: {
        type: [String, Number, Boolean],
        required: true,
    },
})

const emit = defineEmits(["update:modelValue"]);

const computedValue = computed({
  get: () => props.modelValue,
  set: (value) => {
    console.log(value)
    emit("update:modelValue", value, props.inputValue);
  },
});

</script>
<template>
    <div>
        <label class="input-checkbox"> <slot />
            <input class=" dark:bg-white" type="checkbox"
            v-model="computedValue"
            :name="name"
            :value="inputValue">
            <span class="checkmark"></span>
        </label>
    </div>
</template>
<style scoped>
/* The input-checkbox */
.input-checkbox {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  /* font-size: 16px; */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.input-checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 24px;
  width: 24px;
  border-radius: 4px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.input-checkbox:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.input-checkbox input:checked ~ .checkmark {
  background-color: #296CD1;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.input-checkbox input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.input-checkbox .checkmark:after {
  left: 8px;
  top: 4px;
  width: 8px;
  height: 13px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
