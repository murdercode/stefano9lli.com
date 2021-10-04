//import preprocess from 'svelte-preprocess';
import { windi } from "svelte-windicss-preprocess";
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	//preprocess: preprocess(),
	preprocess: [windi({
		configPath: "windi.config.js"
		})],
	kit: {
		adapter: adapter(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
