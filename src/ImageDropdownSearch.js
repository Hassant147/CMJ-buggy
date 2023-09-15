import React, { useState, useEffect } from "react";
import './App.css';

function ImageDropdownSearch() {
  const [vehicle, setVehicle] = useState("");
  const [timeOfDay, setTimeOfDay] = useState("");
  const [duration, setDuration] = useState("");
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1000);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleVehicleChange = (event) => {
    setVehicle(event.target.value);
  };

  const handleTimeOfDayChange = (event) => {
    setTimeOfDay(event.target.value);
  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

  const handleSearchClick = () => {
    console.log("Vehicle:", vehicle);
    console.log("Time of the day:", timeOfDay);
    console.log("Duration:", duration);
  };

  const dropdowns = (
    <>
      <div className="relative w-52 md:mb-0">
        <select className="border rounded p-2 bg-white w-full text-black text-lg font-normal" value={vehicle} onChange={handleVehicleChange}>
          <option value="" disabled>Vehicle</option>
          <option value="Car">Car</option>
          <option value="Bike">Bike</option>
          <option value="Truck">Truck</option>
        </select>
      </div>
      <div className="relative w-52 mb-4 md:mb-0">
        <select className="border rounded p-2 bg-white w-full text-black text-lg font-normal" value={timeOfDay} onChange={handleTimeOfDayChange}>
          <option value="" disabled>Time of the day</option>
          <option value="Morning">Morning</option>
          <option value="Afternoon">Afternoon</option>
          <option value="Evening">Evening</option>
        </select>
      </div>
      <div className="relative w-52 mb-4 md:mb-0">
        <select className="border rounded p-2 bg-white w-full text-black text-lg font-normal" value={duration} onChange={handleDurationChange}>
          <option value="" disabled>Duration</option>
          <option value="1 Hour">1 Hour</option>
          <option value="2 Hours">2 Hours</option>
          <option value="Full Day">Full Day</option>
        </select>
      </div>
    </>
  );

  return (
    <div className="relative w-auto h-auto gradient-overlay pt-24">
        <img className="object-cover w-full h-full" src={require('.//media/img1.png')} alt="Desert" />
        <div className="absolute top-60 left-0 right-0 flex flex-col justify-center items-center z-30">
            <div className="text-white lg:text-7xl font-bold">DUNE DANCING</div>
            <div className="text-white lg:text-5xl font-bold mt-4">Off-Road Thrills in Desert Buggies</div>
        </div>

      {isDesktop ? (
        // Desktop Layout
        <div className="absolute h-28 w-auto bottom-10 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-60 flex flex-row items-center justify-center z-30 px-4 space-x-8">
          <div className="flex flex-nowrap items-center w-full">
            <div className="flex flex-row items-center justify-start w-max mr-8 space-x-5">
              {dropdowns}
            </div>
            <button className="h-12 bg-red-500 px-8 py-2 rounded text-white font-bold self-center" onClick={handleSearchClick}>Search</button>
          </div>
        </div>
      ) : (
        // Mobile/Tablet Layout
        <div className="relative h-full w-4/5 mt-8 bg-black bg-opacity-60 flex flex-col items-center justify-center z-30 py-6 space-y-4 mx-auto">
          {dropdowns}
          <button className="h-auto w-auto bg-red-500 px-8 py-2 rounded text-white font-bold" onClick={handleSearchClick}>Search</button>
        </div>
      )}
    </div>
  );
}

export default ImageDropdownSearch;
