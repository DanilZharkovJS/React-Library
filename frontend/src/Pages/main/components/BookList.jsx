import React from 'react'
import { useSelector } from 'react-redux'

function BookList() {
  const books = useSelector((state) => state.books)

  return (
    <div>
      <h2>Book list</h2>
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {books.map((book, i) => (
            <li key={i}>
              {++i}. {book.title} by <strong>{book.author}</strong>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default BookList
