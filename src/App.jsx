import Home from './pages/Home'
import Login from './pages/Login'
import Usuario from './pages/Usuario'

import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/login' Component={Login} />
          <Route path='/perfil' Component={Usuario} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
