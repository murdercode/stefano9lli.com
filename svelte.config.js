//import preprocess from 'svelte-preprocess';
import path from 'path';
import { windi } from 'svelte-windicss-preprocess';
//import { mdsvex } from "mdsvex";
import adapter from '@sveltejs/adapter-cloudflare';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	//preprocess: preprocess(),
	preprocess: [
		windi({
			configPath: 'windi.config.js'
		})
		//mdsvex() // Maybe in the future
	],
	kit: {
		adapter: adapter()
	},

	/*kit: {
		adapter: adapter(),
		// hydrate the <div id="svelte"> element in src/app.html
		//target: '#svelte',
		vite: {
            resolve: {
                alias: {
                    // these are the aliases and paths to them
                    './src/components': path.resolve('./src/components'),
					//'@transitions': path.resolve('./src/transitions'),
                    //'@lib': path.resolve('./src/lib'),
                    //'@utils': path.resolve('./src/lib/utils')
                }
            }
        }
	}*/
};

export default config;