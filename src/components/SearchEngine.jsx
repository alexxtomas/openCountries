const SearchEngine = ({ handleChange, placeholder = 'Search' }) => {
  return (
    <div className='text-center w-full  mb-10'>
      <input className='w-3/6 h-8 rounded-lg text-center bg-slate-100 text-black focus:ring-3 dark:bg-transparent' placeholder={placeholder} type='search' onChange={handleChange} />
    </div>
  )
}

export default SearchEngine
