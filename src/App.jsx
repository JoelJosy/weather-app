import { useState } from 'react'
import { FlipWordsText } from './components/FlipWordsText'
import { WeatherCard } from './components/WeatherCard'
import { Search } from './components/Search'

function App() {

  return (
    <div className='min-h-screen bg-gradient-to-r from-slate-900 to-slate-700'>
      {/* <FlipWordsText /> */}
      <Search />
      <WeatherCard city="Dubai" temperature="45" condition="Sunny" iconUrl="" />
    </div>
  )
}

export default App
