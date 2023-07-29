/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			keyframes: {
				'fade-in': {
					'0%': { opacity: '0%' },
					'100%': { opacity: '100%' },
				},
				'fade-out': {
					'0%': { opacity: '100%' },
					'100%': { opacity: '0%' },
				},
			},
			animation: {
				'fade-in': 'fade-in 0.3s ease-in-out',
				'fade-out': 'fade-out 0.3s ease-in-out',
			},
		},
	},
	plugins: [],
	darkMode: 'media',
};
