import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
	build: {
		outDir: 'dist',
		sourcemap: true,
		minify: 'esbuild',
	},
	plugins: [
		legacy({
			targets: ['defaults', 'ie 11'],
		}),
	],
});
