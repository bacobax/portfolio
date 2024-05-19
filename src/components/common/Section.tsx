import React, {FC, useEffect} from "react";
import {motion, useAnimation} from "framer-motion";
import { useInView } from 'react-intersection-observer';
interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    number: string;
}
const Section: FC<SectionProps> =  ({children, className, number}) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.1 });
    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView]);

    return (
        <motion.section
            ref={ref}
            className={`min-h-screen ${className ? className : ""} relative p-10`}
            initial="hidden"
            animate={controls}
            variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 100 }
            }}
            transition={{ duration: 0.5 }}
        >
            <label className={"absolute top-10 right-10 font-sans text-6xl"}>{number}</label>
            {children}
        </motion.section>
    );
}

export default Section;