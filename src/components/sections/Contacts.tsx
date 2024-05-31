import React from 'react';
import Section from "../common/Section";
import Arrow from "../common/Arrow";
import SegmentedGallery from "../common/SegmentedGallery";
import ProjectCard from "../common/ProjectCard";
import {Input, Textarea} from "@nextui-org/input";
import Items from "../common/Items";
import {contacts} from "../../constants";
import SocialMedia from "../common/SocialMedia";
import EmailForm from "../common/EmailForm";
import Footer from "../common/Footer";

const Contacts: React.FC = () => {
  return (
      <Section className="flex flex-col text-white items-center justify-center gap-20" number={"05"}>
          <div className={"flex flex-col sm:flex-row mt-20 sm:mt-0"}>
              <Arrow color={"white"} className={"w-full"} strokeWidth={1}/>
              <h1 className={"text-6xl font-bold"}>Contacts</h1>
          </div>
          <div className={"flex items-center w-full flex-col sm:flex-row gap-20"}>
            <Items items={contacts} className={"w-full sm:w-1/2 flex flex-col sm:flex-col justify-between items-start gap-[30px]"}>
                {(c, idx) => (
                    <div className={"flex flex-col items-start w-1/3"}>
                        <h3 className={"text-3xl font-semibold text-goldenGlow "}>{c.title}</h3>
                        <p>{c.contact}</p>
                    </div>
                )}
            </Items>

             <EmailForm className={"w-full sm:w-1/2"}/>
          </div>
          <SocialMedia />
          <Footer />
      </Section>
  );
}


export default Contacts;
