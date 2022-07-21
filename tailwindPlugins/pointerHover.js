/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require("tailwindcss/plugin");
module.exports = plugin(function ({ addVariant, e, postcss }) {
	addVariant("hover", ({ container, separator }) => {
		const hoverHover = postcss.atRule({
			name: "media",
			params: "(hover: hover) and (pointer: fine)",
		});
		hoverHover.append(container.nodes);
		container.append(hoverHover);
		hoverHover.walkRules((rule) => {
			rule.selector = `.${e(
				`hover${separator}${rule.selector.slice(1)}`
			)}:hover`;
		});
	});
});
