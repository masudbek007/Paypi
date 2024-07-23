
<template>
    <Header/>
    <router-view/>
    <Ready/>
    <Footer/>
</template>

<script setup>
   import Header from '../src/components/Layouts/Header.vue'
   import Ready from './components/Layouts/Ready.vue'
   import Footer from './components/Layouts/Footer.vue'
</script>

<style scoped>
  
</style>