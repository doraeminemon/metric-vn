// import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Breadcrumb } from './components/Breadcrumb'
import SimpleSlider from './components/Slider'
import Gallery from './components/Gallery'
import ProductDescription from './components/ProductDescription'

function App() {
  return (
    <>
      <div className='relative w-full bg-white md:py-4'>
        <Header />
        <Breadcrumb />
        <div className='flex flex-row justify-between mx-10 pl-16 pr-28 mt-12'>
            <div className='flex flex-col'>
              <Gallery />
              <SimpleSlider />
            </div>
            <ProductDescription />
        </div>
        <div className='footer'>
        </div>
      </div>
    </>
  )
}

export default App
