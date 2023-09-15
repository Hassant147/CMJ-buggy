import React from 'react';

const SafetyInfoCard = ({ logoSrc, altText, title }) => {
    return (
        <div className="relative p-8 bg-white border border-gray-300">
            <img src={logoSrc} alt={altText} className="w-8 h-8 mx-auto mb-4" />
            <div className="text-center text-gray-800 sm:text-lg text-xl font-bold" style={{color: "#3D3D3D"}}>{title}</div>
        </div>
    );
}

const SafetyInfoSection = () => {
    const cards = [
        {
            logoSrc: require('./media/Layer_1 (2).png'),
            altText: "Logo 1",
            title: "The Industry leader in Safety"
        },
        {
            logoSrc: require('./media/Frame 3.png'),
            altText: "Logo 2",
            title: "Customized Fleet"
        },
        {
            logoSrc: require('./media/Layer_1.png'),
            altText: "Logo 3",
            title: "First Class mechanics and Recovery team"
        },
        {
            logoSrc: require('./media/Layer_1 (1).png'),
            altText: "Logo 4",
            title: "Safety is our Culture"
        }
    ];

    return (
        <section className="bg-gray-100">
            <div className="lg:w-3/4 mx-auto py-8">
                <div className="container mx-auto">
                    <div className="relative bg-cool-gray-100 p-6">
                        <div className="absolute left-0 top-15 w-2 h-20 bg-red-500"></div>

                        <div className="flex flex-col">
                            <div className="text-4xl font-bold mb-2" style={{color: "#3D3D3D"}}>Safety info</div>
                            <div className="text-gray-500 text-sm font-light mb-8">
                                Here at Big Red your safety is part of our organizational culture and is our ultimate priority. Satisfaction and adrenaline come standard.
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                            {cards.map(card => (
                                <SafetyInfoCard 
                                    key={card.altText} 
                                    logoSrc={card.logoSrc} 
                                    altText={card.altText} 
                                    title={card.title} 
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SafetyInfoSection;
