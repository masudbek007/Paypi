<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="bg-gray-900 ">
        <div class=" mx-auto flex justify-between  items-center  max-w-[1200px]">
            <div class="max-w-[500px] my-[100px]">
                <Texts variant="variant2" text="Who we work with"/>
                <Texts  title="Today, millions of people around the world have successfully connected their accounts to apps they love using our API. We provide developers with the tools they need to create easy and accessible experiences for their users. "/>
                <Buttun class="mt-5 mb-5" text="About us" variant="variant2" />
            </div>
            <div class="my-[185px]">
                <Img/>
            </div>
        </div>
    </div>
</template>

<script setup>

import Texts from '../Common/Texts.vue'
import Buttun from '../Common/Buttun.vue'
import Img from '../Common/Img.vue'

</script>