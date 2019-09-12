import React, { Component } from "react";
import "./styles.css";
import Project from "../Project";
import * as selectedAction from "../../redux/modules/selected";
import RaisedButton from "material-ui/RaisedButton";
import { connect } from "react-redux";
import projectData from "./project-data";

class ProjectList extends Component {
  render() {
    // projectData.map(project => {
    //   console.log(project.title);
    // });

    //const projectsData = this.props.projectsData;
    const selectedStack = this.props.selectedStackName;
    const btn = {
      margin: 5
    };

    return (
      <div>
        <div className="projectsBanner">
          <h1> SHOWCASE </h1>
        </div>
        <div className="projectCardList">
          <div className="buttonGroup">
            <RaisedButton
              label="React &amp; React Native"
              onClick={() => this.props.getSelectedStack("react")}
              style={btn}
              backgroundColor={selectedStack === "react" ? "#1DE9B6" : "white"}
            />
            <RaisedButton
              label="Wordpress"
              onClick={() => this.props.getSelectedStack("wordpress")}
              style={btn}
              backgroundColor={
                selectedStack === "wordpress" ? "#1DE9B6" : "white"
              }
            />
            <RaisedButton
              label="Misc"
              onClick={() => this.props.getSelectedStack("other")}
              style={btn}
              backgroundColor={selectedStack === "other" ? "#1DE9B6" : "white"}
            />
            <RaisedButton
              label="View all"
              onClick={() => this.props.getSelectedStack("")}
              style={btn}
              backgroundColor={selectedStack === "" ? "#1DE9B6" : "white"}
            />
          </div>

          {projectData.map(project => {
            return selectedStack === "" ? (
              <Project key={project.id} project={project} />
            ) : project.stack === selectedStack ? (
              <Project key={project.id} project={project} />
            ) : null;
          }).reverse()}

          {/* {projectsData.map(project => {
            return selectedStack === "" ? (
              <Project key={project.id} project={project} />
            ) : project.stack === selectedStack ? (
              <Project key={project.id} project={project} />
            ) : null;
          })} */}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { selectedStackName: state.selectedStackName };
};
export default connect(mapStateToProps, selectedAction)(ProjectList);
