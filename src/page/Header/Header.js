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
                <Nav.Link><Link to='/'><button className='btn btn-light'>Home</button></Link></Nav.Link>
                <Nav.Link><Link to='/coursepage'><button className='btn btn-light'>Courses</button></Link></Nav.Link>
                <Nav.Link><Link to='/faq'><button className='btn btn-light'>FAQ</button></Link></Nav.Link>
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