import { v4 as uuid } from 'uuid'
function bookWithId(book, source) {
  return {
    ...book,
    source,
    id: uuid(),
    isFavorite: false,
  }
}

export default bookWithId
