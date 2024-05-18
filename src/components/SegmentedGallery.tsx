import React from "react";
import useCarousel from "../hooks/useCarousel";
import CarouselControls from "./CarouselControls";
import Items from "./Items";

interface SegmentedGallery<T> {
    children: (t: T, idx: number) => React.ReactNode;
    items: T[];
    maxItems: number;
    className?: string;
}

const SegmentedGallery = <T,>({ children, items, maxItems, className }: SegmentedGallery<T>) => {
    const { currentItems, handlePrev, handleNext, totalSlides, currentSlide, setSlide } = useCarousel(items, maxItems);

    return (
        <div className="flex flex-col items-center w-full gap-5">

            <Items items={currentItems} className={className}>
                {children}
            </Items>
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
