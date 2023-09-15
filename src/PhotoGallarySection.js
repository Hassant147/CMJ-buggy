import React, { useState, useEffect } from 'react';

const PhotoGallery = () => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1000);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 1000);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const Image = ({ src, alt }) => (
        <div className="mb-4">
            <img className="w-full rounded-[20px]" src={require(`./media/${src}`)} alt={alt} />
        </div>
    );

    return (
        <section className="container mx-auto w-3/4 my-10 flex flex-col lg:flex-row">
            {isDesktop ? (
                // Desktop view
                <>
                    <div className="h-full pr-2 w-auto lg:w-auto md:justify-center">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4 w-full">
                            <Image src="Rectangle 50.png" alt="Image 1" />
                            <Image src="Rectangle 51.png" alt="Image 2" />
                        </div>
                        <Image src="Rectangle 53.png" alt="Image 3" />
                    </div>
                    <div className="w-full lg:w-2/5 lg:pl-2 mt-4 lg:mt-0">
                        <Image src="Rectangle 52.png" alt="Image 4" />
                    </div>
                </>
            ) : (
                // Mobile & Tablet view (images in column)
                <div className="flex flex-col items-center">
                    <Image src="Rectangle 50.png" alt="Image 1" />
                    <Image src="Rectangle 51.png" alt="Image 2" />
                    <Image src="Rectangle 53.png" alt="Image 3" />
                    <Image src="Rectangle 52.png" alt="Image 4" />
                </div>
            )}
        </section>
    );
};

export default PhotoGallery;
