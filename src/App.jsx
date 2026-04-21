import './App.css'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Order from './pages/Order/Order'
import Pie from './pages/Pie/Pie'
import Settings from './pages/Settings/Settings'
import Login from './pages/Login/Login'
import { useState } from 'react'

function App() {
  const [lang, setLang] = useState("UZ");
  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route path='/home' element={<><Home lang={lang} setLang={setLang}/> <Order lang={lang} setLang={setLang}/></>  }/>
        <Route path='/pie' element={<Pie  lang={lang} setLang={setLang}/>}/>
        <Route path='/settings' element={<Settings lang={lang} setLang={setLang}/>}/>
        <Route path='/' element={<Login lang={lang} setLang={setLang}/>}/>
        <Route path='/order' element={<Order lang={lang} setLang={setLang}/>}/>
      </Routes>
    </div>
  )
}

export default App