import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios' 
import bookWithId from '../../utils/bookWithId'

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

export const thunkFunction = async (dispatch, getState) => {
  try {
      const res = await axios.get('http://localhost:4000/random-book')
      if (res?.data?.title && res?.data?.author) {
        dispatch(setAddBook(bookWithId(res.data, 'random API')))
      }
    } catch (error) {}
}

export const selectAllBooks = (state) => state.books

export const selectBookById = (id) => (state) =>
  state.books.find((book) => book.id === id)

export default booksSlice.reducer
