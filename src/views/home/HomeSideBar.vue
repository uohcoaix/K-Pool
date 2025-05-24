<template>
	<div
		class="bg-[#fff] dark:bg-[#191a23] w-300px h-full  dark:border-[#2b2b38] flex flex-col items-center pt-10"
	>		<!-- Personal Teams -->
		<XCollapse title="知识仓库" rounded style="width: 90%;">
			<XCollapseItem title="仓库1" />
			<XCollapseItem title="仓库2" />
			<XCollapseItem title="仓库3" />
		</XCollapse>
		
	</div>
</template>

<script setup>
import { PeopleTeam16Regular } from "@vicons/fluent";
import { ArrowDropDownRound } from "@vicons/material";
import XCollapse from '@/components/x-collapse/XCollapse.vue';
import XCollapseItem from '@/components/x-collapse/XCollapseItem.vue';
</script>

<style scoped></style>
