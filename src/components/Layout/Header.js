import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom'



class Header extends Component {

    render() {
      return (
        <div className="header">
          <div className= "nav">
            <Link to='/' >HOME</Link>
            <Link to='/about' >ABOUT</Link>
            <Link to='/showcase' >SHOWCASE</Link>
          </div>
        </div>
      );
    }
  }
  

  
  export default Header;

  // <Link to='/resume' >RESU</Link>