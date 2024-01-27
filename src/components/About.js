import React from "react";
import user from "../data/user";
import Links from "./Links"

const {links : { github , linkedin }} = user


function About(props) {
    function renderP() {
    return props.bio ? <p>{props.bio}</p> : null;
  }
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{renderP}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={github} linkedin={linkedin} />
    </div>
  );
}



export default About;
