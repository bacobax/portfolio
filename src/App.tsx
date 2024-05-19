import React, {useEffect} from 'react';
import AboutMe from './components/sections/AboutMe';
import Projects from './components/sections/Projects';
import Contacts from './components/sections/Contacts';
import Cover from "./components/sections/Cover";
import ExpertiseAreas from "./components/sections/ExpertiseAreas";
import emailjs from "@emailjs/browser";

const App: React.FC = () => {
    useEffect(() => emailjs.init("RQWGnNBKc81EVPDND"), []);
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
