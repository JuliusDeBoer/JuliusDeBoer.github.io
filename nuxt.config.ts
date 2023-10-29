// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	css: [
		"~/assets/css/fonts.css"
	],
	experimental: {
		headNext: true,
		typescriptBundlerResolution: true,
		crossOriginPrefetch: true
	},
	modules: [
		"@nuxtjs/tailwindcss",
		"@nuxtjs/robots",
		"@nuxtjs/color-mode",
		"nuxt-icon"
	],
	devtools: {
		enabled: true
	},
	colorMode: {
		classSuffix: ""
	}
});
