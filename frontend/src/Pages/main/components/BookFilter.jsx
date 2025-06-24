import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  clearFilters,
  selectAuthorFilter,
  setTitleFilter,
  selectTitleFilter,
  setAuthorFilter,
  setFavoriteFilter,
  selectFavoriteFilter,
} from '../../../redux/slices/filterSlice'
import Button from '../../../components/Button'
function BookFilter() {
  const dispatch = useDispatch()
  const favoriteFilter = useSelector(selectFavoriteFilter)

  const handleTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value))
  }
  const handleAuthorFilterChange = (e) => {
    dispatch(setAuthorFilter(e.target.value))
  }
  const handleFavoriteFilter = (e) => {
    dispatch(setFavoriteFilter(e.target.checked))
  }

  const handleClearAll = () => {
    dispatch(clearFilters())
  }
  return (
    <div className="filter">
      <div className="filter-group">
        <div className="filter-inputs">
          <input
            type="text"
            placeholder="Filter by title.."
            value={useSelector(selectTitleFilter)}
            onChange={handleTitleFilterChange}
          />
          <input
            type="text"
            placeholder="Filter by author.."
            value={useSelector(selectAuthorFilter)}
            onChange={handleAuthorFilterChange}
          />
          <label>
            {' '}
            Favorities only
            <input
              type="checkbox"
              checked={favoriteFilter}
              onChange={handleFavoriteFilter}
            />
          </label>
        </div>
        <br />
        <div className="filter-actions">
          <Button onClick={handleClearAll}>Reset filters</Button>
        </div>
      </div>
    </div>
  )
}

export default BookFilter
