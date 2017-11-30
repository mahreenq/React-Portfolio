import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Projects from './Projects';

// import Loader from '../../components/Loader';
import NotFound from '../../components/NotFound';
import {connect} from 'react-redux';
import {fetchProjects} from '../../redux/modules/projects';



class ProjectsContainer extends Component {

  componentDidMount(){
    this.props.dispatch(fetchProjects());
}
      render() {
       const loading = this.props.isLoading;
      
          return ( 
             this.props.projectsData.length > 0 ?  <Projects  projectsData={this.props.projectsData} isLoading = {loading} />: <NotFound/>  
         
          );
       }
  }



const mapStateToProps = state => ({
  isLoading: state.projects.isLoading,
  projectsData: state.projects.projectsData
})

export default connect(mapStateToProps )(ProjectsContainer);