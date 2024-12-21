import { Icon } from '../icon/icon';
import variants from './button.style';

export function Button({
	childrenClass,
	intent,
	hover,
	size = 'md',
	outline,
	iconStart,
	iconEnd,
	iconClass,
	type = 'button',
	className,
	children,
	...rest
}: IButtonProps) {
	const { button, content } = variants({ intent, hover, size, outline });

	return (
		<button {...rest} className={button({ class: className })}>
			{/* icon no começo */}
			{iconStart && <Icon icon={iconStart} className={content({ class: iconClass })} />}

			{children && <span className={content({ class: childrenClass })}>{children}</span>}

			{/* icon no final */}
			{iconEnd && <Icon icon={iconEnd} className={content({ class: iconClass })} />}
		</button>
	);
}
