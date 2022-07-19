const defaultScreenSize = 1420;

const tailwindHelper = {
	remToVw(size) {
		return (1000 * size) / defaultScreenSize + "vw";
	},

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
