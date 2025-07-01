import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	server: {
		port: 3000,
		hmr: true,
	},
	plugins: [
		tsConfigPaths(),
		tanstackStart({
			target: 'bun',
		}),
		VitePWA({
			registerType: 'autoUpdate',
			injectRegister: 'auto',
			workbox: {
				globPatterns: ['**/*.{js,css,html,png,jpg,svg,ico}'],
			},
			manifest: {
				name: 'Simple Finance APP',
				short_name: 'Simple Finance',
				description: 'A simple finance application to manage your expenses and income.',
				theme_color: '#ffffff',
				icons: [
					{
						src: 'pwa-192x192.png',
						sizes: '192x192',
						type: 'image/png',
					},
					{
						src: 'pwa-512x512.png',
						sizes: '512x512',
						type: 'image/png',
					},
				],
			},
		}),
	],
});
