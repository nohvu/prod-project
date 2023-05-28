import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ScrollSafeSchema } from '../types/ScrollSafeSchema';

const initialState: ScrollSafeSchema = {
    scroll: {},
};

export const scrollSafeSlice = createSlice({
    name: 'scrollSafe',
    initialState,
    reducers: {
        setScrollPosition: (state, action: PayloadAction<{ path: string; position: number }>) => {
            state.scroll[action.payload.path] = action.payload.position;
        },
    },
});

export const { actions: scrollSafeActions } = scrollSafeSlice;
export const { reducer: scrollSafeReducer } = scrollSafeSlice;
