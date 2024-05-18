import {HighLightedText} from "../types";
import HighlightText from "./HighlightText";

interface ExpertiseCardProps {
    icon: React.ReactNode;
    title: HighLightedText;
    description: string
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({icon, title, description}) => {
    return (
        <div className={"flex flex-col items-center rounded-lg w-1/4 p-[30px] shadow-2xl gap-5"}>
            {icon}
            <HighlightText className={"text-3xl font-semibold"} highlightedText={title} />
            <p>{description}</p>

        </div>
    );
}

export default ExpertiseCard;