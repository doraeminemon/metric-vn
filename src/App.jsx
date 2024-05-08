// import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Breadcrumb } from './components/Breadcrumb'

function App() {
  return (
    <>
      <div className='relative w-full bg-white md:py-4'>
        <Header />
        <Breadcrumb />
        <div className='footer'>
        </div>
      </div>
    </>
  )
}

export default App
