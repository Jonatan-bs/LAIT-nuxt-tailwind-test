/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require("tailwindcss/plugin");

function createDynamicClampClasses(
	{ addComponents, addUtilities, theme },
	obj,
	prefix,
	cssProperties
) {
	cssProperties.forEach((cssProperty) => {
		addComponents({
			[`.${prefix}-clamp`]: {
				[cssProperty]: `
					clamp(
						calc(var(--${prefix}-min) * 1rem),
						calc(((1000 * var(--${prefix}-max)) / ${theme("screens.DEFAULT")?.replace(
					"px",
					""
				)}) * 1vw ),
						calc(var(--${prefix}-max) * 1rem)
						)`,
			},
		});

		for (const fontsizeKey in obj) {
			const fontsizeValue = obj[fontsizeKey];
			if (fontsizeValue !== "auto") {
				addUtilities({
					[`.${prefix}-sm-${fontsizeKey}`]: {
						[`--${prefix}-min`]: fontsizeValue,
					},
				});
				addUtilities({
					[`.${prefix}-lg-${fontsizeKey}`]: {
						[`--${prefix}-max`]: fontsizeValue,
					},
				});
			}

			addUtilities(
				{
					[`.${prefix}-${fontsizeKey}`]: {
						[cssProperty]:
							fontsizeValue +
							(fontsizeValue === "auto" ? "" : "rem"),
					},
				},
				["responsive", "hover"]
			);
		}
	});
}

const addLineHeights = ({ addUtilities, addComponents, theme }) => {
	createDynamicClampClasses(
		{ addUtilities, addComponents, theme },
		theme("lineHeights"),
		"leading",
		["lineHeight"]
	);
};
const addFontsizes = ({ addUtilities, addComponents, theme }) => {
	createDynamicClampClasses(
		{ addUtilities, addComponents, theme },
		theme("fontSizes"),
		"text",
		["fontSize"]
	);
};
const addSpacings = ({ addUtilities, addComponents, theme }) => {
	[
		{
			prefix: "c-m",
			cssProperties: ["margin"],
			sizes: theme("spacing.component"),
		},
		{
			prefix: "c-mt",
			cssProperties: ["marginTop"],
			sizes: theme("spacing.component"),
		},
		{
			prefix: "c-mb",
			cssProperties: ["marginBottom"],
			sizes: theme("spacing.component"),
		},
		{
			prefix: "c-ml",
			cssProperties: ["marginLeft"],
			sizes: theme("spacing.component"),
		},
		{
			prefix: "c-mr",
			cssProperties: ["marginRight"],
			sizes: theme("spacing.component"),
		},
		{
			prefix: "l-m",
			cssProperties: ["margin"],
			sizes: theme("spacing.layout"),
		},
		{
			prefix: "l-mt",
			cssProperties: ["marginTop"],
			sizes: theme("spacing.layout"),
		},
		{
			prefix: "l-mb",
			cssProperties: ["marginBottom"],
			sizes: theme("spacing.layout"),
		},
		{
			prefix: "l-ml",
			cssProperties: ["marginLeft"],
			sizes: theme("spacing.layout"),
		},
		{
			prefix: "l-mr",
			cssProperties: ["marginRight"],
			sizes: theme("spacing.layout"),
		},
		{
			prefix: "l-mx",
			cssProperties: ["marginRight", "marginLeft"],
			sizes: theme("spacing.layout"),
		},
		{
			prefix: "c-mx",
			cssProperties: ["marginRight", "marginLeft"],
			sizes: theme("spacing.component"),
		},
		{
			prefix: "c-p",
			cssProperties: ["padding"],
			sizes: theme("spacing.component"),
		},
		{
			prefix: "c-pt",
			cssProperties: ["paddingTop"],
			sizes: theme("spacing.component"),
		},
		{
			prefix: "c-pb",
			cssProperties: ["paddingBottom"],
			sizes: theme("spacing.component"),
		},
		{
			prefix: "c-pl",
			cssProperties: ["paddingLeft"],
			sizes: theme("spacing.component"),
		},
		{
			prefix: "c-pr",
			cssProperties: ["paddingRight"],
			sizes: theme("spacing.component"),
		},
		{
			prefix: "l-p",
			cssProperties: ["padding"],
			sizes: theme("spacing.layout"),
		},
		{
			prefix: "l-pt",
			cssProperties: ["paddingTop"],
			sizes: theme("spacing.layout"),
		},
		{
			prefix: "l-pb",
			cssProperties: ["paddingBottom"],
			sizes: theme("spacing.layout"),
		},
		{
			prefix: "l-pl",
			cssProperties: ["paddingLeft"],
			sizes: theme("spacing.layout"),
		},
		{
			prefix: "l-pr",
			cssProperties: ["paddingRight"],
			sizes: theme("spacing.layout"),
		},
		{
			prefix: "l-px",
			cssProperties: ["paddingRight", "paddingLeft"],
			sizes: theme("spacing.layout"),
		},
		{
			prefix: "c-px",
			cssProperties: ["paddingRight", "paddingLeft"],
			sizes: theme("spacing.component"),
		},
		{
			prefix: "l-gap",
			cssProperties: ["gap"],
			sizes: theme("spacing.layout"),
		},
		{
			prefix: "c-gap",
			cssProperties: ["gap"],
			sizes: theme("spacing.component"),
		},
		{
			prefix: "l-gap-x",
			cssProperties: ["columnGap"],
			sizes: theme("spacing.layout"),
		},
		{
			prefix: "c-gap-x",
			cssProperties: ["columnGap"],
			sizes: theme("spacing.component"),
		},
		{
			prefix: "l-gap-y",
			cssProperties: ["rowGap"],
			sizes: theme("spacing.layout"),
		},
		{
			prefix: "c-gap-y",
			cssProperties: ["rowGap"],
			sizes: theme("spacing.component"),
		},
	].forEach((utility) => {
		createDynamicClampClasses(
			{ addUtilities, addComponents, theme },
			utility.sizes,
			utility.prefix,
			utility.cssProperties
		);
	});
};

module.exports = plugin((ctx) => {
	addSpacings(ctx);
	addLineHeights(ctx);
	addFontsizes(ctx);
});
