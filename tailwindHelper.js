const tailwindHelper = {
	createDynamicClampClasses(
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
	},
};
module.exports = tailwindHelper;
