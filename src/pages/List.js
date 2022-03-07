import React, {useState} from 'react';
// import { useParams , useLocation} from 'react-router-dom';
import Table from './Table';
import axios from 'axios';

const List = () => {
    const [list, setList] = useState();
    // console.log('list--', list);
    
    const fetchApi = (e) => {
        e.preventDefault();
        // console.log('button-clicked');
        axios('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            console.log(res.data);
            setList(res.data);
        })
    }
    return(
        
        <>
      
       <button onClick={fetchApi}>click here</button>
     
        </>
    )
}









export default List;