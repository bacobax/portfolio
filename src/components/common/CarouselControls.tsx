import React from 'react';
import { FaChevronRight , FaChevronLeft} from "react-icons/fa";

interface CarouselControlsProps {
    totalSlides: number;
    currentSlide: number;
    setCurrentSlide: (index: number) => void;
    handlePrev: () => void;
    handleNext: () => void;
}

const CarouselControls: React.FC<CarouselControlsProps> = ({ totalSlides, currentSlide, setCurrentSlide , handleNext, handlePrev}) => {
    return (
        <div className="flex mt-4 space-x-2 items-center">
            <FaChevronLeft onClick={handlePrev} className={"text-2xl text-white cursor-pointer"}/>
            {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-[20px] h-[20px] rounded-full ${
                        index === currentSlide ? 'bg-goldenGlow' : 'border-[2px] border-goldenGlow bg-transparent'
                    }`}
                />
            ))}
            <FaChevronRight onClick={handleNext} className={"text-2xl text-white cursor-pointer"}/>
        </div>
    );
};

export default CarouselControls;
