// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createClampClasses } = require("./tailwindHelper.js");

// Font sizes in rem
const fontsizes = {
	"2xs": "1.6",
	xs: "1.8",
	sm: "2",
	md: "2.4",
	lg: "3.2",
	xl: "3.6",
	"2xl": "4",
	"3xl": "4.8",
	"4xl": "6.2",
	"5xl": "8",
};
const lineHeights = {
	"2xs": "1.6",
	xs: "1.8",
	sm: "2",
	md: "2.4",
	lg: "3.2",
	xl: "3.6",
	"2xl": "4",
	"3xl": "4.8",
	"4xl": "6.2",
	"5xl": "8",
};

module.exports = {
	theme: {
		colors: {
			// Base colors
			black: "#000",
			white: "#fff",

			// White
			"white-wild-sand": "#f6f6f6",

			// Gray
			"gray-mine-shaft": "#333",
			"gray-dove": "#707070",

			// Blue
			"blue-bay-of-many": "#253789",
			"blue-cerulean": "#255cb9",
			"blue-biscay": "#192662",

			// Turquoise
			"turquoise-ziggurat": "#c3dfe0",
			"turquoise-aquamarine": "#6cfff4",

			// Green
			"green-jewel": "#168d38",
			"green-jewel-darker": "#12762f",

			// Orange
			"orange-flamingo": "#ee5e29",
			"orange-piper": "#c44d21",
		},
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1440px",
		},
		fontFamily: {
			display: ["antenna-light", "sans-serif"],
			body: ["antenna-black", "sans-serif"],
		},
		spacing: {
			reset: "0",
			auto: "auto",
			// Compnent spacing
			"c-xxs": "0.8rem",
			"c-xs": "1rem",
			"c-s": "2rem",
			"c-m": "2.4rem",
			"c-l": "3rem",
			"c-xl": "4rem",
			"c-xxl": "6rem",
			// Layout spacing
			"l-4xs": "1.4rem",
			"l-3xs": "2.4rem",
			"l-xxs": "2.8rem",
			"l-xs": "4rem",
			"l-s": "4.8rem",
			"l-m": "6rem",
			"l-l": "6.8rem",
			"l-xl": "8rem",
			"l-xxl": "10rem",
			"l-3xl": "12rem",
			"l-4xl": "13.2rem",
			"l-5xl": "16rem",
		},
		fontSize: createClampClasses(fontsizes),
		lineHeight: createClampClasses(lineHeights),
	},
	corePlugins: {
		container: false,
	},
	plugins: [
		// Main grid
		function ({ addComponents }) {
			addComponents({
				".main-grid": {
					gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
					display: "grid",
				},
			});
		},
		// Custom container
		function ({ addComponents, theme }) {
			addComponents({
				".container-sm": {
					maxWidth: theme("screens.sm"),
				},
			});
			addComponents({
				".container-md": {
					maxWidth: theme("screens.md"),
				},
			});
			addComponents({
				".container-lg": {
					maxWidth: theme("screens.lg"),
				},
			});
			addComponents({
				".container": {
					maxWidth: theme("screens.xl"),
				},
			});
		},
	],
};
