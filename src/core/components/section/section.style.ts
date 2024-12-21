import { tv } from 'tailwind-variants';

export default tv({
	slots: {
		fieldset: 'gap-2',
		legend: 'py-2',
	},
	variants: {
		subSection: {
			true: {
				fieldset: 'flex flex-col',
				legend: 'text-sm text-base-content/70',
			},
			false: {
				fieldset: 'grid grid-cols-3',
				legend: 'text-base font-medium',
			},
		},
	},
});
