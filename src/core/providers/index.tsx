import { LoadingProvider } from './loading/loading.provider';
import { ModalProvider } from './modal/modal.provider';

export function AppProvider() {
	return (
		<>
			<LoadingProvider />
			<ModalProvider />
		</>
	);
}
