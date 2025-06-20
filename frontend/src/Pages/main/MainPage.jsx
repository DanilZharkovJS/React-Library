import React from 'react'
import BookForm from './components/BookForm'
import BookFilter from './components/BookFilter'
import BookList from './components/BookList'

function MainPage() {
  return (
    <div className='book-container'>
      <main>
        <div className='book-left-column'>
          <BookForm />
        </div>
        <div className='book-right-column'>
          <BookFilter />
          <BookList />
        </div>
      </main>
    </div>
  )
}

export default MainPage
