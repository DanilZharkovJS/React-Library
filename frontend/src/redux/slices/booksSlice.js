import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setAddBook: (state, action) => {
      state.push(action.payload)
    },
    setDeleteBook: (state, action) => {
      return state.filter((book) => book.id !== action.payload)
    },
    setToggleFavorite: (state, action) => {
      const book = state.find((book) => book.id === action.payload)
      if (book) {
        book.isFavorite = !book.isFavorite
      }
    },
  },
})

export const { setAddBook, setDeleteBook, setToggleFavorite } =
  booksSlice.actions

export const selectAllBooks = (state) => state.books

export const selectBookById = (id) => (state) =>
  state.books.find((book) => book.id === id)

export default booksSlice.reducer
