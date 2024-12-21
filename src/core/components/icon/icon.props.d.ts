type TIconifyIcon = {
	rotate?: number;
	hFlip?: boolean;
	vFlip?: boolean;
	left?: number;
	top?: number;
	width?: number;
	height?: number;
	body: string;
};

type TBlendModes = 'style' | 'bg' | 'mask' | 'svg';

type IIconProps = {
	id?: string;
	style?: React.CSSProperties;
	size?: number;
	width?: string | number;
	height?: string | number;
	hFlip?: boolean;
	vFlip?: boolean;
	rotate?: number;
	inline?: boolean;
	icon?: TIconifyIcon | string;
	mode?: TBlendModes;
	color?: string;
	flip?: string;
	className?: string;
};
