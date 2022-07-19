import React from "react";

function ProjectItem({ name, about, technologies }) {
  //console.log(technologies)

   //mapping through "technlogies array" and creating a "span-react element" with each item in "links array"
   const techUsed = technologies.map((item) => {
    return <span key={item}>{item}</span>
  })

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {techUsed}
      </div>
    </div>
  );
}

export default ProjectItem;
