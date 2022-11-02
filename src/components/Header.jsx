import { Navbar } from 'flowbite-react'
import NavLink from './NavLink'
const Header = () => {
  return (
    <Navbar
      fluid
      rounded
    >
      <Navbar.Brand>
        <h1 className='slef-center whitespace-nowrap text-2xl font-semibold dark:text-white'>OpenCountries 🌍 </h1>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/search'>Search</NavLink>
        <NavLink to='/about'>About</NavLink>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
