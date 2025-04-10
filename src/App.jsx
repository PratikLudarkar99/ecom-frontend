import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Products from './components/products/Products'
import Home from './components/home/Home'
import NavBar from './components/shared/NavBar'
import About from './components/About'
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast'
import Cart from './components/cart/Cart'
import Login from './components/auth/Login'
import PrivateRoute from './components/PrivateRoute'
import Register from './components/auth/Register'
import CheckOut from './components/checkout/CheckOut'
import PaymentConfirmation from './components/checkout/PaymentConfirmation'

function App() {

  return (
    <>
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/products" element={ <Products />} />
        <Route path="/about" element={ <About />} />
        <Route path='/contact' element={ <Contact/> } />
        <Route path='/cart' element= { <Cart/> }/>

        <Route path="/" element={<PrivateRoute />}>
          <Route path='/checkout' element= { <CheckOut/> }/>
          <Route path='/order-confirm' element= { <PaymentConfirmation/> }/>
        </Route>
        
        <Route path='/' element={<PrivateRoute publicPage />}>
          <Route path='/login' element= { <Login/> }/>
          <Route path='/register' element= { <Register/> }/>
        </Route>
      </Routes>
    </Router>
    <Toaster position='bottom-center'/>
    </>
  )
}

export default App
