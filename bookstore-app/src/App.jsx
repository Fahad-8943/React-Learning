import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'
import Home from './user/pages/Home'
import Preloader from './components/Preloader'
import AllBooks from './user/pages/AllBooks'
import Contact from './user/pages/Contact'
import Profile from './user/pages/Profile'
import ViewBook from './user/pages/ViewBook'
import Auth from './pages/Auth'
import Pnf from './pages/Pnf'
import Settings from './admin/pages/Settings'
import Resource from './admin/pages/Resource'
import Dashboard from './admin/pages/Dashboard'



function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {

      setLoading(false)

    }, 5000);
  })


  return (
    <>
      <Routes>
        <Route path='/' element={loading ? <Preloader /> : <Home />} />

        <Route path='/login' element={<Auth />} />
        <Route path='/signup' element={<Auth />} />
        <Route path='/all-books' element={<AllBooks />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/view/:id/book' element={<ViewBook />} />
        <Route path='/admin-dashboard' element={<Dashboard />} />
        <Route path='/admin-resource' element={<Resource />} />
        <Route path='/admin-settings' element={<Settings />} />
        <Route path='/*' element={<Pnf />} />
      </Routes>
      <Footer />

    </>
  )
}

export default App