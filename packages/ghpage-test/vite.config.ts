import { defineConfig } from 'vite';

export default defineConfig({
	base:  '/ts-packages/ghpage-test/',
	root:  './src',
	build: {
		outDir:      '../dist',
		emptyOutDir: true,
	},
});
