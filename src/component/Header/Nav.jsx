import React from 'react';
import './Nav.css';
import { Link,NavLink } from "react-router-dom";
function Nav(props) {
    return (
        <div className="topnav">
        <NavLink to="/" activeClassName="active" exact>Home</NavLink>
        <NavLink to="/todolist" activeClassName="active">Todolist</NavLink>
        <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        <NavLink to="/about" activeClassName="active">About</NavLink>
      </div>
    );
}

export default Nav;