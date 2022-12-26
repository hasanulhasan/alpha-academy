import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Header = () => {
  const [state, setState] = useState(true);
  const toggle = () => {
    setState(!state);
  }
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(e => console.error(e))
  }

  return (
    <div>
      <div className='nav-1'>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand><Link to='/'><Image style={{ height: "30px" }} roundedCircle src='https://cdn-icons-png.flaticon.com/512/2169/2169601.png'></Image><button className='btn btn-light fs-4'>Alpha Academy</button></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link><Link to='/'><button className='btn btn-light'>Home</button></Link></Nav.Link>
                <Nav.Link><Link to='/coursepage'><button className='btn btn-light'>Courses</button></Link></Nav.Link>
                <Nav.Link><Link to='/blog'><button className='btn btn-light'>Blog</button></Link></Nav.Link>
                <Nav.Link><Link to='/faq'><button className='btn btn-light'>FAQ</button></Link></Nav.Link>
                <Nav.Link><button className='btn btn-light' onClick={toggle}>
                  {
                    state ? 'Dark' : 'Light'
                  }
                </button></Nav.Link>
              </Nav>
              <div className='d-flex'>
                {
                  user?.uid ?
                    <>
                      <span>{user.displayName}</span>
                      <Link className='ps-2'><button className='btn btn-outline-warning font-weight-bold text-dark' onClick={handleLogOut}>Logout</button></Link>
                    </>
                    :
                    <>
                      <Link to='/login'><button className='btn btn-outline-warning font-weight-bold text-dark'>Login</button></Link>
                    </>
                }
                <Nav.Link href="#home" className='ps-2'>{user?.photoURL
                  && <Image style={{ height: "35px" }} roundedCircle title={user.displayName} src={user.photoURL
                  }></Image>}</Nav.Link>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;