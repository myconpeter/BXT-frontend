/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				blueOne: '#0000BA',
				blueTwo: '#032863',
				blueThree: '#022359',
				lightGray: '#E6E6E6',
				darkGray: '#cdcfd1',
				darkerGray: '#88898a',
			},
		},
	},
	plugins: [],
};
