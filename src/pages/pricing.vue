<!-- eslint-disable vue/multi-word-component-names -->



<template>
  <div>
    <div>
      <Texts text="Pricing" variant="variant1" />
    </div>
    <div class="flex gap-5 text-left">
      <div class="block text-left">
        <div>
          <h2 class="text-[#BA4270] text-[32px] font-serif font-bold">
            Free Plan
          </h2>
          <Texts
            class="text-left"
            title="Build and test using our core set of products with up to 100 API requests "
          />
        </div>
        <Texts varaian="variant1" text="$0.00" />
      </div>
      <div class="block text-left">
        <div>
          <h2 class="text-[#BA4270] text-[32px] font-serif font-bold">
            Basic Plan
          </h2>
          <Texts
            title="Build and test using our core set of products with up to 100 API requests "
          />
        </div>
        <Texts varaian="variant1" text="$249.00" />
      </div>
      <div class="block text-left">
        <div>
          <h2 class="text-[#BA4270] text-[32px] font-serif font-bold">
            Premium Plan
          </h2>
          <Texts
            title="Build and test using our core set of products with up to 100 API requests "/>
        </div>
        <Texts varaian="variant1" text="$499.00" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Texts from "@/components/Common/Texts.vue";
</script>