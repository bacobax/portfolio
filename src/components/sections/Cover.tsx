import React from 'react';
import Section from "../Section";
import Arrow from "../Arrow";

const Cover: React.FC = () => {
    return (
        <Section className="flex flex-col justify-end text-white items-end" number={"01"}>
            <div className={"flex"}>
                <div>
                    <Arrow color={"#EDC789"} className={"w-[400px]"} strokeWidth={1}/>
                </div>
                <div className={"flex flex-col w-[730px]"}>
                    <h1 className={"text-6xl font-bol"}>I'm Francesco Bassignana</h1>
                    <p>plicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi temcorporis sus</p>
                </div>
            </div>

        </Section>
    );
}

export default Cover;
