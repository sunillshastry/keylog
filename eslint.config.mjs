// @ts-check
import { defineConfig, globalIgnores } from 'eslint/config';
import pluginVue from 'eslint-plugin-vue';
import { vueTsConfigs } from '@vue/eslint-config-typescript';

import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
	defineConfig(
		{
			name: 'app/files-to-lint',
			files: ['**/*.{vue,ts,tsx,mts}'],
		},
		globalIgnores(['**/dist/**']),
		pluginVue.configs['flat/strongly-recommended'],
		vueTsConfigs.recommended
	)
);
// Your custom configs here
