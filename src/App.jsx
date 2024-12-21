import { useState } from 'react'
import Card from './components/Card'
import { FlipWordsText } from './components/FlipWordsText'

function App() {

  return (
    <div className='bg-gradient-to-r from-slate-900 to-slate-700'>
      <FlipWordsText />
      {/* <Card /> */}
    </div>
  )
}

export default App
