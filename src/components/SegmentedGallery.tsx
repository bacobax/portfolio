import React from "react";
import useCarousel from "../hooks/useCarousel";
import CarouselControls from "./CarouselControls";

interface SegmentedGallery<T> {
    children: (t: T) => React.ReactNode;
    items: T[];
    maxItems: number;
}

const SegmentedGallery = <T,>({ children, items, maxItems }: SegmentedGallery<T>) => {
    const { currentItems, handlePrev, handleNext, totalSlides, currentSlide, setSlide } = useCarousel(items, maxItems);

    return (
        <div className="flex flex-col items-center w-full gap-5">
            <div className="flex w-full justify-center gap-16">
                {currentItems.map(children)}
            </div>
            <CarouselControls
                totalSlides={totalSlides}
                currentSlide={currentSlide}
                setCurrentSlide={setSlide}
                handleNext={handleNext}
                handlePrev={handlePrev}
            />
        </div>
    );
};

export default SegmentedGallery;
