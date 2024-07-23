<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <main class=" mx-auto ">
      <Heroblock/>
      <Work/>
      <Implement/>
      <Simple/>
    </main>
</template>

<script setup>
    import Heroblock from '../components/Section/Heroblock.vue'
    import Work from '../components/Section/Work.vue'
    import Implement from '../components/Section/Implement.vue'
    import Simple from '../components/Section/Simple.vue'
    
</script>