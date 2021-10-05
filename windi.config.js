// windi.config.js
import { defineConfig } from 'windicss/helpers';

export default defineConfig({
	darkMode: 'media', // or 'media'
	theme: {
		extend: {
            keyframes: {
                wiggle: {
                    '0%, 100%': {
                        transform: 'rotate(-1deg)'
                    },
                    '50%': {
                        transform: 'rotate(1deg)'
                    },
                }
            },
            animation: {
                wiggle: 'wiggle 2s ease-in-out infinite',
            }
        },
	},
	variants: {},
	plugins: []
});