import { useState } from 'react';

const useCarousel = <T,>(items: T[], maxItems: number) => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const chunkItems = (items: T[], size: number) => {
        const chunks: T[][] = [];
        for (let i = 0; i < items.length; i += size) {
            chunks.push(items.slice(i, i + size));
        }
        return chunks;
    };

    const chunks = chunkItems(items, maxItems);
    const totalSlides = chunks.length;

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    };

    const setSlide = (slide: number) => {
        setCurrentSlide(slide);
    }

    return {
        currentItems: chunks[currentSlide],
        handlePrev,
        handleNext,
        totalSlides,
        currentSlide,
        setSlide
    };
};

export default useCarousel;
