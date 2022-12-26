import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {
  const [error, setError] = useState('');
  const { signIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProveder = new GithubAuthProvider();

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

  const handleGitHubSignIn = () => {
    providerLogin(githubProveder)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => {
        console.error(error);
      })
  }


  const handleLogInSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then(result => {
        const user = result.user;
        setError('');
        form.reset();
        navigate(from, { replace: true });
      })
      .catch(e => {
        console.error(e);
        setError(e.message);
      })
  }

  return (
    <div>
      <section className="vh-95 my-5">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid" alt=".." />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={handleLogInSubmit}>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p className="lead fw-normal mb-0 me-3">Sign in with</p>

                  <button onClick={handleGoogleSignIn} type="button" className="btn btn-warning btn-floating mx-1">
                    <i className="fab fa-google"></i>
                  </button>
                  <button onClick={handleGitHubSignIn} type="button" className="btn btn-warning btn-floating mx-1">
                    <i className="fab fa-github"></i>
                  </button>
                  <button type="button" className="btn btn-primary btn-floating mx-1">
                    <i className="fab fa-facebook-f"></i>
                  </button>
                  <button type="button" className="btn btn-primary btn-floating mx-1">
                    <i className="fab fa-twitter"></i>
                  </button>
                  <button type="button" className="btn btn-primary btn-floating mx-1">
                    <i className="fab fa-linkedin-in"></i>
                  </button>
                </div>
                <div className="divider d-flex justify-content-center align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">Or</p>
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label" for="form3Example3">Email address</label>
                  <input name='email' type="email" id="form3Example3" className="form-control form-control-lg"
                    placeholder="Enter a valid email address" />
                </div>
                <div className="form-outline mb-3">
                  <label className="form-label" for="form3Example4">Password</label>
                  <input name='password' type="password" id="form3Example4" className="form-control form-control-lg"
                    placeholder="Enter password" />
                </div>

                <div className="d-flex justify-content-between align-items-center">

                  <div className="form-check mb-0">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                    <label className="form-check-label" for="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-body">Forgot password?</a>
                </div>
                <div>

                  {error && <p className='p-1 rounded-2 bg-danger text-white text-center mt-1'>{error}</p>}
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button type="submit" className="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>Login</button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to='/register' className="link-danger">Go Register</Link></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;