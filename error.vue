<script setup lang="ts">
type ErrorPageData = {
	url: string;
	statusCode: number;
	statusMessage: string;
	message: string;
	description: string;
	data: any;
};

defineProps({
	error: Object as PropType<ErrorPageData>
});

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
	<div class="w-full h-screen flex justify-center items-center flex-col">
		<h1 class="text-8xl">{{ error!.statusCode }}</h1>
		<h2 class="text-3xl">{{ error!.statusMessage }}</h2>
		<button @click="handleError()" class="btn btn-error btn-wide">
			To home
		</button>
	</div>
</template>
