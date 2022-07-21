/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require("tailwindcss/plugin");
module.exports = plugin(function ({ addComponents, theme }) {
	addComponents({
		".main-grid": {
			columnGap: theme("mainGrid.colGap") || "2rem",
			rowGap: theme("mainGrid.rowGap") || "2rem",
			gridTemplateColumns: `repeat(${
				theme("mainGrid.cols") || 6
			}, minmax(0, 1fr))`,
			display: "grid",
		},
	});
});
