import React, { Component } from 'react';
import './styles.css';



class Footer extends Component {

    render() {
      return (
        <div className="footer">
              <div className="contactFooter">
               <a target="_blank" href="https://github.com/mahreenq"> <p> <i className="fa fa-github" aria-hidden="true"></i> </p> </a>
               <a target="_blank" href="https://www.linkedin.com/in/mahreen-qureshi/"> <p> <i className="fa fa-linkedin" aria-hidden="true"></i> </p> </a>
               <a target="_blank" href="mailto:mahreenq@hotmail.com"><p><i className="fa fa-envelope" aria-hidden="true"></i></p></a>
              </div>
              <p className="">© 2017 mahreenq.com</p>

        </div>
      );
    }
  }
  

  
  export default Footer;