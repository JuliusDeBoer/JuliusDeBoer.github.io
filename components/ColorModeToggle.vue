<script setup lang="ts">
const colorMode = useColorMode();
</script>

<template>
	<label class="btn btn-neutral btn-circle swap swap-rotate">
		<input
			type="checkbox"
			v-model="colorMode.preference"
			true-value="dark"
			false-value="light"
			autocomplete="off" />

		<ClientOnly>
			<Icon name="uil:moon" class="swap-on w-10 h-10" />
			<Icon name="uil:sun" class="swap-off w-10 h-10" />
		</ClientOnly>
	</label>
</template>
