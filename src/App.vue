
<template>
    <Header/>
    <main class=" mx-auto ">
      <Heroblock/>
      <Work/>
      <Implement/>
      <Simple/>
    </main>
</template>

<script setup>
   import Header from '../src/components/Layouts/Header.vue'
   import Heroblock from '../src/components/Section/Heroblock.vue'
   import Work from '../src/components/Section/Work.vue'
   import Implement from '../src/components/Section/Implement.vue'
   import Simple from '../src/components/Section/Simple.vue'
</script>

<style scoped>
  
</style>