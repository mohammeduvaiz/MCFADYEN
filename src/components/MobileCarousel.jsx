import React from 'react'
import { useSelector } from 'react-redux';
const MobileCarouselComp = ({ detail }) => {

    return (
        <div id="default-carousel" class="relative" data-carousel="static">
            <div class="overflow-hidden relative h-56 rounded-lg ">
                <div class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20" data-carousel-item>
                    <span class="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
                    <img src={detail.urls.small} class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="image" />
                </div>
                <div class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10" data-carousel-item>
                    <img src={detail.urls.small} class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                </div>
                <div class="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10" data-carousel-item>
                    <img src={detail.urls.small} class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                </div>
            </div>
            <div class="flex absolute bottom-4 left-1/2 z-30 space-x-3 -translate-x-1/2">
                <button type="button" class="w-6 h-2 rounded-md bg-white dark:bg-gray-800" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" class="w-6 h-2 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" class="w-6 h-2 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
            </div>
        </div>
    )
}

export const MobileCarousel = React.memo(MobileCarouselComp)
export default MobileCarousel