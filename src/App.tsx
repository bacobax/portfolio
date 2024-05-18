import React from 'react';
import AboutMe from './components/sections/AboutMe';
import Projects from './components/sections/Projects';
import Contacts from './components/sections/Contacts';
import Cover from "./components/sections/Cover";
import ExpertiseAreas from "./components/sections/ExpertiseAreas";

const App: React.FC = () => {
  return (
    <div className="font-sans bg-midnight text-gray">
        <Cover />
        <ExpertiseAreas />
        <AboutMe />
        <Projects />
        <Contacts />
    </div>
  );
}

export default App;
