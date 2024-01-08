import { defineConfig } from 'vite';


export default defineConfig({
	base:  '/ts-packages/mirage-mde/',
	build: {
		outDir:      './dist',
		emptyOutDir: true,
	},
});
