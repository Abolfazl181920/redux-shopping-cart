import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { calculateTotals } from './features/cart/cartSlice'
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
import Modal from './components/Modal'

const App = () => {

  const { cartItems } = useSelector((store) => store.cart)
  const { isOpen } = useSelector((store) => store.modal)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotals())
  }, [ cartItems ])

  return (
    <main>
      {
        isOpen ? <Modal /> : null
      }
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App