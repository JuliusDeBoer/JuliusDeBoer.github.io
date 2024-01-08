<script setup lang="ts">
import astro from "../icons/astro.svg";
import github from "../icons/github.svg";
</script>

<template>
  <footer
    class="w-full h-52 flex flex-col justify-center items-center bg-black"
  >
    <p class="text-center">
      Made with
      <a
        href="https://astro.build"
        class="text-purple-400 underline"
        aria-label="Go to the astro website"
      >
        <img
          :src="astro.src"
          width="20"
          height="20"
          class="inline hover:fill-purple-400"
          alt="Astro logo"
        />
      </a>
    </p>

    <p class="text-center">
      Source code on
      <a
        href="https://github.com/JuliusDeBoer/JuliusDeBoer.github.io"
        class="text-purple-400 underline"
        aria-label="View the source code on github"
      >
        <img
          :src="github.src"
          width="20"
          height="20"
          class="inline hover:fill-purple-400"
          alt="Github logo"
        />
      </a>
    </p>
  </footer>
</template>
