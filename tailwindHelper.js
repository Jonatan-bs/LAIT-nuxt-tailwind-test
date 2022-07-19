/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require("tailwindcss/plugin");

function createDynamicClampClasses(
	{ addComponents, addUtilities, theme },
	obj,
	prefix,
	cssProperty
) {
	addComponents({
		[`.${prefix}-clamp`]: {
			[cssProperty]: `
				clamp(
					calc(var(--${prefix}-min) * 1rem),
					calc(((1000 * var(--${prefix}-max)) / ${theme("screens.xl").replace(
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
			addUtilities(
				{
					[`.${prefix}-${fontsizeKey}`]: {
						[cssProperty]: fontsizeValue + "rem",
					},
				},
				["responsive", "hover"]
			);
		}
	}
}

const customContainerPlugin = plugin(({ addComponents, theme }) => {
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
});

const mainGridPlugin = plugin(({ addComponents, theme }) => {
	addComponents({
		".main-grid": {
			columnGap: theme("spacing.layout.3xs") + "rem",
			rowGap: theme("spacing.layout.3xs") + "rem",
			gridTemplateColumns: "repeat(12, minmax(0, 1fr))",
			display: "grid",
		},
	});
});

const lineHeightsPlugin = plugin(({ addUtilities, addComponents, theme }) => {
	createDynamicClampClasses(
		{ addUtilities, addComponents, theme },
		theme("lineHeights"),
		"leading",
		"lineHeight"
	);
});
const fontsizesPlugin = plugin(({ addUtilities, addComponents, theme }) => {
	createDynamicClampClasses(
		{ addUtilities, addComponents, theme },
		theme("fontsizes"),
		"text",
		"fontSize"
	);
});
const spacingsSizesPlugin = plugin(({ addUtilities, addComponents, theme }) => {
	[
		{
			prefix: "c-m",
			cssProperty: "margin",
			sizes: theme("spacing.component"),
		},
		{
			prefix: "c-mt",
			cssProperty: "marginTop",
			sizes: theme("spacing.component"),
		},
		{
			prefix: "c-mb",
			cssProperty: "marginBottom",
			sizes: theme("spacing.component"),
		},
		{
			prefix: "c-ml",
			cssProperty: "marginLeft",
			sizes: theme("spacing.component"),
		},
		{
			prefix: "c-mr",
			cssProperty: "marginRight",
			sizes: theme("spacings.component"),
		},
		{
			prefix: "l-m",
			cssProperty: "margin",
			sizes: theme("spacing.layout"),
		},
		{
			prefix: "l-mt",
			cssProperty: "marginTop",
			sizes: theme("spacing.layout"),
		},
		{
			prefix: "l-mb",
			cssProperty: "marginBottom",
			sizes: theme("spacing.layout"),
		},
		{
			prefix: "l-ml",
			cssProperty: "marginLeft",
			sizes: theme("spacing.layout"),
		},
		{
			prefix: "l-mr",
			cssProperty: "marginRight",
			sizes: theme("spacings.layout"),
		},
		{
			prefix: "c-p",
			cssProperty: "padding",
			sizes: theme("spacing.component"),
		},
		{
			prefix: "c-pt",
			cssProperty: "paddingTop",
			sizes: theme("spacing.component"),
		},
		{
			prefix: "c-pb",
			cssProperty: "paddingBottom",
			sizes: theme("spacing.component"),
		},
		{
			prefix: "c-pl",
			cssProperty: "paddingLeft",
			sizes: theme("spacing.component"),
		},
		{
			prefix: "c-pr",
			cssProperty: "paddingRight",
			sizes: theme("spacings.component"),
		},
		{
			prefix: "l-p",
			cssProperty: "padding",
			sizes: theme("spacing.layout"),
		},
		{
			prefix: "l-pt",
			cssProperty: "paddingTop",
			sizes: theme("spacing.layout"),
		},
		{
			prefix: "l-pb",
			cssProperty: "paddingBottom",
			sizes: theme("spacing.layout"),
		},
		{
			prefix: "l-pl",
			cssProperty: "paddingLeft",
			sizes: theme("spacing.layout"),
		},
		{
			prefix: "l-pr",
			cssProperty: "paddingRight",
			sizes: theme("spacings.layout"),
		},
		{
			prefix: "l-gap",
			cssProperty: "gap",
			sizes: theme("spacings.layout"),
		},
		{
			prefix: "c-gap",
			cssProperty: "gap",
			sizes: theme("spacings.component"),
		},
		{
			prefix: "l-gap-x",
			cssProperty: "columnGap",
			sizes: theme("spacings.layout"),
		},
		{
			prefix: "c-gap-x",
			cssProperty: "columnGap",
			sizes: theme("spacings.component"),
		},
		{
			prefix: "l-gap-y",
			cssProperty: "rowGap",
			sizes: theme("spacings.layout"),
		},
		{
			prefix: "c-gap-y",
			cssProperty: "rowGap",
			sizes: theme("spacings.component"),
		},
	].forEach((utility) => {
		createDynamicClampClasses(
			{ addUtilities, addComponents, theme },
			utility.sizes,
			utility.prefix,
			utility.cssProperty
		);
	});
});

module.exports = {
	customContainerPlugin,
	mainGridPlugin,
	spacingsSizesPlugin,
	lineHeightsPlugin,
	fontsizesPlugin,
};
