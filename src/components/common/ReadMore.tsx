// ReadMore.tsx
import React, { useState } from 'react';
import {Button} from "@nextui-org/react";

interface ReadMoreProps {
    text: string;
    maxLength: number;
    className?: string;
}

const ReadMore: React.FC<ReadMoreProps> = ({ text, maxLength , className}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    const renderText = () => {
        if (isExpanded) {
            return text;
        }

        if (text.length <= maxLength) {
            return text;
        }

        return `${text.substring(0, maxLength)}...`;
    };

    return (
        <div className={className}>
            <p>{renderText()}</p>
            {text.length > maxLength && (
                <Button onClick={toggleReadMore} variant={"solid"} className={"text-primary-300 bg-transparent"}>
                    {isExpanded ? 'Read Less' : 'Read More'}
                </Button>
            )}
        </div>
    );
};

export default ReadMore;
