import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Register = () => {
    const [first_name, setName]          = useState('');
    const [email, setEmail]              = useState('');
    const [password, setPassword]        = useState('');
    const [reponseItem, setReponseItem]  = useState('');


    const signup = async(e) => {
        e.preventDefault();
        const formItems = {first_name, email, password};
        console.log(formItems);

        // =========fetching api
        // const getRes = await axios('https://reqres.in/api/users', {
        //     method: 'post',
        //     body: JSON.stringify(formItems),
        //     headers: {
        //         "content-type": 'application/json'
        //     }
        // })
       const res = await fetch('https://reqres.in/api/users', {
            method: 'post',
            body: JSON.stringify(formItems),
            headers: {
                "content-type": 'application/json'
            }
        })
        const getRes = await res.json();
        console.log('getRes--', getRes);

        const response = [...reponseItem, getRes];
        setReponseItem(response);

        setName('');
        setEmail('');
        setPassword('');

        localStorage.setItem('storeResponse', JSON.stringify(response));
    }

    return(
        <div className="login-form register-form d-flex align-items-center justify-content-center">
        <form className="mt-5">
            <div className="mb-3">
                <label className="form-label">User Name</label>
                <input type="text" value={first_name} className="form-control" id="first_name"  onChange = {e => {setName(e.target.value)}}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email"  value={email} className="form-control" id="email" onChange = {e => {setEmail(e.target.value)}} />
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" value={password} className="form-control" id="passowrd" onChange = {e => {setPassword(e.target.value)}}/>
            </div>
            
            <button type="submit" onClick={signup} className="btn btn-primary mt-3">Submit</button>
        </form>

        </div>
    )

}

export default Register;



