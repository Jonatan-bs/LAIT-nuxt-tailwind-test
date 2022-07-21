/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require("tailwindcss/plugin");

/**
 * creates following classes:
 * 		1. {{prefix}}-clamp: enables clamp sizes
 *  	2. {{prefix}}-sm-{{size}}: adds minimum size
 *  	3. {{prefix}}-lg-{{size}}: adds maximum size
 *  	4. {{prefix}}-{{size}}: simple fontSize (To be use without {{prefix}}-clamp)
 *
 * Function usage example:
 * plugin((ctx) => createDynamicClampClasses(ctx, ctx.theme("fontSizes"), "text", ["fontSize"]));
 *
 * Class usage example:
 * class="text-clamp class-sm-xs class-lg-xxl"
 *
 */

function createDynamicClampClasses(
	{ addComponents, matchUtilities, theme },
	themeObject, // Ex: theme('fontSize')
	prefix, // Ex: "text"
	cssProperties // Ex: ["fontSize"]
) {
	cssProperties.forEach((cssProperty) => {
		// Creates clamp class
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

		// Creates {{prefix}}-sm-{{size}} class
		matchUtilities(
			{
				[prefix + "-sm"]: (value) => {
					if (value === "auto") return null;
					return {
						[`--${prefix}-min`]: value,
					};
				},
			},
			{ values: themeObject }
		);
		// Creates {{prefix}}-lg-{{size}} class
		matchUtilities(
			{
				[prefix + "-lg"]: (value) => {
					if (value === "auto") return null;
					return {
						[`--${prefix}-max`]: value,
					};
				},
			},
			{ values: themeObject }
		);
		// Creates {{prefix}}-sm class
		matchUtilities(
			{
				[prefix]: (value) => {
					return {
						[cssProperty]: value + (value === "auto" ? "" : "rem"),
					};
				},
			},
			{
				values: themeObject,
				variants: ["responsive", "hover"],
			}
		);
	});
}

const addLineHeights = (ctx) => {
	createDynamicClampClasses(ctx, ctx.theme("lineHeights"), "leading", [
		"lineHeight",
	]);
};
const addFontsizes = (ctx) => {
	createDynamicClampClasses(ctx, ctx.theme("fontSizes"), "text", [
		"fontSize",
	]);
};
const addSpacings = (ctx) => {
	[
		{
			prefix: "c-m",
			cssProperties: ["margin"],
			sizes: ctx.theme("spacing.component"),
		},
		{
			prefix: "c-mt",
			cssProperties: ["marginTop"],
			sizes: ctx.theme("spacing.component"),
		},
		{
			prefix: "c-mb",
			cssProperties: ["marginBottom"],
			sizes: ctx.theme("spacing.component"),
		},
		{
			prefix: "c-ml",
			cssProperties: ["marginLeft"],
			sizes: ctx.theme("spacing.component"),
		},
		{
			prefix: "c-mr",
			cssProperties: ["marginRight"],
			sizes: ctx.theme("spacing.component"),
		},
		{
			prefix: "l-m",
			cssProperties: ["margin"],
			sizes: ctx.theme("spacing.layout"),
		},
		{
			prefix: "l-mt",
			cssProperties: ["marginTop"],
			sizes: ctx.theme("spacing.layout"),
		},
		{
			prefix: "l-mb",
			cssProperties: ["marginBottom"],
			sizes: ctx.theme("spacing.layout"),
		},
		{
			prefix: "l-ml",
			cssProperties: ["marginLeft"],
			sizes: ctx.theme("spacing.layout"),
		},
		{
			prefix: "l-mr",
			cssProperties: ["marginRight"],
			sizes: ctx.theme("spacing.layout"),
		},
		{
			prefix: "l-mx",
			cssProperties: ["marginRight", "marginLeft"],
			sizes: ctx.theme("spacing.layout"),
		},
		{
			prefix: "c-mx",
			cssProperties: ["marginRight", "marginLeft"],
			sizes: ctx.theme("spacing.component"),
		},
		{
			prefix: "c-p",
			cssProperties: ["padding"],
			sizes: ctx.theme("spacing.component"),
		},
		{
			prefix: "c-pt",
			cssProperties: ["paddingTop"],
			sizes: ctx.theme("spacing.component"),
		},
		{
			prefix: "c-pb",
			cssProperties: ["paddingBottom"],
			sizes: ctx.theme("spacing.component"),
		},
		{
			prefix: "c-pl",
			cssProperties: ["paddingLeft"],
			sizes: ctx.theme("spacing.component"),
		},
		{
			prefix: "c-pr",
			cssProperties: ["paddingRight"],
			sizes: ctx.theme("spacing.component"),
		},
		{
			prefix: "l-p",
			cssProperties: ["padding"],
			sizes: ctx.theme("spacing.layout"),
		},
		{
			prefix: "l-pt",
			cssProperties: ["paddingTop"],
			sizes: ctx.theme("spacing.layout"),
		},
		{
			prefix: "l-pb",
			cssProperties: ["paddingBottom"],
			sizes: ctx.theme("spacing.layout"),
		},
		{
			prefix: "l-pl",
			cssProperties: ["paddingLeft"],
			sizes: ctx.theme("spacing.layout"),
		},
		{
			prefix: "l-pr",
			cssProperties: ["paddingRight"],
			sizes: ctx.theme("spacing.layout"),
		},
		{
			prefix: "l-px",
			cssProperties: ["paddingRight", "paddingLeft"],
			sizes: ctx.theme("spacing.layout"),
		},
		{
			prefix: "c-px",
			cssProperties: ["paddingRight", "paddingLeft"],
			sizes: ctx.theme("spacing.component"),
		},
		{
			prefix: "l-gap",
			cssProperties: ["gap"],
			sizes: ctx.theme("spacing.layout"),
		},
		{
			prefix: "c-gap",
			cssProperties: ["gap"],
			sizes: ctx.theme("spacing.component"),
		},
		{
			prefix: "l-gap-x",
			cssProperties: ["columnGap"],
			sizes: ctx.theme("spacing.layout"),
		},
		{
			prefix: "c-gap-x",
			cssProperties: ["columnGap"],
			sizes: ctx.theme("spacing.component"),
		},
		{
			prefix: "l-gap-y",
			cssProperties: ["rowGap"],
			sizes: ctx.theme("spacing.layout"),
		},
		{
			prefix: "c-gap-y",
			cssProperties: ["rowGap"],
			sizes: ctx.theme("spacing.component"),
		},
	].forEach((utility) => {
		createDynamicClampClasses(
			ctx,
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
