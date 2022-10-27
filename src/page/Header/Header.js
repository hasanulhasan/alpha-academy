import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Header = () => {
  const { user, providerLogin, logOut } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => {
        console.error(error);
      })

  }

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
            <Navbar.Brand href="#home">Alpha Academy</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                <Nav.Link><Link to='/coursepage'>Courses</Link></Nav.Link>
                <Nav.Link href="#home">FAQ</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <div className='d-flex'>
                {
                  user?.uid ?
                    <>
                      <span>{user.displayName}</span>
                      <Link className='ps-2'><button className='btn btn-light' onClick={handleLogOut}>Logout</button></Link>
                    </>
                    :
                    <>
                      <Link to='/login'><button className='btn btn-light'>Login</button></Link>
                      <Link to='/register' className='ps-2'><button className='btn btn-light'>Register</button></Link>
                    </>
                }
                <Nav.Link href="#home" className='ps-2'>{user?.photoURL
                  && <Image style={{ height: "35px" }} roundedCircle src={user.photoURL
                  }></Image>}</Nav.Link>
                <Nav.Link href="#home" className='ps-2'><button className='btn btn-light' onClick={handleGoogleSignIn}>Google</button></Nav.Link>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;