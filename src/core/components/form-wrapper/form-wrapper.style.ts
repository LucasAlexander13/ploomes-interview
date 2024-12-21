import { tv } from 'tailwind-variants';

export default tv({
	base: '',
	variants: {
		columns: {
			1: 'grid-cols-1',
			2: 'grid-cols-2',
			3: 'grid-cols-3',
		},
	},
});
