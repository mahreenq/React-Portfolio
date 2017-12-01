import React from 'react';
import './styles.css';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import { Link } from 'react-router-dom';

import  FontAwesome from 'react-fontawesome';




const Project = ({project}) => {
  const flexGroup = project.id % 2 === 0 ? "row" : "rowReverse";  

      return (

        <div className = "singleProject">
          <Card className = "projectCard" style={style.projectCard}>
         
           
              <CardTitle title={project.title} titleStyle={style.title} subtitleStyle={style.tools} subtitle={project.tools.map((tool,i) => { return  `${tool}${ project.tools.length - 1 === i ? '' : ',   '}` } ) } />
                
              
            <div className={flexGroup}>

                <div className="picturePorfolioDiv">
                  {project.pictures.length > 0 ? 
                    <div className="portfolioImages">
                      {project.pictures.map((picture)=>{
                            const background = {
                              backgroundImage: 'url('+ picture + ')',
                          }
                        return  <a target="_blank" href={picture} key={picture}><div  className = "singlePortfolioImage"  style={background}>  </div></a>;
                      })}
                    </div>  : null }
                </div>


                <div className="descPortfolioDiv">
                    <CardText style={style.description}>
                      <span className="greyFont">ASK:</span> {project.ask}
                      </CardText>
                      <CardText style={style.description}>
                        <span className="greyFont">FINISHED PRODUCT:</span> {project.result}
                      </CardText>

                      <CardActions style={style.buttons}>
                        {project.git_url ? <a target="_blank" style={style.buttons} href={project.git_url}><FontAwesome name=' fa-github' /> </a>
                          : null}
                        {project.url  ? <a target="_blank" style={style.buttons} href={project.url}> <FontAwesome name=' fa-external-link' /> </a> : null }
                      </CardActions>
                  </div>

             </div>     


          </Card>

  </div>
      );
      
   };
  
  
  export default Project;


  const style = {
    projectCard: {
      borderRadius: 50, 
      padding : 20, 
      backgroundColor: 'rgba(33, 2, 26, 0.781)', 
      border: 'none',
      margin: 5,
      fontFamily: 'Raleway',
    },
    title:{
      fontSize: '1.8em', 
      fontWeight: 500,
      color:'#9E9E9E',
      borderBottom: 2,
      
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
      color:'#1DE9B6',
      fontSize: '1.5em',
      textDecoration: 'none',
      padding: 15,
    }
  };

  // return  <a key={picture} className = "singlePortfolioLink" target="_blank" href={picture}><div className = "singlePortfolioImage"  style={background}> </div> </a>;

//   <CardActions style={style.buttons}>
//   {project.git_url ? <a style={style.buttons} href={project.git_url}><FontAwesome name=' fa-github' /> </a>
//     : null}
//   {project.url  ? <a style={style.buttons} href={project.url}> <FontAwesome name=' fa-external-link' /> </a> : null }
// </CardActions>