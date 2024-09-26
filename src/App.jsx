import React from 'react'
import { stules } from './utils/stules'
import { Navbar } from './components'
const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${stules.paddingX} p-5`}>
        <Navbar/>
      </div>
    </div>
  )
}

export default App
