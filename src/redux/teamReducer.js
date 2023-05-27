import { createSlice } from "@reduxjs/toolkit";

export const teamSlice = createSlice({
    name: 'team',

    initialState: {
        isLoading: false,
        teamData: []
    },

    reducers: {
        setData: (state, action) => {
            state.teamData = action.payload;
            state.isLoading = false;
        },

        setLoading: (state) => {
            state.isLoading = true;
        }
    }
});

export const { setData, setLoading } = teamSlice.actions;

export default teamSlice.reducer;