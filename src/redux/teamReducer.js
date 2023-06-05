import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getRandomIdsArr } from '../helpers';

export const fetchData = createAsyncThunk('team/fetchData', async () => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${getRandomIdsArr(1, 826)}`);
    return response.json();
});

export const teamSlice = createSlice({
    name: 'team',

    initialState: {
        isLoading: false,
        teamData: [],
        error: ''
    },

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.teamData = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export default teamSlice.reducer;