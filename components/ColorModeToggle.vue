<script setup lang="ts">
	const colorMode = useColorMode();
	let colorToggleValue = colorMode.value === "light";

	function updateColorscheme() {
		colorMode.preference = colorToggleValue ? "dark" : "light";
	}
</script>

<template>
	<label class="btn btn-neutral btn-circle swap swap-rotate">
		<input type="checkbox" v-model="colorToggleValue" @input="updateColorscheme" />

		<Icon name="uil:moon" class="swap-on w-10 h-10" />
		<Icon name="uil:sun" class="swap-off w-10 h-10" />
	</label>
</template>
