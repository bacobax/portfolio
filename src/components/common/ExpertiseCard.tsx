import {HighLightedText} from "../../types";
import HighlightText from "./HighlightText";
import {IconType} from "react-icons";

interface ExpertiseCardProps {
    Icon: IconType;
    title: HighLightedText;
    description: string
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({Icon, title, description}) => {
    return (
        <div className={"flex flex-col items-center rounded-lg md:w-1/4 sm:w-2/4 p-[30px] shadow-2xl gap-5"}>
            <Icon className={"text-4xl text-goldenGlow"} />
            <HighlightText className={"text-3xl font-semibold"} highlightedText={title} />
            <p>{description}</p>

        </div>
    );
}

export default ExpertiseCard;