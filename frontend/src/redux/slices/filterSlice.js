import { createSlice } from '@reduxjs/toolkit'

const initialState = { title: '' }

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      state.title = action.payload
    },
    clearFilters: (state) => {
      return initialState
    }
  },
})

export const { setTitleFilter, clearFilters } = filterSlice.actions
export const titleFilter = (state) => state.filter.title
export default filterSlice.reducer
