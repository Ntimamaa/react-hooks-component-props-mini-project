import React from "react";

const About = ({ logoSrc, about }) => {
  return (
    <aside>
      <img src={logoSrc || "https://via.placeholder.com/215"} alt={"blog logo"} />
      <p>{about}</p>
    </aside>
  );
};

export default About;

