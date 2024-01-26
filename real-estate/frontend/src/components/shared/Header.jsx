import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUserStore } from '../../store/useStore'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  const user = useUserStore(state => state.user);
  const logout = useUserStore(state => state.logout);
  const navigate = useNavigate();
  const logoutMe = () => {
    logout();
    navigate(`/login`,{replace: true});
  }
  return (


<Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link className='nav-link' to="/">Home</Link>
          <Link className='nav-link' to="/about">About</Link>
          <Link className='nav-link' to="/property/listings">Rent/Buy</Link>
          {user?._id && (
            <>
              <Link className='nav-link' to="/members/dashboard">Dashboard</Link>
              {user?.role === 'admin' && 
                <Link className='nav-link' to="/property/add">Add Property</Link>
              }

              <Link className='nav-link' to="#" onClick={() => logoutMe()}>Logout</Link>
            </>
          )}
          {user === null && (
            <>
              <Link className='nav-link' to="/login">Login</Link>
              <Link className='nav-link' to="/register">Register</Link>
            </>
          )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>















    
  )
}

export default Header