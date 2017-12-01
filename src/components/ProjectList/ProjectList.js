import React from 'react';
import './styles.css';
import Project from '../Project';
var Masonry = require('react-masonry-component');


const ProjectList = ({projectsData}) => {
  
    return (
      
     <div className="projectCardList">
           
           {projectsData.map((project)=>{
                 return <Project key={project.id} project={project}  />
               })}
                
     </div >
     
    
   )
   };
  
  export default ProjectList;
