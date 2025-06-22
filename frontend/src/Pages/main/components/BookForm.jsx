import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {v4 as id16} from 'uuid'
import { addBook } from '../../../redux/books/actionCreators'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import booksData from '../data/books.json'


function BookForm() {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title && author) {
      const book = {
        title,
        author,
        id: id16(),
      }
      dispatch(addBook(book))
      setTitle('')
      setAuthor('')
    }
  }
  const handleRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length)
    const randomBook = booksData[randomIndex]
    const randomBookWithId = {
      ...randomBook,
      id: id16(),
    }
    dispatch(addBook(randomBookWithId))
  }

  return (
    <div>
      <div className="book-form-container">
        <h2>Add a book</h2>
        <form onSubmit={handleSubmit} className="book-form">
          <Input
            placeholder="Title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            placeholder="Author"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <Button type='submit'>Add book</Button>
          <Button onClick={handleRandomBook}>Add a random book</Button>
        </form>
      </div>
    </div>
  )
}

export default BookForm
