import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {
  selectErrorMessage,
  clearError,
} from '../../../redux/slices/errorSlice'
import { useEffect } from 'react'

function Error() {
  const dispatch = useDispatch()
  const errorMessage = useSelector(selectErrorMessage)

  useEffect(() => {
    if (errorMessage) {
      toast.warn(errorMessage)
      dispatch(clearError())
    }
  }, [errorMessage, dispatch])

  return (
    <ToastContainer
      position="top-right"
      autoClose={2000}
      toastClassName="custom-toast"
      bodyClassName="custom-toast-body"
      progressClassName="custom-toast-progress"
    />
  )
}
export default Error
