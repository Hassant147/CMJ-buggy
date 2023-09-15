import React from 'react';
import './App.css';


const InfoCard = ({ title, items }) => (
    <div className="border border-gray-300 bg-white h-full flex flex-col p-4 space-y-4">
        <div className="text-center text-red-500 text-2xl font-bold">{title}</div>
        <div className="text-gray-400 space-y-2 text-xs font-light">
            {items.map((item, index) => (
                <div key={index} className="icon-text">
                    <p>{item}</p>
                </div>
            ))}
        </div>
    </div>
);



const InfoSection = () => (
    <div className="w-full h-max mx-auto flex justify-center py-8" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="grid sm:grid-cols-1 lg:grid-cols-4 gap-4 sm:justify-center w-3/4">
            <InfoCard 
                title="SAFETY INFO"
                items={[
                    "We provide all necessary gear you will need for all our tours.",
                    "All our staff are trained First Aiders.",
                    "Safety and operation briefing before each tour.",
                    "4-point safety harnesses are installed on all of our machines.",
                    "Recovery by Landcruiser during whole duration of tour.",
                    "All safety equipment and first aid kit with our tour guide for the whole duration of the tour."
                ]}
            />
            <InfoCard 
                title="USEFUL INFORMATION"
                items={[
                    "We advise to wear casual sportswear on our buggy tours.",
                    "For buggy tours you will be provided with: helmet, gloves.",
                    "We provide refreshments on all our tours including water and soft drinks.",
                    "Snacks can be arranged at extra cost of AED 50. Please mention this at the time of booking.",
                    "GoPro cameras can be arranged at extra cost of AED 150. Please mention this at the time of booking."
                ]}
            />
            <InfoCard 
                title="RESTRICTION"
                items={[
                    "Minimum age to self drive a buggy is 16 years.",
                    "No driving license is required for any of our tours.",
                    "To accompany as a passenger the minimum age is 5 years.",
                    "We cannot accommodate pregnant women on any tours due to the terrain."
                ]}
            />
            <InfoCard 
                title="THE EXPERIENCE"
                items={[
                    "Rip through massive golden sand dunes in an endlessly magnificent landscape.",
                    "Well-paced tour based on driver ability, enjoy power on demand in our meticulously maintained vehicles.",
                    "You will visit the most iconic Arabian desert landscapes such as Big Red dune, Pink Rock, Valley of a Thousand Dunes and the majestic Lost Trees Oasis.",
                    "Selfie with a free-roaming camel (we cannot guarantee, but we mostly meet them on morning sessions)."
                ]}
            />
        </div>
    </div>
);

export default InfoSection;
