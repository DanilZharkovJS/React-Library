import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../../components/Button'
import { deleteBook } from '../../../redux/books/actionCreators'

function BookList() {
  const books = useSelector((state) => state.books)
  const dispatch = useDispatch()
  const handleDelete = (id) => {
    dispatch(deleteBook(id))
  }

  return (
    <div>
      <h2>Book list</h2>
      {!books.length ? (
        <p>No books available</p>
      ) : (
        <ul>
          {books.map((book, i) => (
            <div key={book.id}>
              <li>
                {++i}. {book.title} by <strong>{book.author}</strong>
                <Button onClick={() => handleDelete(book.id)}>Delete</Button>
              </li>
            </div>
          ))}
        </ul>
      )}
    </div>
  )
}

export default BookList
