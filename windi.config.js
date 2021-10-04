// windi.config.js
import { defineConfig } from 'windicss/helpers';
import colors from 'windicss/colors';

export default defineConfig({
	darkMode: 'class', // or 'media'
	theme: {
		extend: {
			colors: {
				unica: '#9F3133',
				primary: {
					light: '#edcbc7',
					DEFAULT: '#9f3133',
					dark: '#4f1e1d'
				}
                         }
		}
	},
	variants: {},
	plugins: []
});