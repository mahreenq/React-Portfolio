import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import NotFound from './components/NotFound';





class App extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <HashRouter>
        <MuiThemeProvider >
            <Layout>
              <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/showcase" component={Projects} />
                <Route exact path="/resume" component={Resume} />
                <Route component={NotFound} />
              </Switch>
            </Layout>
            </MuiThemeProvider>
      </HashRouter>
    );
  }
}

export default App;
