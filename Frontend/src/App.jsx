import React from 'react'
import { Routes , Route} from 'react-router-dom'
import UserLayout from './components/Layout/UserLayout'
import Home from './pages/Home'
import {Toaster} from 'sonner'

const App = () => {
  return (
    <div>
      <Toaster position='top-right'/>
      <Routes>
        <Route path='/' element={<UserLayout/>}>
        <Route index element={<Home/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App