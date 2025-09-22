// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

// Your custom configs here
export default withNuxt({
	files: ['**/*.{ts,tsx,vue,mts}'],
	rules: {},
});
