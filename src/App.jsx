import { useState } from 'react'
import { FlipWordsText } from './components/FlipWordsText'
import { WeatherCard } from './components/WeatherCard'

function App() {

  return (
    <div className='bg-gradient-to-r from-slate-900 to-slate-700'>
      <FlipWordsText />
      <WeatherCard city="Dubai" temperature="45" condition="Sunny" iconUrl="" />
    </div>
  )
}

export default App
