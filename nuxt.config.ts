import { fileURLToPath, URL } from 'node:url';
import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/icon', '@nuxt/image', '@nuxt/scripts'],
	devtools: { enabled: true },

	eslint: {
		config: {
			stylistic: false,
		},
	},

	vite: {
		plugins: [tailwindcss()],
	},

	css: ['@/styles/main.css'],

	alias: {
		'@': fileURLToPath(new URL('./', import.meta.url)),
	},
});
