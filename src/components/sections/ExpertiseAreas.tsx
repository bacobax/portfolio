import React from 'react';
import Section from "../Section";
import Arrow from "../Arrow";
import ExpertiseCard from "../ExpertiseCard";
import { RiRobot2Fill } from "react-icons/ri";
import SegmentedGallery from "../SegmentedGallery";



const ExpertiseAreas: React.FC = () => {
    const cardsData = [
        {
            title: {
                text: "Software Engineering",
                keyWord: "Software"
            },
            description: "asdassad asdijuibdfa doiiaofd\n" +
                "adkhjfaudfbioadbf \n" +
                "daf aoufbudbfa\n" +
                "dafuaduoflnbadf",
            icon: <RiRobot2Fill className={"text-goldenGlow text-4xl"}/>

        },
        {
            title: {
                text: "Frontend Dev",
                keyWord: "Frontend"
            },
            description: "asdassad asdijuibdfa doiiaofd\n" +
                "adkhjfaudfbioadbf \n" +
                "daf aoufbudbfa\n" +
                "dafuaduoflnbadf",
            icon: <RiRobot2Fill className={"text-goldenGlow text-4xl"}/>

        },
        {
            title: {
                text: "Backend Dev",
                keyWord: "Backend"
            },
            description: "asdassad asdijuibdfa doiiaofd\n" +
                "adkhjfaudfbioadbf \n" +
                "daf aoufbudbfa\n" +
                "dafuaduoflnbadf",
            icon: <RiRobot2Fill className={"text-goldenGlow text-4xl"}/>

        },
        {
            title: {
                text: "Data Science",
                keyWord: "Data"
            },
            description: "asdassad asdijuibdfa doiiaofd\n" +
                "adkhjfaudfbioadbf \n" +
                "daf aoufbudbfa\n" +
                "dafuaduoflnbadf",
            icon: <RiRobot2Fill className={"text-goldenGlow text-4xl"}/>

        },
        {
            title: {
                text: "Machine Learning",
                keyWord: "Machine"
            },
            description: "asdassad asdijuibdfa doiiaofd\n" +
                "adkhjfaudfbioadbf \n" +
                "daf aoufbudbfa\n" +
                "dafuaduoflnbadf",
            icon: <RiRobot2Fill className={"text-goldenGlow text-4xl"}/>

        },
        {
            title: {
                text: "Artificial Intelligence",
                keyWord: "Artificial"
            },
            description: "asdassad asdijuibdfa doiiaofd\n" +
                "adkhjfaudfbioadbf \n" +
                "daf aoufbudbfa\n" +
                "dafuaduoflnbadf",
            icon: <RiRobot2Fill className={"text-goldenGlow text-4xl"}/>

        },
        {
            title: {
                text: "Cyber Security",
                keyWord: "Cyber"
            },
            description: "asdassad asdijuibdfa doiiaofd\n" +
                "adkhjfaudfbioadbf \n" +
                "daf aoufbudbfa\n" +
                "dafuaduoflnbadf",
            icon: <RiRobot2Fill className={"text-goldenGlow text-4xl"}/>

        },
        {
            title: {
                text: "Web Development",
                keyWord: "Web"
            },
            description: "asdassad asdijuibdfa doiiaofd\n" +
                "adkhjfaudfbioadbf \n" +
                "daf aoufbudbfa\n" +
                "dafuaduoflnbadf",
            icon: <RiRobot2Fill className={"text-goldenGlow text-4xl"}/>

        },
        {
            title: {
                text: "Mobile Development",
                keyWord: "Mobile"
            },
            description: "asdassad asdijuibdfa doiiaofd\n" +
                "adkhjfaudfbioadbf \n" +
                "daf aoufbudbfa\n" +
                "dafuaduoflnbadf",
            icon: <RiRobot2Fill className={"text-goldenGlow text-4xl"}/>

        },
    ]
    return (
        <Section className="flex flex-col text-white items-center justify-center gap-20" number={"02"}>
            <h1 className={"text-6xl font-bold"}>Expertise Areas</h1>

            <SegmentedGallery items={cardsData} maxItems={3}>
                {
                    (card) => (
                        <ExpertiseCard title={card.title} description={card.description} icon={card.icon}/>
                    )
                }
            </SegmentedGallery>

        </Section>
    );
}

export default ExpertiseAreas;
