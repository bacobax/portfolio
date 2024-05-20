import React from 'react';
import Section from "../common/Section";
import Arrow from "../common/Arrow";
import {briefSelfDescription} from "../../constants";
// @ts-ignore
import profileImage from "../../assets/profile_image.png"
import {Image} from "@nextui-org/image";
import useTypingEffect from "../../hooks/useTypingEffect";
import Cursor from "../common/Cursor";

const Cover: React.FC = () => {
    const displayedText = useTypingEffect("Francesco Bassignana", 50)
    return (
        <Section className="flex flex-col justify-end text-white items-end" number={"01"}>

            <div className={"flex flex-col md:flex-row w-full justify-between"}>
                    <img alt={"cover image"} src={profileImage}  className={"self-center md:w-1/5 max-w-[350px]"}/>

                <div className={"flex flex-col md:flex-row self-end md:w-4/5"}>
                    <div className={"w-2/5"}>
                        <Arrow color={"#EDC789"} className={"w-full"} strokeWidth={1}/>
                    </div>
                    <div className={"flex flex-col w-3/5"}>
                        <h1 className={"text-6xl font-bol"}>{displayedText} <Cursor /></h1>
                        <p>{briefSelfDescription}</p>
                    </div>
                </div>
            </div>


        </Section>
    );
}

export default Cover;
