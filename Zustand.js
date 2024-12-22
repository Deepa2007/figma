import create from 'zustand';

const useStore= create((set) => ({
	items: []
	setitems: (newitems)=> set({ items:newItems }),
	addItem:(item) => set((state) => ({items: [...state.item]
	}));

export default useStore;
