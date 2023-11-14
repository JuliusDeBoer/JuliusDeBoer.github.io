import type { Config } from "tailwindcss";
import theme from "./theme.js";

export default {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./app.vue",
		"./error.vue"
	],
	plugins: [require("daisyui")],
	theme: {
		extend: {
			colors: theme,
			animation: {
				"expand-width": "expand-width 1s cubic-bezier(.25,.46,.45,.94)",
				"expand-height": "expand-height 1s cubic-bezier(.25,.46,.45,.94)"
			},
			keyframes: {
				"expand-width": {
					"0%": { width: "0" },
					"100%": { width: "552px" }
				},
				"expand-height": {
					"0%": { height: "0" },
					"100%": { height: "20rem" }
				}
			},
			fontFamily: {
				sans: "IBM Plex Sans, Open Sans",
				heading: "Monaspace Neon, Open Sans"
			}
		}
	},
	darkMode: "class"
} satisfies Config;
