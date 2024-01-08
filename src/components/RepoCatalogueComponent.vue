<script setup lang="ts">
import { ref } from "vue";
import RepoCard from "./RepoCard/RepoCardComponent.vue";
import RepoCardTitle from "./RepoCard/RepoCardTitleComponent.vue";
import RepoCardDescription from "./RepoCard/RepoCardDescriptionComponent.vue";
import github from "../icons/github.svg";

type Repo = {
  name: string;
  description: string;
  html_url: string;
  owner: { login: string };
  stargazers_count: number;
  updated_at: string;
};

type Error = {
  message: string;
  documentation_url: string;
};

const repos = ref([] as Repo[]);
const error = ref(false);

await fetch("https://api.github.com/users/juliusdeboer/repos")
  .then((v) => v.json())
  .then((v: Repo[] | Error) => {
    if ("message" in v) {
      error.value = true;
      console.error(v.message);
    } else {
      repos.value = v
        .filter(
          (repo) => repo.name.toLowerCase().indexOf("juliusdeboer") === -1,
        )
        .sort((a, b) => {
          if (a.stargazers_count === b.stargazers_count) {
            return a.stargazers_count < b.stargazers_count ? -1 : 1;
          } else {
            return a.updated_at < b.updated_at ? 1 : -1;
          }
        })
        .slice(0, 6);
    }
  });
</script>

<template>
  <h2 class="text-3xl font-medium inline">Things I did</h2>

  <div v-if="error" class="flex justify-center align-center p-32">
    <p class="text-4xl font-medium">An error has occoured!</p>
  </div>

  <div v-if="!error" class="flex justify-between items-center flex-wrap">
    <RepoCard v-for="repo in repos">
      <RepoCardTitle :name="repo.owner.login" :repo="repo.name" />

      <RepoCardDescription v-text="repo.description" />

      <a
        :href="repo.html_url"
        target="_blank"
        aria-label="Visit the project on github"
      >
        <img
          :src="github.src"
          width="32"
          height="32"
          class="hover:scale-105"
          alt="Github logo"
        />
      </a>
    </RepoCard>
  </div>
</template>
