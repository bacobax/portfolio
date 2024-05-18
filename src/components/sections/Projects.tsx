import React from 'react';
import Section from "../Section";

const Projects: React.FC = () => {
  return (
    <Section className="my-8 bg-gray text-goldenGlow p-4 rounded " number={"04"}>
      <h2 className="text-3xl text-blue">Projects</h2>
      <p>Details of your projects...</p>
    </Section>
  );
}

export default Projects;
