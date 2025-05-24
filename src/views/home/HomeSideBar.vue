<template>
	<div
		class="bg-[#fff] dark:bg-[#191a23] w-300px h-full dark:border-[#2b2b38] flex flex-col items-center pt-15px"
	>
		<XCollapse title="知识仓库" rounded style="width: 90%">
			<XCollapseItem title="仓库1" @click="(data) => onRepositoryClick(data)" />
			<XCollapseItem title="仓库2" @click="(data) => onRepositoryClick(data)" />
			<XCollapseItem title="仓库3" @click="onRepositoryClick" />
		</XCollapse>
	</div>
</template>

<script setup>
import { PeopleTeam16Regular } from "@vicons/fluent";
import { ArrowDropDownRound } from "@vicons/material";
import XCollapse from "@/components/x-collapse/XCollapse.vue";
import XCollapseItem from "@/components/x-collapse/XCollapseItem.vue";

// 处理折叠项点击事件
function onRepositoryClick(data) {
	// TODO: 处理仓库点击事件 -> 转入到仓库详情页面
	console.log(`点击了仓库: ${data.title}`);
}
</script>

<style scoped></style>
