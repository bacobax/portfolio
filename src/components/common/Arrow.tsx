import React from 'react';

interface ArrowProps {
    color?: string;
    strokeWidth?: number;
    className?: string;
}

const Arrow: React.FC<ArrowProps> = ({ color = '#FFF', strokeWidth = 4, className = '' }) => {
    return (
        <svg
            viewBox="0 0 100 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            preserveAspectRatio="none"
        >
            <line x1="0" y1="5" x2="90" y2="5" stroke={color} strokeWidth={strokeWidth} />
        </svg>
    );
}

export default Arrow;
