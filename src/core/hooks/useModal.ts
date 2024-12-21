import { create } from 'zustand';

interface IModalStore {
	list: IModal[];
	trigger: (options: IModal) => void;
	close: () => void;
	dismiss: () => void;
}

export const useModal = create<IModalStore>((set) => ({
	list: [] as IModal[],
	trigger: (modal: IModal) => set((state) => ({ list: [modal, ...state.list] })),
	close: () =>
		set((state) => ({
			list: state.list.length ? state.list.slice(1) : state.list,
		})),
	dismiss: () => set(() => ({ list: [] })),
}));
