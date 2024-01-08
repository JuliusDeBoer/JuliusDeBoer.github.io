<script setup lang="ts">
const props = defineProps(["name", "repo"]);
</script>

<template>
  <h3 class="text-xl">
    <span class="text-zinc-400 text-sm">{{ props.name }}/ </span>
    {{ props.repo }}
  </h3>
</template>
