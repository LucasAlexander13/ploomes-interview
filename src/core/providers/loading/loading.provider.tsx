'use client';

import { useLoading } from '@core/hooks';
import { useEffect } from 'react';

export function LoadingProvider() {
	const store = useLoading();

	useEffect(() => {
		const preventTabNavigation = (event: KeyboardEvent) => {
			if (event.key === 'Tab') event.preventDefault();
		};

		if (store.loading) {
			document.addEventListener('keydown', preventTabNavigation);
		} else {
			document.removeEventListener('keydown', preventTabNavigation);
		}

		return () => {
			document.removeEventListener('keydown', preventTabNavigation);
		};
	}, [store.loading]);

	if (!store.loading) return null;

	return (
		<div className='centered absolute z-50 flex size-full bg-base-100/45'>
			<span className='loading loading-spinner loading-lg text-primary'></span>
		</div>
	);
}
