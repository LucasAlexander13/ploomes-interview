interface IModal {
	title?: string;
	component?: IModalTriggerOptions;
	response?: (response: boolean) => void;
}

interface IModalTriggerOptions {
	ref: Component;
	props?: TRecordOf<any>;
	children?: ReactNode;
}
