<template>
	<div
		class="h-full w-full bg-[#f2f4f7] overflow-hidden dark:bg-[#13131a] flex justify-center items-start"
	>
		<div
			class="bg-white dark:bg-[#191a23] rounded-lg w-[98vw] h-[95vh] top-0 relative 
			flex flex-row items-center
            "
		>
			<HomeSideBar class="w-300px h-100% border-r-2 border-solid border-[#f2f4f7]"/>
            <HomeDashBoard class="w-[calc(100%-300px)] h-100%"/>
		</div>
	</div>
</template>
<script setup>
import HomeSideBar from './home/HomeSideBar.vue';
import HomeDashBoard from './home/HomeDashBoard.vue';

</script>
<style scoped>

</style>
