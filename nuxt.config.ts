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
		"nuxt-icon",
		"nuxt-simple-sitemap"
	],
	devtools: {
		enabled: true
	},
	colorMode: {
		classSuffix: ""
	},
	site: {
		url: "https://juliusdeboer.github.io"
	},
	robots: {
		rules: {
			UserAgent: "*",
			Disallow: "",
			Sitemap: "https://juliusdeboer.github.io/sitemap.xml"
		}
	}
});
