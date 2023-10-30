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
			lang: 'en'
		},
		title: "Julius"
	});

	const colorMode = useColorMode();
	let colorToggleValue = colorMode.value === "light";
	function updateColorscheme() {
		colorMode.preference = colorToggleValue ? "dark" : "light";
	}

</script>

<template>
	<div class="min-w-full min-h-screen bg-background-100 text-text-900 dark:bg-background dark:text-text">

		<div class="fixed w-full z-50">
			<div class="container mx-auto flex flex-col justify-center items-end p-2">
				<label class="btn btn-neutral btn-circle swap swap-rotate">
					<input type="checkbox" v-model="colorToggleValue" @input="updateColorscheme" />

					<Icon name="uil:moon" class="swap-on w-10 h-10" />
					<Icon name="uil:sun" class="swap-off w-10 h-10" />
				</label>
			</div>
		</div>

		<NuxtPage />

	</div>
</template>
