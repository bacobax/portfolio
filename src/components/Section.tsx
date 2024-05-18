import React, {FC} from "react";
interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    number: string;
}
const Section: FC<SectionProps> =  ({children, className, number}) => {
    return (
        <section className={`min-h-screen ${className ? className : ""} relative p-10`}>
            <label className={"absolute top-10 right-10 font-sans text-6xl"}>{number}</label>
            {children}
        </section>
    );
}

export default Section;