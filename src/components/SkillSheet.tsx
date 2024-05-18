import {Skill} from "../constants";
import {Slider} from "@nextui-org/slider";
import {Progress} from "@nextui-org/progress";

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
                <Progress
                    label={skill.title}
                    showValueLabel={true}
                    size="sm"
                    classNames={{
                        indicator: "bg-goldenGlow",
                        label: "font-mono"
                    }}
                    value={skill.percentage*100}
                    className="w-1/3"
                />
            ))}
        </div>
    );
}

export default SkillSheet;