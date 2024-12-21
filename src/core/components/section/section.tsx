import { ApiService } from '@core/services/api.services';
import { Field } from '../field/field';
import variances from './section.style';

export function Section(props: ISection) {
	const renderedSections = new Set<number>();

	function renderSection(sectionData: ISection, parentSectionId?: number) {
		// Se a seção já foi renderizada, retorna null para evitar loop
		if (renderedSections.has(sectionData.Id)) {
			console.error('Loop detectado na section ', sectionData.Id);
			return null;
		}
		renderedSections.add(sectionData.Id);

		const sectionFields = ApiService.getFields().filter((field) => sectionData.FieldIds?.includes(field.Id));
		const sectionId = parentSectionId ? `${parentSectionId}:${sectionData.Id}` : sectionData.Id;
		const { fieldset, legend } = variances({ subSection: Boolean(parentSectionId) });

		return (
			<fieldset key={sectionData.Id} className={fieldset()}>
				<legend className={legend()}>{sectionData.Title}</legend>
				{sectionFields.map((field) => (
					<Field key={field.Id} sectionId={sectionId} {...field} />
				))}
				{sectionData.SubSectionIds?.map((subSectionId) => {
					const subSection = ApiService.getSections().find((s) => s.Id === subSectionId);
					return subSection ? renderSection(subSection, sectionData.Id) : null;
				})}
			</fieldset>
		);
	}

	return renderSection(props);
}
