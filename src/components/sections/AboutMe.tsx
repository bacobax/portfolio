import React from 'react';
import Section from "../Section";

const AboutMe: React.FC = () => {
  return (
    <Section className="my-8 bg-gray text-goldenGlow p-4 rounded font-mono" number={"03"}>
      <h2 className="text-3xl text-blue">About Me</h2>
      <p>Brief description about yourself...</p>
    </Section>
  );

}

export default AboutMe;
