/* eslint-disable @typescript-eslint/no-var-requires */
const { createDynamicClampClasses } = require("./tailwindHelper.js");

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
const colors = {
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
};

// REST AND AUTO ARE NOT WORKING YET
const spacing = {
	component: {
		reset: "0",
		auto: "auto",
		xxs: "0.8",
		xs: "1",
		s: "2",
		m: "2.4",
		l: "3",
		xl: "4",
		xxl: "6",
	},
	layout: {
		reset: "0",
		auto: "auto",
		"4xs": "1.4",
		"3xs": "2.4",
		xxs: "2.8",
		xs: "4",
		s: "4.8",
		m: "6",
		l: "6.8",
		xl: "8",
		xxl: "10",
		"3xl": "12",
		"4xl": "13.2",
		"5xl": "16",
	},
};
const screens = {
	sm: "640px",
	md: "768px",
	lg: "1024px",
	xl: "1440px",
};
const fontFamily = {
	display: ["antenna-light", "sans-serif"],
	body: ["antenna-black", "sans-serif"],
};

module.exports = {
	theme: {
		colors,
		screens,
		fontFamily,
	},
	corePlugins: {
		container: false,
		fontSize: false,
		spacing: false,
		lineHeight: false,
	},
	plugins: [
		// Dynamic fontSize classes
		({ addUtilities, addComponents, theme }) =>
			createDynamicClampClasses(
				{ addUtilities, addComponents, theme },
				fontsizes,
				"text",
				"fontSize"
			),
		// Dynamic lineHeight classes
		({ addUtilities, addComponents, theme }) =>
			createDynamicClampClasses(
				{ addUtilities, addComponents, theme },
				lineHeights,
				"leading",
				"lineHeight"
			),
		// Dynamic padding classes
		({ addUtilities, addComponents, theme }) => {
			[
				{ prefix: "c-p", cssProperty: "padding" },
				{ prefix: "c-pt", cssProperty: "paddingTop" },
				{ prefix: "c-pb", cssProperty: "paddingBottop" },
				{ prefix: "c-pl", cssProperty: "paddingLeft" },
				{ prefix: "c-pr", cssProperty: "paddingRight" },
			].forEach((padding) => {
				createDynamicClampClasses(
					{ addUtilities, addComponents, theme },
					spacing.component,
					padding.prefix,
					padding.cssProperty
				);
			});
		},
		({ addUtilities, addComponents, theme }) => {
			[
				{ prefix: "l-p", cssProperty: "padding" },
				{ prefix: "l-pt", cssProperty: "paddingTop" },
				{ prefix: "l-pb", cssProperty: "paddingBottop" },
				{ prefix: "l-pl", cssProperty: "paddingLeft" },
				{ prefix: "l-pr", cssProperty: "paddingRight" },
			].forEach((padding) => {
				createDynamicClampClasses(
					{ addUtilities, addComponents, theme },
					spacing.layout,
					padding.prefix,
					padding.cssProperty
				);
			});
		},
		// Dynamic margin classes
		({ addUtilities, addComponents, theme }) => {
			[
				{ prefix: "c-m", cssProperty: "margin" },
				{ prefix: "c-mt", cssProperty: "marginTop" },
				{ prefix: "c-mb", cssProperty: "marginBottom" },
				{ prefix: "c-ml", cssProperty: "marginLeft" },
				{ prefix: "c-mr", cssProperty: "marginRight" },
			].forEach((margin) => {
				createDynamicClampClasses(
					{ addUtilities, addComponents, theme },
					spacing.component,
					margin.prefix,
					margin.cssProperty
				);
			});
		},
		({ addUtilities, addComponents, theme }) => {
			[
				{ prefix: "l-m", cssProperty: "margin" },
				{ prefix: "l-mt", cssProperty: "marginTop" },
				{ prefix: "l-mb", cssProperty: "marginBottom" },
				{ prefix: "l-ml", cssProperty: "marginLeft" },
				{ prefix: "l-mr", cssProperty: "marginRight" },
			].forEach((margin) => {
				createDynamicClampClasses(
					{ addUtilities, addComponents, theme },
					spacing.layout,
					margin.prefix,
					margin.cssProperty
				);
			});
		},
		// Dynamic gap classes
		({ addUtilities, addComponents, theme }) => {
			createDynamicClampClasses(
				{ addUtilities, addComponents, theme },
				spacing.component,
				"c-gap",
				"gap"
			);
		},
		({ addUtilities, addComponents, theme }) => {
			createDynamicClampClasses(
				{ addUtilities, addComponents, theme },
				spacing.layout,
				"l-gap",
				"gap"
			);
		},
		({ addUtilities, addComponents, theme }) => {
			createDynamicClampClasses(
				{ addUtilities, addComponents, theme },
				spacing.component,
				"c-gap-x",
				"columnGap"
			);
		},
		({ addUtilities, addComponents, theme }) => {
			createDynamicClampClasses(
				{ addUtilities, addComponents, theme },
				spacing.layout,
				"l-gap-x",
				"columnGap"
			);
		},
		({ addUtilities, addComponents, theme }) => {
			createDynamicClampClasses(
				{ addUtilities, addComponents, theme },
				spacing.component,
				"c-gap-y",
				"rowGap"
			);
		},
		({ addUtilities, addComponents, theme }) => {
			createDynamicClampClasses(
				{ addUtilities, addComponents, theme },
				spacing.layout,
				"l-gap-y",
				"rowGap"
			);
		},

		// Main grid
		function ({ addComponents }) {
			addComponents({
				".main-grid": {
					columnGap: spacing.layout["3xs"] + "rem",
					rowGap: spacing.layout["3xs"] + "rem",
					gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
					display: "grid",
				},
			});
		},
		// Custom container
		function ({ addComponents, theme }) {
			const containers = {
				".container-sm": {
					maxWidth: theme("screens.sm"),
				},
				".container-md": {
					maxWidth: theme("screens.md"),
				},
				".container-lg": {
					maxWidth: theme("screens.lg"),
				},
				".container": {
					maxWidth: theme("screens.xl"),
				},
			};

			addComponents(containers);
		},
	],
};
