const defaultScreenSize = 1420;

const tailwindHelper = {
	createDynamicClampClasses(
		{ addComponents, theme },
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
			addComponents({
				[`.${prefix}-sm-${fontsizeKey}`]: {
					[`--${prefix}-min`]: fontsizeValue,
				},
			});
			addComponents({
				[`.${prefix}-lg-${fontsizeKey}`]: {
					[`--${prefix}-max`]: fontsizeValue,
				},
			});
			addComponents({
				[`.${prefix}-${fontsizeKey}`]: {
					[cssProperty]: fontsizeValue + "rem",
				},
			});
		}
	},

	remToVw(size) {
		return (1000 * size) / defaultScreenSize + "vw";
	},
	// Creates classes like text-sm-xl
	createClampClasses(object) {
		const dynamicClasses = {};
		let startSizeIndex = 0;
		let endSizeIndex = 0;
		if (!Object.keys(object).length) return {};

		for (const startSize in object) {
			const startSizeValue = object[startSize];

			for (const endSize in object) {
				if (startSizeIndex > endSizeIndex) {
					// Do nothing
				} else if (endSize === startSize) {
					dynamicClasses[startSize] = startSizeValue + "rem";
				} else {
					const endSizeValue = object[endSize];
					dynamicClasses[
						startSize + "-" + endSize
					] = `clamp(${startSizeValue}rem,${tailwindHelper.remToVw(
						endSizeValue
					)},${endSizeValue}rem)`;
				}
				endSizeIndex++;
			}
			endSizeIndex = 0;

			startSizeIndex++;
		}

		return dynamicClasses;
	},
};
module.exports = tailwindHelper;
