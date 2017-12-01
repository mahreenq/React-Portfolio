import React, { Component } from 'react';
import './styles.css';
import CircularProgress from 'material-ui/CircularProgress';


class Loading extends Component {
    componentDidMount() {
      window.scrollTo(0, 0);
    }
  
  
    render() {
      return (
        <div className="">
          <div className="">
          <CircularProgress size={80} thickness={5} />
          </div>
          <div className="">
         
          </div>
        </div>
      );
    }
  }
  

  
  export default Loading;