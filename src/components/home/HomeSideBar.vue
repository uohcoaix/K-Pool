<template>
	<div
		class="bg-[#fff] dark:bg-[#191a23] w-300px h-full border-r-2 border-solid border-[#f2f4f7] dark:border-[#2b2b38] flex flex-col items-center pt-10"
	>
		<!-- Personal Teams -->
		<n-collapse class="pl-5">
			<template #arrow>
				<n-icon :size="20" color="#000">
					<ArrowDropDownRound />
				</n-icon>
			</template>
			<!-- <template #arrow>
				<n-icon :size="20" color="#000">
					<PeopleTeam16Regular />
				</n-icon>
			</template> -->
			<n-collapse-item title="我的团队" name="1">
				<!-- TODO： Team List Display -->
			</n-collapse-item>
		</n-collapse>
        <n-divider class="w-80%"/>

        <n-collapse class="pl-5">
			<template #arrow>
				<n-icon :size="20" color="#000">
					<ArrowDropDownRound />
				</n-icon>
			</template>
            <n-collapse-item :title="personalOrganizationName" name="1">
				<!-- TODO： Team List Display -->
			</n-collapse-item>
        </n-collapse>
	</div>
</template>

<script setup>
import { PeopleTeam16Regular } from "@vicons/fluent";
import { ArrowDropDownRound } from "@vicons/material"

const personalOrganizationName = "南京邮电大学";

</script>

<style scoped></style>
