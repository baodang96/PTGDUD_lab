import { createSlice } from "@reduxjs/toolkit"


const themeSlice = createSlice({
    name: 'themes',
    initialState: true, // light
    reducers: {
        toggleTheme: state => !state
    }
});

export const { toggleTheme } = themeSlice.actions
export default themeSlice.reducer