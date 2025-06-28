import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import booksData from '../data/books.json'
import bookWithId from '../../../utils/bookWithId'
import { fetchBook, setAddBook, thunkFunction } from '../../../redux/slices/booksSlice'

function BookForm() {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title && author) {
      dispatch(setAddBook(bookWithId({ title, author }, 'manual')))
      setTitle('')
      setAuthor('')
    }
  }
  const handleRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length)
    const randomBook = booksData[randomIndex]
    dispatch(setAddBook(bookWithId(randomBook, 'random')))
  }
  const handleRandomBookAPI = () => {
    dispatch(fetchBook())
  }

  return (
    <div className="book-form-container">
      <div>
        <h2>Add a book</h2>
        <form onSubmit={handleSubmit} className="book-form">
          <Input
            placeholder="Title"
            maxLength={20}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            placeholder="Author"
            maxLength={15}
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <Button type="submit">Add book</Button>
          <Button onClick={handleRandomBook}>Add a random book</Button>
          <Button onClick={handleRandomBookAPI}>
            Add a random book via API
          </Button>
        </form>
      </div>
    </div>
  )
}

export default BookForm
