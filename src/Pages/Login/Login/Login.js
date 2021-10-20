import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {

    const {
        signInUsingGoogle, setIsLoading, signInUsinGithub,
        handleRegistration
        , handleEmailChange,
        handlePasswordChange,
        toggleLogin, isLogin, error } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirects_uri = location.state?.from || '/home';

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirects_uri);
            })
            .finally(() => setIsLoading(false));

    }
    const handleGithubSignIn = () => {
        signInUsinGithub()
            .then(result => {
                history.push(redirects_uri);
            })
            .finally(() => setIsLoading(false));
    }

    return (
        <div>
            <div className="container   login_container">
                <div className="row  justify-content-center ">
                    <h1 className="text-warning my-3"><i className="fa fa-lock " aria-hidden="true"></i> {isLogin ? 'Login' : 'Register'} </h1>
                    <div className="col-12 col-lg-4 ">



                        <form onSubmit={handleRegistration}>
                            <div class="input-group mb-3">
                                <button class="btn btn-outline-secondary" type="button" id="button-addon1">Email</button>
                                <input onBlur={handleEmailChange} type="text" class="form-control" required placeholder="" id="email_id" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                            </div>


                            <div class="input-group mb-3">
                                <button class="btn btn-outline-secondary" type="button" id="button-addon1">Password</button>
                                <input onBlur={handlePasswordChange} type="password" id="password_id" required class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                            </div>


                            <div className="checkbox">
                                <label>
                                    <input onChange={toggleLogin} type="checkbox" value="" />   Already registered ?
                                </label>
                            </div> <br />
                            <button type="submit" className="btn btn-success mb-2">{isLogin ? 'Login' : 'Register'}</button> <br />
                            <div>------------or------------</div>

                            <p className="text-danger">{error}</p>
                        </form>


                        <button onClick={handleGoogleSignIn} type="submit" className="btn btn-info m-3 text-white">Login with Google </button>
                        <button onClick={handleGithubSignIn} type="submit" className="btn btn-warning  text-white">Login with Github </button><br />
                        <br /> <center><div style={{ border: '1px solid black', height: '1px', width: '300px' }}></div></center><br />


                    </div>

                </div>

            </div>

        </div >
    );
};

export default Login;