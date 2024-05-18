import React from 'react';
import Section from "../Section";

const Contacts: React.FC = () => {
  return (
    <Section className="my-8 bg-gray text-goldenGlow p-4 rounded font-mono" number={"05"}>
      <h2 className="text-3xl text-blue">Contacts</h2>
      <p>Contact information...</p>
    </Section>
  );
}

export default Contacts;
