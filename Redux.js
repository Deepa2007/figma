import { configureStore, createSlice} from '@reduxjs/toolkit';

const itemsSlice=createSlice({
	name:'items',
	initialState:[],
	reducers:{
		setItems:(state,action) => action.payload,
		additem:(state,action) => [...state,action.payload],
	},
});
export const {setItems,addItem }=itemsSlice.actions;
const store = configureStore({
	reducer:{items:itemsSlice.reducer },
});
	export default store;
