import './App.css'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Order from './pages/Order/Order'
import Pie from './pages/Pie/Pie'
import Settings from './pages/Settings/Settings'
import Login from './pages/Login/Login'

function App() {
  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route path='/home' element={<><Home/> <Order/></> }/>
        <Route path='/pie' element={<Pie/>}/>
        <Route path='/settings' element={<Settings/>}/>
        <Route path='/' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App