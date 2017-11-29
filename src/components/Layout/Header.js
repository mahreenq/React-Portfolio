import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom'



class Header extends Component {

    render() {
      return (
        <div className="header">
        <div className= "nav">
        <Link to='/home' >HOME</Link>
        <Link to='/about' >ABOUT</Link>
        <Link to='/showcase' >SHOWCASE</Link>
        <Link to='/resume' >RESU</Link>
        </div>

        </div>
      );
    }
  }
  

  
  export default Header;