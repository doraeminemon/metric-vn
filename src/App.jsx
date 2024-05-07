// import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className='flex w-full bg-white'>
        <div className=''>
          <div className='header border relative bg-white py-3 px-4 text-orange-600 font-bold'>
            Mua Thông Minh
          </div>
          <div className='relative'>
            <input className='placeholder-gray-400 w-full border border-gray-300 bg-white h-10 px-5 pr-12 rounded-full text-base focus:outline-none text-gray-800' placeholder='Dán link hoặc tìm sản phẩm'></input>
          </div>
        </div>
      </div>
      <div className='footer'>
      </div>
    </>
  )
}

export default App
