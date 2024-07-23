<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div> <router-link to="/">
    
    <img :src="imageSrc" alt="paypi">

  </router-link>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const imageSrc = ref('/src/assets/Images/payapi.svg');

</script>
