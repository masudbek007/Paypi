<!-- eslint-disable vue/multi-word-component-names -->


<template>
  <button :class="buttonClass">
    {{ text }}
  </button>
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
  text: String,
  variant: {
    type: String,
    default: '',
  }
});

const buttonClass = computed(() => {
  let baseClass = " text-white relative font-semibold text-lg px-[16px] py-[7px] rounded-2xl";
  if (props.variant === 'variant1') {
    return `${baseClass} text-white relative bg-pink-500 font-semibold text-lg px-[16px] py-[7px] rounded-2xl hover:bg-pink-700  `;
  } else if (props.variant === 'variant2') {
    return `${baseClass} border border-spacing-2 hover:bg-white  hover:text-black `;
  } else {
    return `${baseClass} `;
  }
});
</script>

shu button bosilsa modal ochilsin 