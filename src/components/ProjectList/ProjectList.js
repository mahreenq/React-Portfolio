import React from 'react';
import './styles.css';
import Project from '../Project';
var Masonry = require('react-masonry-component');


const ProjectList = ({projectsData}) => {
  
    return (
      
     <div className="">

     <div className="projectsBanner">
     <h1> SHOWCASE </h1>
     </div>
     <div className="projectCardList">

           
           {projectsData.map((project)=>{
                 return <Project key={project.id} project={project}  />
               })}
      </div>
                
     </div >
     
    
   )
   };
  
  export default ProjectList;
