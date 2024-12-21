import { tv } from 'tailwind-variants';

export default tv({
	slots: {
		button: 'group btn flex rounded-btn outline-base-content',
		content: 'text-sm text-base-content',
	},
	variants: {
		intent: {
			'primary': {
				button: 'btn-primary text-primary-content',
				content: 'text-primary-content',
			},
			'secondary': {
				button: 'btn-secondary text-secondary-content',
				content: 'text-secondary-content',
			},
			'accent': {
				button: 'btn-accent text-accent-content',
				content: 'text-accent-content',
			},
			'info': {
				button: 'btn-info text-info-content',
				content: 'text-info-content',
			},
			'success': {
				button: 'btn-success text-success-content',
				content: 'text-success-content',
			},
			'warning': {
				button: 'btn-warning text-warning-content',
				content: 'text-warning-content',
			},
			'error': {
				button: 'btn-error text-error-content',
				content: 'text-error-content',
			},
			'neutral': {
				button: 'btn-neutral text-neutral-content',
				content: 'text-neutral-content',
			},
			'ghost': {
				button: 'btn-ghost text-current',
				content: 'text-current',
			},
			'base-100': {
				button: 'bg-base-100 text-base-content',
				content: 'text-base-content',
			},
			'base-200': {
				button: 'bg-base-200 text-base-content',
				content: 'text-base-content',
			},
			'base-300': {
				button: 'bg-base-300 text-base-content',
				content: 'text-base-content',
			},
		},
		hover: {
			'primary': {
				button: 'hover:btn-primary hover:text-primary-content',
				content: 'group-hover:text-primary-content',
			},
			'secondary': {
				button: 'hover:btn-secondary hover:text-secondary-content',
				content: 'group-hover:text-secondary-content',
			},
			'accent': {
				button: 'hover:btn-accent hover:text-accent-content',
				content: 'group-hover:text-accent-content',
			},
			'info': {
				button: 'hover:btn-info hover:text-info-content',
				content: 'group-hover:text-info-content',
			},
			'success': {
				button: 'hover:btn-success hover:text-success-content',
				content: 'group-hover:text-success-content',
			},
			'warning': {
				button: 'hover:btn-warning hover:text-warning-content',
				content: 'group-hover:text-warning-content',
			},
			'error': {
				button: 'hover:btn-error hover:text-error-content',
				content: 'group-hover:text-error-content',
			},
			'neutral': {
				button: 'hover:btn-neutral hover:text-neutral-content',
				content: 'group-hover:text-neutral-content',
			},
			'ghost': {
				button: 'hover:btn hover:ghost|text-current',
				content: 'group-hover:text-current',
			},
			'base-100': {
				button: 'hover:bg-base-100/80 hover:text-base-content',
				content: 'group-hover:text-base-content',
			},
			'base-200': {
				button: 'hover:bg-base-200/80 hover:text-base-content',
				content: 'group-hover:text-base-content',
			},
			'base-300': {
				button: 'hover:bg-base-300/80 hover:text-base-content',
				content: 'group-hover:text-base-content',
			},
		},
		size: {
			xs: {
				button: 'btn-xs',
			},
			sm: {
				button: 'btn-sm',
			},
			md: {
				button: '',
			},
			lg: {
				button: 'btn-lg',
			},
		},
		outline: {
			true: {
				button: 'btn-outline border-2 text-current',
				content: 'font-bold text-current',
			},
			false: {
				button: '!border-transparent shadow-none',
			},
		},
	},

	defaultVariants: {
		size: 'md',
		intent: 'primary',
	},
});
