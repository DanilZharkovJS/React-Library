import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import bookWithId from '../../utils/bookWithId'
import { setError } from './errorSlice'

const initialState = {
  books: [],
  isLoadingViaAPI: false,
}

export const fetchBook = createAsyncThunk(
  'books/fetchBook',
  async (url, thunkAPI) => {
    try {
      const res = await axios.get(url)
      return res.data
    } catch (error) {
      thunkAPI.dispatch(setError(error.message))
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setAddBook: (state, action) => {
      state.books.push(action.payload)
    },
    setDeleteBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload)
    },
    setDeleteAllBooks: () => {
      return initialState
    },
    setToggleFavorite: (state, action) => {
      const book = state.books.find((book) => book.id === action.payload)
      if (book) {
        book.isFavorite = !book.isFavorite
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBook.pending, (state) => {
        state.isLoadingViaAPI = true
      })
      .addCase(fetchBook.fulfilled, (state, action) => {
        state.isLoadingViaAPI = false
        if (action.payload.title && action.payload.author) {
          state.books.push(bookWithId(action.payload, 'API'))
        }
      })
      .addCase(fetchBook.rejected, (state, action) => {
        state.isLoadingViaAPI = false
        console.error('Ошибка при загрузке книги:', action.error.message)
      })
  },
})

export const {
  setAddBook,
  setDeleteBook,
  setDeleteAllBooks,
  setToggleFavorite,
} = booksSlice.actions

export const selectAllBooks = (state) => state.books.books

export const selectIsLoadingViaAPI = (state) => state.books.isLoadingViaAPI

export const selectBookById = (id) => (state) =>
  state.books.find((book) => book.id === id)

export default booksSlice.reducer
