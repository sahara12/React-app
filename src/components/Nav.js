import React, {Component}  from 'react';
import {Link , NavLink} from 'react-router-dom';

const Nav = () => {
    
    return(
        
        
    
    <div className="navbar">
        <div className="container">
       <a href="#" className="logo">Logo</a>
        
        <ul>
        
        <NavLink activeClassName="selected" exact to="/">Home </NavLink>
        <NavLink activeClassName="selected" to="/about">About </NavLink>
             <NavLink activeClassName="selected" to="blog">Blog </NavLink>
        
        
        </ul>
        
        </div>
        </div>
    
    
    )
    
    
}


export default Nav; 