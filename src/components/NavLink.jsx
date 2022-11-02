import { Navbar } from 'flowbite-react'
import { NavLink as NavLinkReactRouter } from 'react-router-dom'

const NavLink = ({ to, children, ...props }) =>
  <Navbar.Link>
    <NavLinkReactRouter to={to} className={({ isActive }) => isActive ? 'isActive' : undefined} {...props} end>
      {children}
    </NavLinkReactRouter>
  </Navbar.Link>

export default NavLink
