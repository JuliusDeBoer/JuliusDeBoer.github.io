<script setup lang="ts">
const title = "Julius";
const desc = "A wild cube appears!";
useSeoMeta({
	description: desc,
	ogTitle: title,
	ogDescription: desc,
	ogUrl: "https://juliusdeboer.github.io",
	twitterTitle: title,
	twitterDescription: desc
});

useHead({
	htmlAttrs: {
		lang: "en"
	},
	title: "Julius"
});
</script>

<template>
	<div
		class="min-w-full min-h-screen bg-background-100 text-text-900 dark:bg-background dark:text-text">
		<div class="fixed w-full z-50">
			<div class="container mx-auto flex flex-col justify-center items-end p-2">
				<ColorModeToggle />
			</div>
		</div>

		<NuxtPage />
	</div>
</template>
