module.exports = {
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
		"fontSize",
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
	},
	plugins: [require("./tailwindHelper.js")],
};
