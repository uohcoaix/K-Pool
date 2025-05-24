<template>
  <div
    class="flex items-center justify-left font-400 text-13px 
    color-gray relative pl-20px hover:bg-[#f3f3f4] dark:hover:bg-[#25262e] 
    transition-colors duration-300 w-full p-8px cursor-pointer"
  >
    {{ $props.title }}
  </div>
</template>

<script setup>
const $props = defineProps({
  title: {
    type: String,
    required: true
  }
});
</script>

<style scoped></style>