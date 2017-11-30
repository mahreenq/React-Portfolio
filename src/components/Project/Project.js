import React, { Component } from 'react';
import './styles.css';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {BrowserRouter, Route, Switch, Link, Redirect, NavLink } from 'react-router-dom';
import IconButton from 'material-ui/IconButton';

import  FontAwesome from 'react-fontawesome';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';



const Project = ({project}) => {


    {project.pictures.map((picture)=>{
      console.log(picture)
    })}



      return (

        <div className = "singleProject">
          <Card className = "projectCard" style={style.projectCard}>
         
           
              <CardTitle title={project.title} titleStyle={style.title} subtitleStyle={style.tools} subtitle={project.tools.map((tool,i) => { return  `${tool}${ project.tools.length - 1 === i ? '' : ', '}` } ) } />

              {project.pictures.length > 0 ? 

                <div className="portfolioImages">
                  {project.pictures.map((picture)=>{
                        const background = {
                          backgroundImage: 'url('+ picture + ')',
                      }
                    return  <a className = "singlePortfolioLink" target="_blank" href={picture}><div className = "singlePortfolioImage"  style={background}> </div> </a>;
                  })}
                </div>
          
          : null }




              <CardText style={style.description}>
              <span className="greyFont">ASK:</span> {project.ask}
              </CardText>
              <CardText style={style.description}>
                <span className="greyFont">FINISHED PRODUCT:</span> {project.result}
              </CardText>
              <CardActions style={style.buttons}>
                {project.git_url ? <a style={style.buttons} href={project.git_url}><FontAwesome name=' fa-github' /> </a>
                  : null}
                {project.url  ? <a style={style.buttons} href={project.url}> <FontAwesome name=' fa-external-link' /> </a> : null }
              </CardActions>
          </Card>

  </div>
      );
      
   };
  
  
  export default Project;


  const style = {
    projectCard: {
      borderRadius: 50, 
      padding : 20, 
      backgroundColor: '#21021A', 
      border: 'none',
      margin: 5,
      fontFamily: 'Raleway',
    },
    title:{
      fontSize: '1.8em', 
      fontWeight: 500,
      color:'#9E9E9E',
      
    },
    tools:{
      fontSize: '1.1em', 
      fontWeight: 500,
      color:'#1DE9B6',
    },
    description:{
      fontSize: '1.1em',
      lineHeight: 1.5,
      color:'#EEEEEE',
      
    },
    buttons:{
      display: 'flex',
      justifyContent: 'space-around',
      color:'#1DE9B6',
      fontSize: '1.5em',
      textDecoration: 'none',
    }
  };

