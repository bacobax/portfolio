import {Slider} from "@nextui-org/slider";
import {Progress} from "@nextui-org/progress";
import {Skill} from "../../constants";
import SkillPercentage from "./SkillPercentage";
interface SkillSheetProps {
    skills: Skill[];
}
const marks = [
    {
        value: 20,
        label: "20%",
    },
    {
        value: 50,
        label: "50%",
    },
    {
        value: 80,
        label: "80%",
    },
]
const SkillSheet: React.FC<SkillSheetProps> = ({skills}) => {
    return (
        <div className="flex flex-wrap justify-center items-center w-full gap-10">
            {skills.map((skill, index) => (
                <SkillPercentage title={skill.title} percentage={skill.percentage*100}/>
            ))}
        </div>
    );
}

export default SkillSheet;