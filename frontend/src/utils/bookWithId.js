import { v4 as uuid } from "uuid"
function bookWithId(book) {
  return {
    ...book,
    id: uuid(),
    isFavorite: false,
  }
}

export default bookWithId