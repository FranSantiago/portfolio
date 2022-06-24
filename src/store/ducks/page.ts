import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const INITIAL_STATE = {
  isScrolling: false,
  isSmallScreen: false,
};

export const slice = createSlice({
  name: 'page',
  initialState: INITIAL_STATE,
  reducers: {
    setIsScrolling: (state, action: PayloadAction<boolean>) => ({
      ...state,
      isScrolling: action.payload,
    }),
    setIsSmallScreen: (state, action: PayloadAction<boolean>) => ({
      ...state,
      isSmallScreen: action.payload,
    }),
  },
});

export const { setIsScrolling, setIsSmallScreen } = slice.actions;
export default slice.reducer;
