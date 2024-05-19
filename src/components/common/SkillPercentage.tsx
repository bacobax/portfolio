import {FC, useEffect} from "react";
import {Progress} from "@nextui-org/progress";
import {animate, motion, useMotionValue, useTransform} from "framer-motion";
interface SkillPercentageProps {
    title: string;
    percentage: number;
}
const SkillPercentage: FC<SkillPercentageProps> = ({title, percentage}) => {

    return (
        <motion.div className={"w-1/3"}>
            <Progress
                label={title}
                showValueLabel={true}
                size="sm"
                classNames={{
                    indicator: "bg-goldenGlow",
                    label: "font-mono"
                }}
                value={percentage}
                className="w-full"
            />

            </motion.div>

    )
}

export default SkillPercentage;