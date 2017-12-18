import React, { Component } from 'react';
import './styles.css';

import {Card,  CardText, CardMedia} from 'material-ui/Card';


const styles = {
  aboutCard: {
    padding : 20, 
    backgroundColor: 'rgba(33, 2, 26, 0.781)', 
    display: 'flex',
  },
  aboutText: {
    padding: 15, 
    textAlign: 'center', 
    color: '#1DE9B6', 
    fontSize: '1.2em' , 
    fontFamily: 'Raleway'
  },
  aboutToolbox: {
    padding: 15, 
    textAlign: 'center', 
    color: '#BDBDBD', 
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
         <div className="banner">
         <h1> ABOUT </h1>
         </div>
       
       
     
          <Card className="aboutCard" style={styles.aboutCard}>
              <div className="aboutPic">
          
                  <div className="aboutPicture">  </div>
                  <div className="cardBio">
                  <CardText style = {styles.aboutText}>
                  Hey! I am a web developer enthusiastic about building innovative products. 
                  </CardText>
                  <CardText className="aboutText" style = {styles.aboutText}>
                  In order to deliver wholesome services, I have combined my business relations expertise with coding skills to understand client and stakeholder needs. 
                  </CardText>
                  <CardText className="aboutText" style = {styles.aboutText}>
                  Through various ventures, I discovered a passion for coding, especially in React, building creative designs and watching them come to life.
                  </CardText>
                  </div>
              </div>
        

              <CardText style = {{padding: 15, textAlign: 'center', color: '#EEEEEE', fontSize: '1.2em' , fontFamily: 'Raleway'}}>
              Current Toolbox 
              </CardText>


              <CardText className="aboutToolbox" style = {styles.aboutToolbox}>
                    <div className="singleToolbox"><i className="devicon-html5-plain toolboxIcon"></i> HTML5</div>
                    <div className="singleToolbox"><i className="devicon-css3-plain toolboxIcon"></i> CSS3</div>
                    <div className="singleToolbox"><i className="devicon-javascript-plain toolboxIcon"></i>Javascript </div>
                    <div className="singleToolbox"><i className="devicon-jquery-plain toolboxIcon"></i> JQuery</div>
                    <div className="singleToolbox"> <i className="devicon-sass-original toolboxIcon"></i>SASS</div>
              </CardText>


              <CardText className="aboutToolbox" style = {styles.aboutToolbox}>
                <div className="singleToolbox"> <i className="devicon-php-plain toolboxIcon"></i>PHP</div>
                <div className="singleToolbox"> <i className="devicon-wordpress-plain toolboxIcon"></i> Wordpress</div>
                <div className="singleToolbox"> <i className="devicon-github-plain  toolboxIcon"></i>Github</div>
                <div className="singleToolbox"> <i className="devicon-gulp-plain toolboxIcon"></i>Gulp</div>
                <div className="singleToolbox"> <i className="devicon-react-original toolboxIcon"></i>React</div>
              </CardText>

              <CardText className="aboutToolbox" style = {styles.aboutToolbox}>
                <div className="singleToolbox"> <i className="devicon-nodejs-plain toolboxIcon"></i>Node.js</div>
                <div className="singleToolbox"> <i className="devicon-express-original toolboxIcon"></i>Express</div>
                <div className="singleToolbox"> <i className="devicon-postgresql-plain toolboxIcon"></i>PostgreSQL</div>
                <div className="singleToolbox"> <i className="devicon-mongodb-plain toolboxIcon"></i>MongoDB</div>  
                <div className="singleToolbox"> <i className="devicon-meteor-plain toolboxIcon"></i>Meteor</div>         
              </CardText>
              
          </Card>
     
         
          </div>

      );
    }
  }
  

  
  export default About;