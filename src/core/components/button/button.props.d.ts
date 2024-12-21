type TButtonSize = 'xs' | 'sm' | 'md' | 'lg';

type TButtonType = 'button' | 'submit' | 'reset';

type TButtonStyle = typeof import('./button.style').default;

interface IButtonProps extends VariantProps<TButtonStyle>, TButtonAttributes {
	childrenClass?: Tailwind;
	intent?: Intent;
	hover?: Intent;
	size?: TButtonSize;
	iconStart?: string;
	iconEnd?: string;
	iconClass?: Tailwind;
	type?: TButtonType;
}
