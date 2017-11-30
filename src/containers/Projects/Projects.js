import React, { Component } from 'react';

import NotFound from '../../components/NotFound'
import styles from './styles.css';
import ProjectList from '../../components/ProjectList';


const Projects = ({projectsData, isLoading}) => {


  return ( 
    projectsData.length > 0 ? 
      <ProjectList  projectsData={projectsData} isLoading = {isLoading}  /> : <NotFound/>
  );
    
 };

export default Projects;