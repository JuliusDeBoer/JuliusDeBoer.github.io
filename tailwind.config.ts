import type { Config } from "tailwindcss";

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
			colors: {
				text: {
					DEFAULT: "#FBF4FB",
					50: "#f8ecf8",
					100: "#f1daf1",
					200: "#e4b4e4",
					300: "#d68fd6",
					400: "#c969c9",
					500: "#bb44bb",
					600: "#963696",
					700: "#702970",
					800: "#4b1b4b",
					900: "#250e25",
					950: "#130713"
				},
				background: {
					DEFAULT: "#0b040b",
					50: "#f8ecf8",
					100: "#f1daf1",
					200: "#e4b4e4",
					300: "#d68fd6",
					400: "#c969c9",
					500: "#bb44bb",
					600: "#963696",
					700: "#702970",
					800: "#4b1b4b",
					900: "#250e25",
					950: "#130713"
				},
				primary: {
					DEFAULT: "#28762B",
					50: "#ecf8ec",
					100: "#d9f2da",
					200: "#b3e5b5",
					300: "#8dd890",
					400: "#67cb6a",
					500: "#41be45",
					600: "#349837",
					700: "#27722a",
					800: "#1a4c1c",
					900: "#0d260e",
					950: "#071307"
				},
				secondary: {
					DEFAULT: "#0D2626",
					50: "#ecf8f8",
					100: "#d9f2f2",
					200: "#b3e5e5",
					300: "#8dd8d8",
					400: "#67cbcb",
					500: "#41bebe",
					600: "#349898",
					700: "#277272",
					800: "#1a4c4c",
					900: "#0d2626",
					950: "#071313"
				},
				accent: {
					DEFAULT: "#41BE43",
					50: "#ecf8ec",
					100: "#d9f2d9",
					200: "#b3e5b4",
					300: "#8dd88e",
					400: "#67cb69",
					500: "#41be43",
					600: "#349836",
					700: "#277228",
					800: "#1a4c1b",
					900: "#0d260d",
					950: "#071307"
				}
			},
			animation: {
				"expand-width": "expand-width 1s cubic-bezier(.25,.46,.45,.94)",
				"expand-height": "expand-height 1s cubic-bezier(.25,.46,.45,.94)"
			},
			keyframes: {
				"expand-width": {
					"0%": { width: "0" },
					"100%": { width: "512px" }
				},
				"expand-height": {
					"0%": { height: "0" },
					"100%": { height: "20rem" }
				}
			},
			fontFamily: {
				heading: "IBM Plex Sans, Open Sans"
			}
		}
	},
	darkMode: "class"
} satisfies Config;
