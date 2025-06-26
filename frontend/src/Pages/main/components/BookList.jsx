import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IoBookmarkOutline, IoBookmarkSharp } from 'react-icons/io5'
import Button from '../../../components/Button'
import {
  setDeleteBook,
  setToggleFavorite,
} from '../../../redux/slices/booksSlice'
import {
  selectAuthorFilter,
  selectFavoriteFilter,
  selectTitleFilter,
} from '../../../redux/slices/filterSlice'

function BookList() {
  const books = useSelector((state) => state.books)
  const bookTitleFilter = useSelector(selectTitleFilter)
  const bookAuthorFilter = useSelector(selectAuthorFilter)
  const bookFavoriteFilter = useSelector(selectFavoriteFilter)
  const dispatch = useDispatch()

  const handleDelete = (id) => dispatch(setDeleteBook(id))
  const handleToggleFavorite = (id) => dispatch(setToggleFavorite(id))

  const filteredBooks = books.filter((book) => {
    const matchesTitle = book.title
      .toLowerCase()
      .includes(bookTitleFilter.toLowerCase())
    const matchesAuthor = book.author
      .toLowerCase()
      .includes(bookAuthorFilter.toLowerCase())
    const matchesFavorite = bookFavoriteFilter ? book.isFavorite : true
    return matchesTitle && matchesAuthor && matchesFavorite
  })

  const highlightMatch = (text, filter) => {
    if (!filter) return text
    const parts = text.split(new RegExp(`(${filter})`, 'gi'))
    return parts.map((part, i) =>
      part.toLowerCase() === filter.toLowerCase() ? (
        <mark key={i}>{part}</mark>
      ) : (
        part
      )
    )
  }

  return (
    <div>
      <h2>Book list</h2>
      {!filteredBooks.length ? (
        <p>No books available</p>
      ) : (
        <ul className="single-book-container">
          {filteredBooks.map((book, i) => (
            <li key={book.id} className="book">
              {++i}. {highlightMatch(book.title, bookTitleFilter)} -
              <strong>{highlightMatch(book.author, bookAuthorFilter)}</strong>
              <div className="actions">
                <span onClick={() => handleToggleFavorite(book.id)}>
                  {book.isFavorite ? (
                    <IoBookmarkSharp className="favorite-icon" />
                  ) : (
                    <IoBookmarkOutline className="favorite-icon" />
                  )}
                </span>
                <Button onClick={() => handleDelete(book.id)}>Delete</Button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default BookList
