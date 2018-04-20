import React, { Component } from "react";
import Projects from "./Projects";
import Loading from "../../components/Loading";
import { connect } from "react-redux";
import { fetchProjects } from "../../redux/modules/projects";

class ProjectsContainer extends Component {
  componentWillMount() {
    this.props.dispatch(fetchProjects());
  }
  render() {
    const loading = this.props.isLoading;

    return this.props.projectsData.length > 0 ? (
      <Projects projectsData={this.props.projectsData} isLoading={loading} />
    ) : (
      <Loading />
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.projects.isLoading,
  projectsData: state.projects.projectsData
  //selected : state.selected.selectedStack
});

export default connect(mapStateToProps)(ProjectsContainer);
