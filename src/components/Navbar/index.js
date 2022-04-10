import {Nav, NavLink, NavIcon, Bars} from "./NavbarElements"

const Navbar = ({toogle}) => {
  return (
    <>
     <Nav>
        <NavLink to="/">Pizza</NavLink>
        <NavIcon onClick={toogle}>
            <p>Menu</p>
            <Bars />
        </NavIcon>
     </Nav>
    </>
  )
}

export default Navbar