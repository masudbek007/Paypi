<!-- eslint-disable vue/multi-word-component-names -->


<template>
    <div class="bg-slate-800 px-10 flex gap-20 items-center py-[31px]">
        <Logo/>
        <ul class="flex gap-10">
            <il class="text-slate-400 font-bold hover:text-slate-200 "><router-link to="/pricing">Pricing</router-link></il>
            <il class="text-slate-400 font-bold hover:text-slate-200 "><router-link to="/about">About</router-link></il>
            <il class="text-slate-400 font-bold hover:text-slate-200 "><router-link to="/contact">Contact</router-link></il>
        </ul>
    </div>
    
</template>

<script setup>
   
   import Logo from '../Common/Logo.vue'
  
</script>