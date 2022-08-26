
import './App.css';
import Nav from './component/Header/Nav';
import  { useState } from 'react';
import React  from 'react';
import Todolist from './component/Todolist/Todolist';
import CovidTable from './component/Table/CovidTable';
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";

function App() {
 
  return (
    <BrowserRouter>
    <div className="container">
      <Nav />
      <h1>Thay đổi thông tin nè nhập vào nè:</h1> 
      {/* <Body /> */}
      <Routes>
      <Route path='/' element={<CovidTable />} />
      <Route path='/todolist' element={<Todolist />} />
      {/* <Route path='/newtask' element={<Home />} />
      <Route path='/doingtask' element={<Home />} />
      <Route path='/donetask' element={<Home />} /> */}
      
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
