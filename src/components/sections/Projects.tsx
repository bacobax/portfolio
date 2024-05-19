import React from 'react';
import Section from "../common/Section";
import Arrow from "../common/Arrow";
import SkillSheet from "../common/SkillSheet";
import {projects, skills} from "../../constants";
import ProjectCard from "../common/ProjectCard";
import Items from "../common/Items";
import SegmentedGallery from "../common/SegmentedGallery";
import useWindowSize from "../../hooks/useWindowSize";


const Projects: React.FC = () => {
    const {width, height} = useWindowSize();

    const isDesktop = width > 800;
    const isTablet = width > 600 && width <= 800;
    const isMobile = width <= 600;
    let numItems;
    if(isDesktop){
        numItems = 3;
    } else if(isTablet){
        numItems = 2;
    } else {
        numItems = 1;
    }

    return (
      <Section className="flex flex-col text-white items-center justify-center gap-20" number={"04"}>
          <div className={"flex gap-10 flex-col sm:flex-row mt-20 md:mt-0"}>
              <h1 className={"text-6xl font-bold"}>Projects</h1>
              <Arrow color={"#EDC789"} className={"w-full"} strokeWidth={1}/>
          </div>
          <SegmentedGallery items={projects} className={"flex flex-wrap justify-center items-start w-full gap-10"} maxItems={numItems}>
              {(project, idx) => (
                    <ProjectCard key={idx} title={project.title} description={project.description} link={project.link}/>
              )}
          </SegmentedGallery>


      </Section>
  );
}

export default Projects;
