// import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Breadcrumb } from './components/Breadcrumb'
import SimpleSlider from './components/Slider'

function App() {
  return (
    <>
      <div className='relative w-full bg-white md:py-4'>
        <Header />
        <Breadcrumb />
        <SimpleSlider />
        <div className='footer'>
        </div>
      </div>
    </>
  )
}

export default App
