import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  //mapping through "links array" and creating a "link-react element" with each item in "links array"
  const displayLinks = links.map((item) =>{
    return <a href={"#" + item} key={item}>{item}</a>
  })

  return <nav> {displayLinks}</nav>;
}

export default NavBar;
