import React, { useState, useRef, useEffect } from 'react';

const VehicleCardSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carousel = useRef(null);
    const carouselItems = useRef(null);

    useEffect(() => {
        updateCarousel();
    }, [currentIndex]);

    const updateCarousel = () => {
        if (carousel.current && carouselItems.current) {
            const offset = -currentIndex * carousel.current.clientWidth;
            carouselItems.current.style.transform = `translateX(${offset}px)`;
        }
    }

    const renderCard = (title, description, price, imageSrc, index) => (
        <div 
            className={`lg:w-1/4 w-full flex-none p-4 ${index % 4 === 1 ? 'pl-0' : ''} ${index % 4 === 0 ? 'pr-0' : ''}`}
        >
            <div className="h-max border-opacity-60 overflow-hidden flex flex-col border border-gray-300">
                <img src={imageSrc} alt={title} className="w-full h-auto flex-shrink-0 object-cover object-center" />
                <div className="p-4 border-t-4 border-gray-200">
                    <h2 className="sm:text-4xl lg:text-xl font-bold mb-3" style={{ color: '#4b4b4b' }}>{title}</h2>
                    <p className="sm:text-2xl lg:text-sm" style={{ color: '#626262' }}>{description}</p>
                    <h2 className="mt-5 text-lg font-semibold" style={{ color: '#FF4848' }}>{price}</h2>
                </div>
            </div>
        </div>
    );

    return (
        <section className="my-20 lg:w-3/4 container mx-auto flex flex-wrap lg:space-y-5">
            <h1 className="text-3xl font-semibold w-full  text-center lg:text-start lg:text-4xl" style={{ color: '#3D3D3D' }}>The Ultimate Experience<br />Is just a Click away</h1>

            {/* Desktop grid layout */}
             <div className="cards-container hidden lg:flex lg:flex-wrap lg:w-auto mx-auto">
             {renderCard('2 Seater Can-Am x3 tours', 'The Can-Am X3 Turbo RR is made to perform...', 'From 1800 AED',  require('.//media/Rectangle 12.png'), 1)}
             {renderCard('2 Seater Can-Am x3 tours', 'The Can-Am X3 Turbo RR is made to perform...', 'From 1800 AED',  require('.//media/Rectangle 12.png'), 2)}
             {renderCard('2 Seater Can-Am x3 tours', 'The Can-Am X3 Turbo RR is made to perform...', 'From 1800 AED',  require('.//media/Rectangle 12.png'), 3)}
             {renderCard('2 Seater Can-Am x3 tours', 'The Can-Am X3 Turbo RR is made to perform...', 'From 1800 AED',  require('.//media/Rectangle 12.png'), 4)}
             {renderCard('2 Seater Can-Am x3 tours', 'The Can-Am X3 Turbo RR is made to perform...', 'From 1800 AED',  require('.//media/Rectangle 12.png'), 5)}
             {renderCard('2 Seater Can-Am x3 tours', 'The Can-Am X3 Turbo RR is made to perform...', 'From 1800 AED',  require('.//media/Rectangle 12.png'), 6)}
             {renderCard('2 Seater Can-Am x3 tours', 'The Can-Am X3 Turbo RR is made to perform...', 'From 1800 AED',  require('.//media/Rectangle 12.png'), 7)}
             {renderCard('2 Seater Can-Am x3 tours', 'The Can-Am X3 Turbo RR is made to perform...', 'From 1800 AED',  require('.//media/Rectangle 12.png'), 8)}
            </div>


            {/* Mobile carousel layout */}
            <div className="lg:hidden flex mx-auto w-full md:w-auto">
                <div ref={carousel} className="relative overflow-hidden max-w-lg w-auto">
                    <div ref={carouselItems} className="flex transition-transform duration-500 ease-in-out">
                    {renderCard('2 Seater Can-Am x3 tours', 'The Can-Am X3 Turbo RR is made to perform...', 'From 1800 AED', require('.//media/Rectangle 12.png'), 'first')}
                    {renderCard('2 Seater Can-Am x3 tours', 'The Can-Am X3 Turbo RR is made to perform...', 'From 1800 AED', require('.//media/Rectangle 12.png'))}
                    {renderCard('2 Seater Can-Am x3 tours', 'The Can-Am X3 Turbo RR is made to perform...', 'From 1800 AED', require('.//media/Rectangle 12.png'))}
                    {renderCard('2 Seater Can-Am x3 tours', 'The Can-Am X3 Turbo RR is made to perform...', 'From 1800 AED', require('.//media/Rectangle 12.png'), 'last')}
                    {renderCard('2 Seater Can-Am x3 tours', 'The Can-Am X3 Turbo RR is made to perform...', 'From 1800 AED', require('.//media/Rectangle 12.png'), 'first')}
                    {renderCard('2 Seater Can-Am x3 tours', 'The Can-Am X3 Turbo RR is made to perform...', 'From 1800 AED', require('.//media/Rectangle 12.png'))}
                    {renderCard('2 Seater Can-Am x3 tours', 'The Can-Am X3 Turbo RR is made to perform...', 'From 1800 AED', require('.//media/Rectangle 12.png'))}
                    {renderCard('2 Seater Can-Am x3 tours', 'The Can-Am X3 Turbo RR is made to perform...', 'From 1800 AED', require('.//media/Rectangle 12.png'), 'last')}                    
                    </div>

                    <button 
                        onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))} 
                        className="absolute top-36 left-5 transform -translate-y-1/2 w-10 h-10 bg-gray-500 bg-opacity-50 text-white rounded-full"
                    >
                        <span className="block m-auto">{"<"}</span>
                    </button>
                    <button 
                        onClick={() => setCurrentIndex(Math.min(7, currentIndex + 1))}
                        className="absolute top-36 right-5 transform -translate-y-1/2 w-10 h-10 bg-gray-500 bg-opacity-50 text-white rounded-full"
                    >
                        <span className="block m-auto">{">"}</span>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default VehicleCardSection;
