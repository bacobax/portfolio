import React from 'react';
import Section from "../common/Section";
import Arrow from "../common/Arrow";
import SkillSheet from "../common/SkillSheet";
import {longDescription, skills} from "../../constants";
import ReadMore from "../common/ReadMore";

const AboutMe: React.FC = () => {
  return (
    <Section className="flex flex-col text-white items-center justify-center gap-20" number={"03"}>
        <div className={"flex flex-col md:flex-row mt-20 sm:mt-0"}>
            <Arrow color={"white"} className={"opacity-0 sm:opacity-100 sm:w-1/2 md:w-1/2"} strokeWidth={1}/>
            <h1 className={"text-6xl font-bold"}>About me</h1>
        </div>
        <div className={"flex justify-center items-center w-full gap-10"}>
            <ReadMore className={"h-full w-4/5"} text={longDescription} maxLength={500} />
        </div>
        <SkillSheet skills={skills} />

    </Section>
  );

}

export default AboutMe;
