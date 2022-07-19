import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  //mapping through "projects array" and passing it's props to "ProjectItem Component" to display the items of "projects array"
  const projectWork = projects.map((item) => {
    return (
      <ProjectItem key={item.id} name={item.name} about={item.about} technologies={item.technologies}/>
    )
  })

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {/* render ProjectItem components here */}
        {projectWork}
      </div>
    </div>
  );
}

export default ProjectList;
