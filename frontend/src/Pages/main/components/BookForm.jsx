import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addBook } from '../../../redux/books/actionCreators'
import Input from '../../../components/Input'

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
      }
      dispatch(addBook(book))
      setTitle('')
      setAuthor('')
    }
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
          <button type="submit">Add book</button>
        </form>
      </div>
    </div>
  )
}

export default BookForm
