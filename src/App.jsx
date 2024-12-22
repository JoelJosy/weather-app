import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import { Home } from './components/Home'
import { WeatherCard } from './components/WeatherCard'
import { Search } from './components/Search'

function App() {

  return (
    <div className='min-h-screen bg-gradient-to-r from-slate-900 to-slate-700'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  )
}

export default App
