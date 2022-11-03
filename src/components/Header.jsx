import NavLink from './NavLink'
const Header = () => {
  return (
    <header className='text-gray-400 bg-gray-900 body-font'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <NavLink to='/about' className='flex title-font font-medium items-center text-white mb-4 md:mb-0'>
          <img className='w-8 ' src='https://cdn-icons-png.flaticon.com/512/921/921490.png' alt='eath icon' />
          <span className='ml-3 text-xl'>OpenCountries</span>
        </NavLink>
        <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
          <NavLink to='/' className='mr-5 hover:text-white'>Home</NavLink>
          <NavLink to='/search' className='mr-5 hover:text-white'>Search</NavLink>
          <NavLink to='/about' className='mr-5 hover:text-white'>About</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
