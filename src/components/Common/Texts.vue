<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="max-w-[1200px] mx-auto">
    <div class="text-left mt-[20px]">
      <h2 class="text text-[70px] font-serif font-semibold" :class="[headerClass, variantClass]">
        {{ text }}
      </h2>
      <p class="text-[14px] text-slate-300">
        {{ title }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  text: String,
  title: String,
  variant: {
    type: String,
    default: 'default'
  }
});

const headerClass = 'your-default-header-class';

const variantClass = computed(() => {
  switch (props.variant) {
    case 'variant1':
      return 'text-slate-900';
    case 'variant2':
      return 'text-white text-[48px]';
    case 'variant3':
      return 'text-slate-500 text-[35px]';
    default:
      return '';
  }
});
</script>
