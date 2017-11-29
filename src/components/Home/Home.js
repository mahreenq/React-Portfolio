import React, { Component } from 'react';
import './styles.css';



class Home extends Component {
    componentDidMount() {
      window.scrollTo(0, 0);
    }
  

  
    render() {
      return (
        <div className="homePage">

              <h1 className="nameHomePage">Mahreen Qureshi</h1>
              <h4 className="wdHomePage"> Web Developer </h4>

        </div>
      );
    }
  }
  

  
  export default Home;