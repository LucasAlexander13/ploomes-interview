import { ApiService } from '@core/services/api.services';
import { Section } from '../section/section';

export function SectionWrapper(props: { id: number }) {
	const selectedSection = ApiService.getSections().find((section) => section.Id === props.id);

	return <Section {...selectedSection}></Section>;
}
