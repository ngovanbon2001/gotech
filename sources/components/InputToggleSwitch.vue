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
    emit("update:modelValue", value);
  },
});

</script>
<template>
    <div>
        <label class="switch"> <slot />
            <input type="checkbox"
            v-model="computedValue"
            :name="name"
            :value="inputValue">
            <span class="slider round"></span>
        </label>
    </div>
</template>
<style>
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 45px;
  height: 24px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #E6E6E6;
  /* box-shadow: 0 0 1px #F0721B; */
  border: 1px solid #808080;

  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 4px;
  bottom: 3px;
  background-color: #808080;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider:before {
  background-color: #F0721B;

}
input:checked + .slider {
  background-color: #FCE1CF;
  border: 1px solid #F0721B;
  
}

input:focus + .slider {
  /* box-shadow: 0 0 1px #F0721B; */
}

input:checked + .slider:before {
  -webkit-transform: translateX(20px);
  -ms-transform: translateX(20px);
  transform: translateX(20px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>