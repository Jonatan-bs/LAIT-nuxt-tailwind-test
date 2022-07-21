const useCustomConfig = true;

function remToVw(rem) {
	return (1000 * rem) / 1440 + "vw";
}

const defaultConfig = {
	theme: {
		fontSize: {
			h1: [
				`clamp(2rem, ${remToVw(5)}, 5rem)`,
				`clamp(2rem, ${remToVw(5)}, 5rem)`,
			],
			h2: [
				`clamp(2rem, ${remToVw(5)}, 5rem)`,
				`clamp(2rem, ${remToVw(5)}, 5rem)`,
			],
			h3: [
				`clamp(2rem, ${remToVw(5)}, 5rem)`,
				`clamp(2rem, ${remToVw(5)}, 5rem)`,
			],
			h4: [
				`clamp(2rem, ${remToVw(5)}, 5rem)`,
				`clamp(2rem, ${remToVw(5)}, 5rem)`,
			],
			h5: [
				`clamp(2rem, ${remToVw(5)}, 5rem)`,
				`clamp(2rem, ${remToVw(5)}, 5rem)`,
			],
			xs: [
				`clamp(2rem, ${remToVw(5)}, 5rem)`,
				`clamp(2rem, ${remToVw(5)}, 5rem)`,
			],
			sm: [
				`clamp(2rem, ${remToVw(5)}, 5rem)`,
				`clamp(2rem, ${remToVw(5)}, 5rem)`,
			],
			md: [
				`clamp(2rem, ${remToVw(5)}, 5rem)`,
				`clamp(2rem, ${remToVw(5)}, 5rem)`,
			],
			lg: [
				`clamp(2rem, ${remToVw(5)}, 5rem)`,
				`clamp(2rem, ${remToVw(5)}, 5rem)`,
			],
			xl: [
				`clamp(2rem, ${remToVw(5)}, 5rem)`,
				`clamp(2rem, ${remToVw(5)}, 5rem)`,
			],
			"2xl": [
				`clamp(2rem, ${remToVw(5)}, 5rem)`,
				`clamp(2rem, ${remToVw(5)}, 5rem)`,
			],
			"3xl": [
				`clamp(2rem, ${remToVw(5)}, 5rem)`,
				`clamp(2rem, ${remToVw(5)}, 5rem)`,
			],
			"4xl": [
				`clamp(2rem, ${remToVw(5)}, 5rem)`,
				`clamp(2rem, ${remToVw(5)}, 5rem)`,
			],
			"5xl": [
				`clamp(2rem, ${remToVw(5)}, 5rem)`,
				`clamp(2rem, ${remToVw(5)}, 5rem)`,
			],
		},
		colors: {
			black: "#000",
			white: "#fff",
			"white-wild-sand": "#f6f6f6",
			"gray-mine-shaft": "#333",
			"gray-dove": "#707070",
			"blue-bay-of-many": "#253789",
			"blue-cerulean": "#255cb9",
			"blue-biscay": "#192662",
			"turquoise-ziggurat": "#c3dfe0",
			"turquoise-aquamarine": "#6cfff4",
			"green-jewel": "#168d38",
			"green-jewel-darker": "#12762f",
			"orange-flamingo": "#ee5e29",
			"orange-piper": "#c44d21",
		},
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1440px",
			DEFAULT: "1440px",
		},
		spacing: {
			reset: "0",
			auto: "auto",

			// Component
			"c-xxs": `clamp(1rem, ${remToVw(5)}, 5rem)`,
			"c-xs": `clamp(2rem, ${remToVw(5)}, 5rem)`,
			"c-sm": `clamp(3rem, ${remToVw(5)}, 5rem)`,
			"c-md": `clamp(4rem, ${remToVw(5)}, 5rem)`,
			"c-lg": `clamp(5rem, ${remToVw(5)}, 5rem)`,
			"c-xl": `clamp(6rem, ${remToVw(5)}, 5rem)`,
			"c-xxl": `clamp(7rem, ${remToVw(5)}, 5rem)`,

			// Layout
			"l-4xs": `clamp(1rem, ${remToVw(5)}, 5rem)`,
			"l-3xs": `clamp(2rem, ${remToVw(5)}, 5rem)`,
			"l-xxs": `clamp(3rem, ${remToVw(5)}, 5rem)`,
			"l-xs": `clamp(4rem, ${remToVw(5)}, 5rem)`,
			"l-sm": `clamp(5rem, ${remToVw(5)}, 5rem)`,
			"l-md": `clamp(6rem, ${remToVw(5)}, 5rem)`,
			"l-lg": `clamp(7rem, ${remToVw(5)}, 5rem)`,
			"l-xl": `clamp(8rem, ${remToVw(5)}, 5rem)`,
			"l-xxl": `clamp(8.2rem, ${remToVw(5)}, 5rem)`,
			"l-3xl": `clamp(9.2rem, ${remToVw(5)}, 5rem)`,
			"l-4xl": `clamp(10rem, ${remToVw(5)}, 5rem)`,
			"l-5xl": `clamp(12rem, ${remToVw(5)}, 5rem)`,
		},
		fontFamily: {
			display: ["antenna-light", "sans-serif"],
			body: ["antenna-black", "sans-serif"],
		},
		mainGrid: {
			colGap: "2rem",
			rowGap: "2rem",
			cols: 12,
		},
	},
	corePlugins: {
		container: false,
	},
	plugins: [
		require("./tailwindPlugins/mainGrid.js"),
		require("./tailwindPlugins/fluidContainer.js"),
		require("./tailwindPlugins/pointerHover.js"),
	],
};

const customConfig = {
	corePlugins: [
		"flex",
		"flexDirection",
		"flexWrap",
		"alignItems",
		"justifyItems",
		"accessibility",
		"fontWeight",
		"backgroundColor",
		"textColor",
		"textAlign",
		"fontFamily",
		"gridColumn",
		"gridRow",
		"gridRowStart",
		"gridColumnStart",
	],
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
			DEFAULT: "1440px",
		},
		spacing: {
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
		},
		fontFamily: {
			display: ["antenna-light", "sans-serif"],
			body: ["antenna-black", "sans-serif"],
		},
		lineHeights: {
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
		},
		fontSizes: {
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
		},
		mainGrid: {
			colGap: "2rem",
			rowGap: "2rem",
			cols: 12,
		},
	},
	plugins: [
		require("./tailwindPlugins/clampClasses.js"),
		require("./tailwindPlugins/mainGrid.js"),
		require("./tailwindPlugins/fluidContainer.js"),
		require("./tailwindPlugins/pointerHover.js"),
	],
};

module.exports = useCustomConfig ? customConfig : defaultConfig;
