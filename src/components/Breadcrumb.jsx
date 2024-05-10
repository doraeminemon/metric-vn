export function Breadcrumb() {
  const path = [
      'Máy tính & Laptop',
      <svg key="right-caret" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="flex-shrink-0 h-5 w-5 text-gray-600"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>,
      'Phụ Kiện Máy Tính',
      <svg key="right-caret" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="flex-shrink-0 h-5 w-5 text-gray-600"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>,
      'Bộ chia cổng USB & Đọc thẻ nhớ',
  ]
  return (
    <div id="breadcrumb" className='flex flex-row items-center justify-center px-8 py-2 border-b border-b-gray-300'>
      <div className="max-w-[1240px] flex flex-row items-center min-w-[1240px] px-4 gap-2">
        <div className='home icon cursor-pointer'>
          <a href="/">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
              </path>
            </svg>
          </a>
        </div>
        {path.map((param) => (
          <span key={param} className='cursor-pointer'>
            <a href="/">
              {param}
            </a>
          </span>
        ))}
      </div>
    </div>
  )
}