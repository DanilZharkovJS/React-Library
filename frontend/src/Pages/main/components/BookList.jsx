import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IoBookmarkOutline, IoBookmarkSharp } from 'react-icons/io5'
import Button from '../../../components/Button'
import { deleteBook, toggleFavorite } from '../../../redux/books/actionCreators'

function BookList() {
  const books = useSelector((state) => state.books)
  const dispatch = useDispatch()
  const handleDelete = (id) => {
    dispatch(deleteBook(id))
  }
  const handleToggleFavorite = (id) => {
    dispatch(toggleFavorite(id))
  }
  return (
    <div>
      <h2>Book list</h2>
      {!books.length ? (
        <p>No books available</p>
      ) : (
        <ul>
          <div className="single-book-container">
            {books.map((book, i) => (
              <div key={book.id} className='book'>
                <li>
                  {++i}. {book.title} by <strong>{book.author}</strong>
                  <div className="actions">
                    <span onClick={() => handleToggleFavorite(book.id)}>
                      {book.isFavorite ? (
                        <IoBookmarkSharp className="favorite-icon" />
                      ) : (
                        <IoBookmarkOutline className="favorite-icon" />
                      )}
                    </span>
                    <Button onClick={() => handleDelete(book.id)}>
                      Delete
                    </Button>
                  </div>
                </li>
              </div>
            ))}
          </div>
        </ul>
      )}
    </div>
  )
}

export default BookList
