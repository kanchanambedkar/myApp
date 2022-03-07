import React from 'react';
import {useNavigate} from 'react-router-dom';  


const Routing = () => {
    const navigate = useNavigate();

 return(
    <div className='menus'>
    <ul className='list-inline'>
        <li className='list-inline-item'>
            <span className='table-btn' onClick={() => {navigate('/')}} >Table</span>
        </li>
        <li className='list-inline-item'>
            <span className='table-btn' onClick={() => {navigate('/counter')}} > Counter </span>
        </li>
        <li className='list-inline-item'>
            <span className='table-btn' onClick={() => {navigate('/list')}} >List</span>
        </li>
        <li className='list-inline-item'>
            <span className='table-btn' onClick={() => {navigate('/login')}}>Login</span>
        </li>
        <li className='list-inline-item'>
            <span className='table-btn' onClick={() => {navigate('/register')}}>Register</span>
        </li>
    </ul>
</div>
 )


}
export default Routing;