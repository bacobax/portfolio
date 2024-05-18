import React from 'react';
import Section from "../Section";
import Arrow from "../Arrow";
import SegmentedGallery from "../SegmentedGallery";
import ProjectCard from "../ProjectCard";
import {Input, Textarea} from "@nextui-org/input";

const Contacts: React.FC = () => {
  return (
      <Section className="flex flex-col text-white items-center justify-center gap-20" number={"05"}>
          <div className={"flex"}>
              <Arrow color={"white"} className={"w-[400px]"} strokeWidth={1}/>
              <h1 className={"text-6xl font-bold"}>Contacts</h1>
          </div>
          <div className={"flex items-center w-full"}>

              <div className={"w-1/2 flex flex-col items-center gap-[30px]"}>
                  <div className={"flex flex-col items-start w-1/3"}>
                      <h3 className={"text-3xl font-semibold text-goldenGlow "}>Email</h3>
                      <p>email@pippo.com</p>
                  </div>
                  <div className={"flex flex-col items-start w-1/3"}>
                      <h3 className={"text-3xl font-semibold text-goldenGlow "}>Tel</h3>
                      <p>3453243</p>
                  </div>
                  <div className={"flex flex-col items-start w-1/3"}>
                      <h3 className={"text-3xl font-semibold text-goldenGlow"}>PIva</h3>
                      <p>0170 23123213123</p>
                  </div>

              </div>
              <form className={"dark flex flex-col gap-10 w-1/2 pr-20"}>
                  <label>Your email</label>
                  <Input label={"Your email"} />
                  <label>Your email body</label>
                  <Textarea label={"Your email body"} />
                  <button className={"bg-goldenGlow text-black w-1/4 py-2 rounded-md"} type={"submit"}>Send</button>
              </form>
          </div>

      </Section>
  );
}

export default Contacts;
