import React from 'react';
import Section from "../Section";
import Arrow from "../Arrow";
import SkillSheet from "../SkillSheet";
import {skills} from "../../constants";

const AboutMe: React.FC = () => {
  return (
    <Section className="flex flex-col text-white items-center justify-center gap-20" number={"03"}>
        <div className={"flex"}>
            <Arrow color={"white"} className={"w-[400px]"} strokeWidth={1}/>
            <h1 className={"text-6xl font-bold"}>About me</h1>
        </div>
        <div className={"flex justify-center items-center w-full gap-10"}>
            <div className={"w-[250px] h-[250px] bg-black flex justify-center items-center"}>
                <h1>Image</h1>
            </div>
            <p className={"h-full max-w-[50%]"}>
                plicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut
                odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione
                voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem
                ipsum, quia dolor sit, amet, consectetur, adipisci velit,
                sed quia non numquam eius modi temcorporis sus
            </p>
        </div>
        <SkillSheet skills={skills} />

    </Section>
  );

}

export default AboutMe;
