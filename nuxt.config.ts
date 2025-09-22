import { fileURLToPath, URL } from 'node:url';
import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		'@nuxt/eslint',
		'@nuxt/fonts',
		'@nuxt/icon',
		'@nuxt/image',
		'@nuxt/scripts',
		'@nuxthub/core',
	],
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

	app: {
		head: {
			htmlAttrs: {
				lang: 'en',
			},
			title: 'Rapid Key',
			meta: [
				{
					name: 'description',
					content: 'A temporary sample SEO description for Rapid Key. Hosted on NuxtHub',
				},
			],
		},
	},
});
