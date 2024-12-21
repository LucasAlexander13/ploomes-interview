import { ApiService } from '@core/services/api.services';
import variances from './field.style';

export function Field(props: IField & { sectionId: string | number }) {
	const selectedField = ApiService.getFieldTypes().find((field) => field.Id === props.FieldTypeId);
	const variants = variances({ columnSpan: props.ColumnSpan });

	const mappedType = {
		string: 'text',
		number: 'number',
		boolean: 'checkbox',
	}[selectedField?.NativeType];

	return (
		<>
			{mappedType === 'checkbox' ? (
				<div className='form-control'>
					<label className='label cursor-pointer'>
						<span className='label-text'>{props.Title}</span>
						<input
							type='checkbox'
							className='checkbox checkbox-sm'
							name={`${props.sectionId}-${props.PropertyName}`}
							id={String(props.Id)}
							required={props.Required}
						/>
					</label>
				</div>
			) : (
				<input
					type={mappedType}
					className={variants}
					placeholder={props.Title}
					name={`${props.sectionId}-${props.PropertyName}`}
					id={String(props.Id)}
					required={props.Required}
				/>
			)}
		</>
	);
}
