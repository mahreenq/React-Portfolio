import React, { Component } from 'react';
import './styles.css';



class Projects extends Component {
    componentDidMount() {
      window.scrollTo(0, 0);
    }
  

  
    render() {
      return (
        <div className="home_page flex justify-center">
          <div className="make_clickable">
            <div className="mars text-align">
              <h1 className="yellow name">Projects</h1>
            </div>
          </div>
          <div className="rocket">
         
          </div>
        </div>
      );
    }
  }
  

  
  export default Projects;