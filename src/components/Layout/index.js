import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';

import { withRouter } from 'react-router-dom';


class Layout extends Component {
  render() {
    console.log(this.props.location.pathname);
    const path = this.props.location.pathname;
    return (
      <div>
     <Header path ={path} />
        {this.props.children}
         <Footer />
      </div>
    );
  }
}

export default withRouter(Layout);

// {this.props.location.pathname == '/' ? null : <Header />}
// {this.props.children}
// {this.props.location.pathname == '/' ? null : <Footer />}