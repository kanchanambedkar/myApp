import React from 'react';

const Login = () => {
    return(
        <>
        <div className="login-form d-flex align-items-center justify-content-center">
        <form className="mt-5">
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="passowrd" />
            </div>
            
            <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </form>

        </div>
        </>
    )

}

export default Login;