<!-- eslint-disable vue/multi-word-component-names -->


<template>
      <div class=" max-w-[1200px] mx-auto flex gap-[180px]">
        
        <div>
          <Heroblock text="Start building with our APIs for absolutely free." variant="variant1"/>
          <inputButtun class="ml-10"/>
            <p class=" ml-14  mt-2 text-slate-500 font-bold">
                Have any questions? Contact Us
            </p>
        </div>
        
        <img class=" max-w-[400px]" src="/src/assets/Images/img.png/image.png" alt="tel">
    </div>
    
</template>

<script setup>

   import Heroblock from '../Common/Texts.vue'
   import inputButtun from '../Common/InputButtun.vue'

</script>