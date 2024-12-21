import { FormEvent, useEffect, useRef } from 'react';
import { Button } from '../button/button';
import { SectionWrapper } from '../section-wrapper/section-wrapper';
import variances from './form-wrapper.style';

export function FormWrapper(props: IForm & { afterSubmit?: () => void }) {
	const variants = variances({ columns: props.Columns });
	const formRef = useRef<HTMLFormElement | null>(null);

	function submitHandler(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const form = event.target as HTMLFormElement;
		const formData = Object.fromEntries(new FormData(form));
		console.info('data coletada: ', formData);
		if (props.afterSubmit) props.afterSubmit();
	}

	function closeHandler() {
		if (formRef?.current) formRef.current.reset?.();
	}

	useEffect(() => {
		return () => closeHandler();
	}, []);

	return (
		<>
			<form ref={formRef} id={String(props.Id)} className={variants} onSubmit={submitHandler}>
				{props.SectionIds.map((id) => {
					return <SectionWrapper key={id} id={id}></SectionWrapper>;
				})}
				<div className='modal-action col-span-full'>
					<Button intent='accent' className='btn-wide' type='submit'>
						Salvar
					</Button>
				</div>
			</form>
		</>
	);
}
