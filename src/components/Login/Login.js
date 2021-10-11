import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Shop from '../Shop/Shop';

const Login = () => {

    const { user, signInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || "/shop";

    const logInWithGoogle = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }

    return (
        < div className="text-center container mb-3 container border border-lg shadow p-3" >

            <div onSubmit="">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6 border border-primary rounded">
                        <img src="./logo.png" className="img-fluid w-75 mb-4" alt="" />
                        <div onSubmit="">
                            <div className="row mb-3">
                                <div className="col-sm-10">
                                    <input type="email" className="form-control rounded-pill py-3" id="inputEmail3" placeholder="Your E-mail" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-10">
                                    <input type="password" className="form-control rounded-pill py-3" id="inputPassword3" placeholder="Password" />
                                </div>
                            </div>
                            <input type="submit" value="Sign in" className="btn btn-primary rounded-pill" />
                        </div><br />

                        <p>Or, login with</p>
                        <div className="d-flex justify-content-center gap-1">
                            <button onClick={logInWithGoogle} className="btn btn-danger rounded-pill"><i className="fab fa-google fs-6"></i></button><br />
                            <button /* onClick={signInWithGoole} */ className="btn btn-primary rounded-pill"><i className="fab fa-facebook fs-6"></i></button><br />
                            <button /* onClick={signInWithGoole} */ className="btn btn-secondary rounded-pill"><i className="fab fa-github fs-6"></i></button><br />
                            <button /* onClick={signInWithGoole} */ className="btn btn-warning rounded-pill"><i className="fab fa-twitter fs-6"></i></button><br />
                        </div>
                        <div className="mt-2 mb-3">
                            <Link to="/register" >Don't have an account?? Register now</Link>
                        </div>
                    </div>

                    <div className="col col-md-4">
                        <img src="https://image.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg" className="img-fluid" alt="" height="500px" />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;