import { NavLink as NavLinkReactRouter } from 'react-router-dom'

const NavLink = ({ to, children, ...props }) =>
  <NavLinkReactRouter to={to} className={({ isActive }) => isActive ? 'isActive' : undefined} {...props} end>
    {children}
  </NavLinkReactRouter>

export default NavLink
