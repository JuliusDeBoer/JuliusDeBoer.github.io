<script setup lang="ts">
	const enabled = useState("expand-anim", () => "no");

	useNuxtApp().hook("app:mounted", () => {
		setTimeout(() => {
			enabled.value = "yes";
		}, 1000)
	});
</script>

<template>
	<div class="hero h-screen w-full overflow-hidden">
		<div class="hero-content flex flex-col-reverse xl:flex-row justify-center items-center">
			<h1 :data-enabled="enabled" class="text-6xl sm:text-8xl xl:text-9xl text-center xl:text-left whitespace-nowrap overflow-hidden font-bold font-heading data-[enabled=yes]:max-xl:animate-expand-height data-[enabled=yes]:xl:animate-expand-width data-[enabled=yes]:w-min data-[enabled=yes]:md:w-[512px] data-[enabled=yes]:h-80 data-[enabled=no]:w-0 data-[enabled=no]:h-0">
				<span class="bg-clip-text bg-gradient-to-br text-transparent from-primary to-accent">Julius</span>
				<br />
				de Boer
			</h1>
			<Cube class="text-[8px] sm:text-xs md:text-sm xl:text-base w-[288px] sm:w-[436px] md:w-[504px] xl:w-[580px] overflow-hidden" />
		</div>
	</div>
</template>
