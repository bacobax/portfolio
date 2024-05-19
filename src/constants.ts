import {RiRobot2Fill} from "react-icons/ri";
import {HighLightedText} from "./types";
import {IconType} from "react-icons";
import { MdOutlineWeb } from "react-icons/md";
import { FaServer } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
import { FaBluetooth } from "react-icons/fa";

export interface Skill {
    title: string;
    percentage: number;
    description?: string;
}

export const skills: Skill[] = [
    {
        title: "Technical Skills",
        percentage: 0.8,
        description: "Proficient in various programming languages, software, and specialized tools."
    },
    {
        title: "Problem-Solving",
        percentage: 1,
        description: "Strong ability to analyze problems and develop effective solutions."
    },
    {
        title: "Creativity",
        percentage: 0.6,
        description: "Adept at thinking outside the box and developing innovative ideas."
    },
    {
        title: "Communication",
        percentage: 0.9,
        description: "Excellent at conveying ideas clearly and effectively, both in writing and verbally."
    },
    {
        title: "Project Management",
        percentage: 0.8,
        description: "Skilled in organizing and managing projects from inception to completion."
    },
    {
        title: "Teamwork and Collaboration",
        percentage: 1,
        description: "Proven ability to work well with others and contribute to team projects."
    },
    {
        title: "Adaptability",
        percentage: 1,
        description: "Quick to adapt to new situations and learn new skills."
    },
    {
        title: "Attention to Detail",
        percentage: 0.7,
        description: "Meticulous and accurate in all aspects of work, ensuring high quality."
    },
    {
        title: "Leadership",
        percentage: 1,
        description: "Experienced in leading teams and managing projects effectively."
    },
    {
        title: "Time Management",
        percentage: 0.9,
        description: "Efficient at managing time and meeting deadlines."
    }
];

export const contacts=[
    {
        title: "Email",
        contact: "quicksolver02@gmail.com"
    },
    {
        title: "Phone",
        contact: "+39 334 962 8407"
    },
    {
        title: "Location",
        contact: "Cuneo, Italy"
    },
    {
        title: "P.Iva",
        contact: "IT04081230049"
    }
]

interface ExpertiseArea {
    title: HighLightedText;
    description: string;
    icon: IconType;

}
export const expertiseAreas: ExpertiseArea[] = [
    {
        title: {
            text: "Prompt Engineering",
            keyWord: "Prompt"
        },
        description: "Creating and refining prompts to optimize AI responses and interactions.",
        icon: RiRobot2Fill
    },
    {
        title: {
            text: "Frontend Development",
            keyWord: "Frontend"
        },
        description: "Building user interfaces and ensuring seamless user experiences on web platforms.",
        icon: MdOutlineWeb
    },
    {
        title: {
            text: "Backend Development",
            keyWord: "Backend"
        },
        description: "Developing and maintaining server-side logic, databases, and APIs.",
        icon: FaServer
    },
    {
        title: {
            text: "Database Management",
            keyWord: "Database"
        },
        description: "Designing, implementing, and managing database systems for optimal performance and security.",
        icon: FaDatabase
    },
    {
        title: {
            text: "IOT Development",
            keyWord: "IOT"
        },
        description: "Creating and managing Internet of Things solutions to connect and control smart devices.",
        icon: FaBluetooth
    }
];

export const briefSelfDescription =`I am a third-year Computer Science student at the University of Turin 
with strong problem-solving and communication skills. I have expertise in various programming languages and 
Unix-based operating systems. Currently, I work as an Application Developer at SHD Elettronica, focusing on 
IoT projects, and I am also a freelancer. My technical skills include the MERN stack, JavaScript, Node.js, 
React.js, and database management. I am fluent in Italian and have a B2 level proficiency in English.

`
export const longDescription = `
My name is Francesco Bassignana, and I am a third-year Computer Science student at the University of Turin. I maintain an academic average above 28 and graduated from ITIS Mario Delpozzo in Cuneo. I am skilled in programming languages like C, Java, Python, and JavaScript, and adept in Unix-based operating systems, including Linux and MacOS.

Since April 2022, I have been working as an Application Developer at SHD Elettronica in Cuneo, where I supervise software development activities for IoT projects. Additionally, I am a freelancer, working on various projects. I have developed an IoT anti-theft system using BLE devices, Raspberry Pi, NodeJS, and Flask.

I have completed courses on Udemy in React, Node.js, Express, MongoDB, and Neural Networks and Generative AI. I am currently preparing my thesis titled "Strategic Prompt Engineering: Advancing AI Integration in Software Development," which focuses on optimizing human-AI interaction in software engineering tasks.

I possess strong communication and teamwork skills, and I am a proactive learner, always asking questions to ensure full comprehension. I am fluent in Italian and have a B2 proficiency level in English.`

export const projects = [
    {
        title: {
            text: "Operative System Project",
            keyWord: "Operative"
        },
        description: "This project is about creating a multi-process simulation which simulates the behavior of a real ship traffic. The project is written in C and uses the Unix API for system call.\n Done while attending the second year of the Computer Science course at the University of Turin.",
        link: "https://github.com/bacobax/progetto_SO"
    },
    {
        title: {
            text: "Web technology and Human-Computer Interaction Project",
            keyWord: "Web"
        },
        description: "This project is about creating a constellation of servers (Java and NodeJS) that communicate with each other to provide a service to the user. The project is written in JavaScript and uses the MERN stack.\nIt also uses python and jupiter notebook to analyze data provided by teachers, which needed to be cleaned before being used.\nTechnologies used: React, NodeJs and mongoose, python and pandas, Java Springboot Server.\nDone while attending the second year of the Computer Science course at the University of Turin.",
        link: "https://github.com/bacobax/progetto_TWEB"
    },
    {
        title: {
            text: "IoT Anti-Theft System",
            keyWord: "IoT"
        },
        description: "This project is about creating an IoT system that can detect the presence of an intruder in a room and send an alert to the user. The project uses BLE devices, Raspberry Pi, NodeJS, and Flask.\nDone while attending secondary school ITIS Cuneo Mario Delpozzo at 5th year.\nUnfortunately the school account was closed and the project is not available.",
        link: "#",
    },
    {
        title: {
            text: "Prompt Engineering Thesis",
            keyWord: "Prompt"
        },
        description: "This thesis explores the power of prompt engineering in large language models, with a goal of human-AI interaction optimization for software engineering tasks. Through comprehensive evaluation and analysis, it is indicated that the research work presented herein makes a significant improvement in AI-assisted tasks in the context of code refactoring and user interface optimizations using models OPENCHAT, MISTRAL, and LLama3. The paper develops a framework for effective prompts that would enhance the performance and reliability of AI systems in practical applications, further contributing toward understanding AI application in technology- driven environments.",
        link: "https://github.com/bassi-uni/tesi",
    }
]
