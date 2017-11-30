import React, { Component } from 'react';
import './styles.css';
import Project from '../Project';
var Masonry = require('react-masonry-component');


const ProjectList = ({projectsData}) => {
  
    return (
      
     <Masonry className="projectCardList">
           
           {projectsData.map((project)=>{
                 return <Project key={project.id} project={project}  />
               })}
                
     </Masonry>
     
    
   )
   };
  
  export default ProjectList;
