import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import bookWithId from '../../utils/bookWithId'

const initialState = []

export const fetchBook = createAsyncThunk('books/fetchBook', async () => {
  const res = await axios.get('http://localhost:4000/random-book')
  return res.data
})

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchBook.fulfilled, (state, action) => {
        if (action.payload.title && action.payload.author) {
          state.push(bookWithId(action.payload, 'API'))
        }
      })
      .addCase(fetchBook.rejected, (state, action) => {
        console.error('Ошибка при загрузке книги:', action.error.message)
      })
  },
})

export const { setAddBook, setDeleteBook, setToggleFavorite } =
  booksSlice.actions

export const selectAllBooks = (state) => state.books

export const selectBookById = (id) => (state) =>
  state.books.find((book) => book.id === id)

export default booksSlice.reducer
