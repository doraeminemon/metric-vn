export function Header() {
  return (
    <div id="header" className='header flex items-center border-b border-b-gray-300 pb-4 px-4'>
      <div className='header bg-white py-3 px-4 flex flex-shrink-0 cursor-pointer'>
        <a href="/" className='text-orange-600 font-bold hover:text-orange-600 text-xl'>MuTôMi</a>
      </div>
      <div className='flex-grow w-full relative'>
        <div className='relative'>
          <input className='placeholder-gray-400 w-full border border-gray-300 bg-white h-10 px-5 pr-12 rounded-full text-base focus:outline-none text-gray-800' placeholder='Dán link hoặc tìm sản phẩm'></input>
        </div>
        <div className="absolute min-w-12 aspect-h1-w1 h-full inset-y-0 right-0 flex items-center justify-center cursor-pointer rounded-r-full text-primary-500 hover:text-blue-500 text-orange-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
          </div>
      </div>
      <div className='flex flex-shrink-0 ml-4 flex-row items-center cursor-pointer'>
        <svg width="18" height="13" viewBox="0 0 18 13" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className=""><rect data-v-4a0f219a="" width="18" height="1" transform="matrix(1 0 0 -1 0 1)" fill="black"></rect><rect data-v-4a0f219a="" width="18" height="1" transform="matrix(1 0 0 -1 0 7)" fill="black"></rect><rect data-v-4a0f219a="" width="18" height="1" transform="matrix(1 0 0 -1 0 13)" fill="black"></rect></svg>
        <span className='ml-2 font-semibold'>DANH MỤC</span>
      </div>
      <a className='relative mx-4 font-semibold' href="/blog">
        BLOG
      </a>
    </div>
  )
}