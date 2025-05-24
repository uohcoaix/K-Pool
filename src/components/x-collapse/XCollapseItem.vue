<template>
  <div
    @click="handleClick"
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

// 定义事件
const emit = defineEmits(['itemClick']);

// 处理点击事件
const handleClick = (event) => {
  // 发送点击事件给父组件，并传递事件对象和标题
  emit('itemClick', {
    event,
    title: $props.title
  });
};
</script>

<style scoped></style>