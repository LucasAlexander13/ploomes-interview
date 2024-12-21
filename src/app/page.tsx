'use client';

import { Button, FormWrapper } from '@core/components';
import { useModal } from '@core/hooks';
import { ApiService } from '@core/services';

export default function Home() {
	const modal = useModal();
	const forms = ApiService.getForms();

	function openModal(form: IForm) {
		modal.trigger({
			title: form.Title,
			component: {
				ref: FormWrapper,
				props: { ...form, afterSubmit: modal.close },
			},
		});
	}

	return (
		<div className='flex space-x-2'>
			{forms?.map((form) => {
				return (
					<Button key={form.Id} onClick={() => openModal(form)}>
						{form.Title}
					</Button>
				);
			})}
		</div>
	);
}
