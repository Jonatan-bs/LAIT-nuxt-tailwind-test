/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require("tailwindcss/plugin");
module.exports = plugin(function ({ matchUtilities, theme }) {
	matchUtilities(
		{
			container: (value) => {
				return {
					maxWidth: value,
					marginLeft:
						theme("container.center") === false ? null : "auto",
					marginRight:
						theme("container.center") === false ? null : "auto",
				};
			},
		},
		{ values: theme("screens") }
	);
});
