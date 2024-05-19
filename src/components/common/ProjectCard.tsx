import {HighLightedText} from "../../types";
import HighlightText from "./HighlightText";
import { FaGithubAlt } from "react-icons/fa6";

interface ProjectCardProps {
    title: HighLightedText;
    description: string;
    link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({title, description, link}) => {
    return (
        <div className="flex flex-col w-3/4 sm:w-2/4  gap-5">
            <div className={"flex items-center w-full justify-between"}>
                <HighlightText highlightedText={title} className={"text-4xl"}/>
                <a href={link}>
                    <FaGithubAlt className="text-goldenGlow text-3xl cursor-pointer" />
                </a>
            </div>

            <p>{description}</p>

        </div>
    );
}

export default ProjectCard;