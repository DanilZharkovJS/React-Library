import { createSlice } from '@reduxjs/toolkit'

const initialState = { title: '', author: '', favorities: false }

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      state.title = action.payload
    },
    setAuthorFilter: (state, action) => {
      state.author = action.payload
    },
    setFavoriteFilter: (state, action) => {
      state.favorities = action.payload
    },
    clearFilters: () => {
      return initialState
    },
  },
})

export const { setTitleFilter, clearFilters, setAuthorFilter, setFavoriteFilter } = filterSlice.actions
export const selectTitleFilter = (state) => state.filter.title
export const selectAuthorFilter = (state) => state.filter.author
export const selectFavoriteFilter = (state) => state.filter.favorities
export default filterSlice.reducer
