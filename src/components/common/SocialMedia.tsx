import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const SocialMedia = () => {
    return (
        <div className="flex space-x-4">
            <a href="https://www.instagram.com/bassi_sw/" target={"_blank"} className="cursor-pointer text- hover:text-purple-600 transition-transform transform hover:scale-110">
                <FaInstagram className="w-10 h-10 cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/in/francesco-bassignana" target={"_blank"} className="cursor-pointer text-white hover:text-sky-700 transition-transform transform hover:scale-110">
                <FaLinkedin className="w-10 h-10 cursor-pointer" />
            </a>
            <a href="https://github.com/bacobax" target={"_blank"} className="cursor-pointer text-white hover:text-blue transition-transform transform hover:scale-110">
                <FaGithub className="w-10 h-10 cursor-pointer" />
            </a>
        </div>
    );
};


export default SocialMedia;
