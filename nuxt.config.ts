// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			title: "Julius",
			meta: [
				{ name: "description", content: "Its a cube!" }
			],
			htmlAttrs: {
				lang: "en"
			}
		}
	},
	experimental: {
		headNext: true
	},
	css: ["~/assets/css/main.css"],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	}
});
