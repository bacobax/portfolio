import React from 'react';
import Section from "../common/Section";
import Arrow from "../common/Arrow";
import ExpertiseCard from "../common/ExpertiseCard";
import { RiRobot2Fill } from "react-icons/ri";
import SegmentedGallery from "../common/SegmentedGallery";
import {expertiseAreas} from "../../constants";
import useWindowSize from "../../hooks/useWindowSize";



const ExpertiseAreas: React.FC = () => {
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
        <Section className="flex flex-col text-white items-center justify-center gap-20" number={"02"}>
            <h1 className={"text-6xl font-bold"}>Expertise Areas</h1>

            <SegmentedGallery items={expertiseAreas} maxItems={numItems} className="flex w-full justify-center gap-16">
                {
                    (e) => (
                        <ExpertiseCard title={e.title} description={e.description} Icon={e.icon}/>
                    )
                }
            </SegmentedGallery>

        </Section>
    );
}

export default ExpertiseAreas;
