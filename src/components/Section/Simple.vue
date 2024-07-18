<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="mx-auto max-w-[1200px] flex items-center gap-[95px]">
    <div >
      <Texts variant="variant3" text="Simple UI & UX" />
      <p class="text-slate-600">
        Our pre-built form is easy to integrate in your app or website’s
        checkout flow and designed to optimize conversion.
      </p>
    </div>
    <div>
        <img class="w-[440px]" src="/src/assets/Images/img.svg/tel.svg" alt="">
    </div>
  </div>
</template>

<script setup>
import Texts from "../Common/Texts.vue";
</script>