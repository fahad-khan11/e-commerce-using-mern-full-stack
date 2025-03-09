import React from 'react'
import { Routes , Route} from 'react-router-dom'
import UserLayout from './components/Layout/UserLayout'
import Home from './pages/Home'
import {Toaster} from 'sonner'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import CollectionPage from './pages/CollectionPage'
import ProductsDetail from './components/Products/ProductsDetail'
import Checkout from './components/Cart/Checkout'
import OrderConfirmation from './pages/OrderConfimationPage'

const App = () => {
  return (
    <div>
      <Toaster position='top-right'/>
      <Routes>
        <Route path='/' element={<UserLayout/>}>
        <Route index element={<Home/>} />
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='profile' element={<Profile/>}/>
        <Route path='collections/:collection' element={<CollectionPage/>}/>
        <Route path='products/:id' element={<ProductsDetail/>}/>
        <Route path='checkout' element={<Checkout/>}/>
        <Route path='order-confirmation' element={<OrderConfirmation/>}/>

        </Route>
      </Routes>
    </div>
  )
}

export default App