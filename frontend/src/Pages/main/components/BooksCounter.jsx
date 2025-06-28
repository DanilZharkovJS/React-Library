import React from 'react'
import { selectAllBooks } from '../../../redux/slices/booksSlice'
import { useSelector } from 'react-redux'

function BooksCounter() {
  const allBooks = useSelector(selectAllBooks)
  const favoriteBooks = allBooks.filter(book => book.isFavorite)
  return (
    <div>
      <div className="counter-container">
        <p>All books: {allBooks.length}</p>
        <p>Favorite books: {favoriteBooks.length}</p>
      </div>
    </div>
  )
}

export default BooksCounter
