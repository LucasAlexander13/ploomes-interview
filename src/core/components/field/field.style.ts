import { tv } from 'tailwind-variants';

export default tv({
	base: 'input input-bordered input-sm',
	variants: {
		columnSpan: {
			1: 'col-span-1',
			2: 'col-span-2',
			3: 'col-span-3',
		},
	},
});
