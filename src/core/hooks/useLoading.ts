import { create } from 'zustand';

interface ILoadingStore {
	loading: boolean;
	setLoading: (show: boolean) => void;
}

export const useLoading = create<ILoadingStore>((set) => ({
	loading: false,
	setLoading: (show: boolean) => set({ loading: show }),
}));
