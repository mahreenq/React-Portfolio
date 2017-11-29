import React, { Component } from 'react';
import './styles.css';

import {Card,  CardMedia, CardTitle, CardText} from 'material-ui/Card';


const styles = {
  aboutCard: {
    width: '80%', 
    borderRadius: 100, 
    padding : 20, 
    backgroundColor: '#A7BFBC', 
    border: 'none'
  },
  aboutText: {
    padding: 15, 
    textAlign: 'center', 
    color: '#542D48', 
    fontSize: '1em' , 
    fontFamily: 'Raleway'
  },
  aboutToolbox: {
    padding: 15, 
    textAlign: 'center', 
    color: '#542D48', 
    fontSize: '1em' , 
    fontFamily: 'Raleway', 
    display:'flex', 
    justifyContent: 'space-around'
  },

};


class About extends Component {
    componentDidMount() {
      window.scrollTo(0, 0);
    }
 

  
    render() {
      return (
        <div className="aboutPage">
     
          <Card className="aboutCard"style={styles.aboutCard}>
              <CardText style = {styles.aboutText}>
              Hey There! Thanks for dropping by! I am a motivated web developer seeking opportunities to build innovative products. 
              </CardText>
              <CardText style = {styles.aboutText}>
              In order to deliver wholesome services, I have combined my business relations expertise with coding skills to understand client and stakeholder needs. 
              </CardText>
              <CardText style = {styles.aboutText}>
              Through various ventures, I discovered a passion for coding, building creative designs and watching them come to life.
              </CardText>


              <CardText style = {{padding: 15, textAlign: 'center', color: '#542D48', fontSize: '1.2em' , fontFamily: 'Raleway'}}>
              Current Toolbox 
              </CardText>


              <CardText style = {styles.aboutToolbox}>
                    <div className="singleToolbox"><i className="devicon-html5-plain toolboxIcon"></i> HTML5</div>
                    <div className="singleToolbox"><i className="devicon-css3-plain toolboxIcon"></i> CSS3</div>
                    <div className="singleToolbox"><i className="devicon-javascript-plain toolboxIcon"></i>Javascript </div>
                    <div className="singleToolbox"><i className="devicon-jquery-plain toolboxIcon"></i> JQuery</div>
                    <div className="singleToolbox"> <i className="devicon-sass-original toolboxIcon"></i>SASS</div>
              </CardText>


              <CardText style = {styles.aboutToolbox}>
                <div class="singleToolbox"> <i class="devicon-php-plain toolboxIcon"></i>PHP</div>
                <div class="singleToolbox"> <i class="devicon-wordpress-plain toolboxIcon"></i> Wordpress</div>
                <div class="singleToolbox"> <i class="devicon-github-plain  toolboxIcon"></i>Github</div>
                <div class="singleToolbox"> <i class="devicon-gulp-plain toolboxIcon"></i>Gulp</div>
                <div class="singleToolbox"> <i class="devicon-react-original toolboxIcon"></i>React</div>
              </CardText>

              <CardText style = {styles.aboutToolbox}>
                <div class="singleToolbox"> <i class="devicon-nodejs-plain toolboxIcon"></i>Node.js</div>
                <div class="singleToolbox"> <i class="devicon-express-original toolboxIcon"></i>Express</div>
                <div class="singleToolbox"> <i class="devicon-postgresql-plain toolboxIcon"></i>PostgreSQL</div>
                <div class="singleToolbox"> <i class="devicon-mongodb-plain toolboxIcon"></i>MongoDB</div>  
                <div class="singleToolbox"> <i class="devicon-meteor-plain toolboxIcon"></i>Meteor</div>         
              </CardText>
          </Card>

          </div>

      );
    }
  }
  

  
  export default About;