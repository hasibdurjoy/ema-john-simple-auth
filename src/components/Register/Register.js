import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="text-center container mb-3 container border border-lg shadow p-3">
            {/* {!user.email ? */}
            <div>
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6 border border-primary rounded">
                        <img src="./logo.png" className="img-fluid" alt="" />
                        <form onSubmit="">
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
                            <div className="row mb-3">
                                <div className="col-sm-10">
                                    <input type="password" className="form-control rounded-pill py-3" id="inputPassword3" placeholder="Re-enter Password" />
                                </div>
                            </div>
                            <input type="submit" value="Register" className="btn btn-danger rounded-pill" />
                        </form>


                        <div className="mt-2 mb-3">
                            <Link to="/login" >Already have an account?? Login here</Link>
                        </div>
                    </div>


                    <div className="col col-md-4">
                        <img src="https://image.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg" className="img-fluid" alt="" height="500px" />
                    </div>
                </div>

            </div>
            {/* : <Home></Home> */}
            {/* } */}
            {/* <h4>Please Log in</h4>
        <button onClick={signInWithGoole}>Sign In with google</button><br />
        <Link to="/register">Don't have an account?? Register now</Link> */}
        </div>
    );
};

export default Register;