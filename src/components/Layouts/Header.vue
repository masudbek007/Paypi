<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header>
    <div class="container mt-5 pb-5 px-5 mx-auto max-w-[1200px]  w-full flex justify-between items-center">
        <div class="flex gap-20 items-center">

            <div>
                <Logo/>     
            </div>
            <ul class="flex gap-5 ">
                <li>
                    <router-link class=" font-bold text-slate-700 hover:text-slate-900" to="/pricing">
                        Pricing
                    </router-link></li>
                <li>
                    <router-link class=" font-bold text-slate-700 hover:text-slate-900" to="/about">
                       About
                    </router-link></li>
                <li>
                    <router-link class=" font-bold text-slate-700 hover:text-slate-900" to="/contact">
                        Contact
                    </router-link></li>
            </ul>
        </div>
          
        <div>
            <Buttun @click=" show= true" text="Schedule a demo" variant="variant1" />
        </div>
    </div>
  </header>

  
</template>

<script setup>
import Logo from '../Common/Logo.vue';
import Buttun from '../Common/Buttun.vue'
</script>

<style scoped>
</style>


