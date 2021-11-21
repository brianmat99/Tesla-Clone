import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    others: ["Solar Roof", "Solar Panels"]
}

const otherSlice = createSlice({
    name: "other",
    initialState,
    reducers: {}
})

export const selectOthers = state => state.other.others

export default otherSlice.reducer