import React from 'react';
import Routing from './Routing';
import Table from '../pages/Table';
import Counter from '../pages/Counter';
import List from '../pages/List';
import Login from '../pages/Login';
import Register from '../pages/Register';
import {BrowserRouter, Route, Routes} from 'react-router-dom';




const Router = () => {
    return(

        <div className=''>
        <BrowserRouter>
        <Routing />
        <Routes>
      <Route path="/" exact element={<Table/>} />
        <Route path="/counter" element={<Counter />} />
          <Route path="/list" element={<List />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/list/:id" element={<List />} /> */}
     
      </Routes>
  </BrowserRouter>
  </div>
    )
}


export default Router;