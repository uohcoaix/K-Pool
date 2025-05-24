<template>
  <div>
    <div
      @click="toggleCollapse"
      :class="{
        'rounded-5px rounded-5px': $props.rounded,
        'rounded-0px rounded-0px': !$props.rounded,
      }"
      class="flex items-center justify-between font-400 text-13px 
      color-gray relative hover:bg-[#f3f3f4] dark:hover:bg-[#25262e] transition-colors 
      duration-300 w-full p-10px cursor-pointer"
    >
      {{ $props.title }}
      <n-icon
        :class="{ 'transform rotate-180': isExpanded }"
        class="transition-transform"
        size="20"
      >
        <ArrowDropDownRound />
      </n-icon>
    </div>    <transition
      name="collapse-transition"
      @enter="onEnter"
      @after-enter="onAfterEnter"
      @before-leave="onBeforeLeave"
      @leave="onLeave"
    >
      <div v-if="isExpanded" class="overflow-hidden">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, nextTick } from "vue";
import { NIcon } from "naive-ui";
import { ArrowDropDownRound } from "@vicons/material";

const $props = defineProps({
	title: {
		type: String,
		required: true,
	},
	rounded: {
		type: Boolean,
		default: false,
	},
});

const isExpanded = ref(false);

const toggleCollapse = () => {
	isExpanded.value = !isExpanded.value;
};

// 动画相关的处理函数
const onEnter = (el) => {
	el.style.height = "0";
	el.style.opacity = "0";
	nextTick(() => {
		el.style.height = el.scrollHeight + "px";
		el.style.opacity = "1";
	});
};

const onAfterEnter = (el) => {
	el.style.height = "";
	el.style.opacity = "";
};

const onBeforeLeave = (el) => {
	el.style.height = el.scrollHeight + "px";
	el.style.opacity = "1";
};

const onLeave = (el) => {
	el.style.height = "0";
	el.style.opacity = "0";
};
</script>

<style scoped>
.collapse-transition-enter-active,
.collapse-transition-leave-active {
	transition: all 0.3s ease;
	overflow: hidden;
}
</style>
