import React from 'react';
import Section from "../Section";
import Arrow from "../Arrow";
import SkillSheet from "../SkillSheet";
import {skills} from "../../constants";
import ProjectCard from "../ProjectCard";
import Items from "../Items";
import SegmentedGallery from "../SegmentedGallery";

const projects = [
    {
        title: {
            text: "Project 1",
            keyWord: "1"
        },
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Nulla porttitor accumsan tincidunt. Donec so",
        link: "https://www.google.com"
    },
    {
        title: {
            text: "Project 2",
            keyWord: "2"
        },
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Nulla porttitor accumsan tincidunt. Donec so",
        link: "https://www.google.com"
    },
    {
        title: {
            text: "Project 3",
            keyWord: "3"
        },
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Nulla porttitor accumsan tincidunt. Donec so",
        link: "https://www.google.com"
    },
    {
        title: {
            text: "Project 4",
            keyWord: "4"
        },
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Nulla porttitor accumsan tincidunt. Donec so",
        link: "https://www.google.com"
    },
    {
        title: {
            text: "Project 5",
            keyWord: "5"
        },
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Nulla porttitor accumsan tincidunt. Donec so",
        link: "https://www.google.com"
    },
    {
        title: {
            text: "Project 6",
            keyWord: "6"
        },
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Nulla porttitor accumsan tincidunt. Donec so",
        link: "https://www.google.com"
    },
    {
        title: {
            text: "Project 7",
            keyWord: "7"
        },
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Nulla porttitor accumsan tincidunt. Donec so",
        link: "https://www.google.com"
    },
    {
        title: {
            text: "Project 8",
            keyWord: "8"
        },
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Nulla porttitor accumsan tincidunt. Donec so",
        link: "https://www.google.com",
    },

]

const Projects: React.FC = () => {
  return (
      <Section className="flex flex-col text-white items-center justify-center gap-20" number={"04"}>
          <div className={"flex gap-10"}>
              <h1 className={"text-6xl font-bold"}>Projects</h1>
              <Arrow color={"#EDC789"} className={"w-[400px]"} strokeWidth={1}/>
          </div>
          <SegmentedGallery items={projects} className={"flex flex-wrap justify-center items-center w-full gap-10"} maxItems={4}>
              {(project, idx) => (
                    <ProjectCard key={idx} title={project.title} description={project.description} link={project.link}/>
              )}
          </SegmentedGallery>


      </Section>
  );
}

export default Projects;
