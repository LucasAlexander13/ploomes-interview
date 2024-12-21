'use client';

import { Button } from '@core/components';
import { useLoading, useModal } from '@core/hooks';
import { useEffect, useRef } from 'react';

export function ModalProvider() {
	const { list, close } = useModal();
	const { loading } = useLoading();

	const dialogRefs = useRef<HTMLDialogElement[]>([]);

	useEffect(() => {
		if (list?.length) {
			const currentDialog = dialogRefs.current[0];
			if (currentDialog) currentDialog.showModal();
		} else {
			dialogRefs.current = [];
		}
	}, [list]);

	const setDialogRef = (index: number, el?: HTMLDialogElement) => {
		if (el) dialogRefs.current[index] = el;
	};

	const handleClose = () => {
		if (list[0]?.response) list[0].response(false);
		close();
	};

	return (
		<>
			{list?.map((modal, index) => (
				<dialog
					key={index}
					ref={(el) => setDialogRef(index, el)}
					className='modal modal-bottom sm:modal-middle'
				>
					{loading && (
						<div className='absolute z-50 flex size-full bg-base-100/45 centered'>
							<span className='loading loading-spinner loading-lg text-primary'></span>
						</div>
					)}
					<div className='modal-box !min-w-max space-y-4 bg-base-200'>
						<div className='flex items-center justify-between'>
							{modal.title && <h3 className='text-xl font-bold'>{modal.title}</h3>}
							<Button
								intent='neutral'
								hover='error'
								outline
								iconStart='line-md:close'
								size='sm'
								className='btn-square'
								onClick={handleClose}
							/>
						</div>
						{modal.component && (
							<modal.component.ref {...modal.component.props}>
								{modal.component.children}
							</modal.component.ref>
						)}
					</div>
					<form method='dialog' className='modal-backdrop'>
						<button className='cursor-default' aria-label='close' onClick={handleClose}></button>
					</form>
				</dialog>
			))}
		</>
	);
}
