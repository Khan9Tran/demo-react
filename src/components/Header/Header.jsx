import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link className='navbar-brand' to={"/"}>
            SHOPEE
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to={"/"} className='nav-link'>Home</NavLink>
            <NavLink to={"/users"} className='nav-link'>Users</NavLink>
            <NavLink to={"/admins"} className='nav-link'>Admin</NavLink>
          </Nav>
          <Nav>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item>Log in</NavDropdown.Item>
                <NavDropdown.Item>Log out</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Profile</NavDropdown.Item>
                </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;