import { Icon as Iconify } from '@iconify/react';

export function Icon({ icon, ...rest }: IIconProps) {
	return <Iconify {...rest} icon={icon} />;
}
