import React from "react";
import Header from "./header";
import ImageDropdownSearch from "./ImageDropdownSearch";
import VehicleCardSection from "./VehicleDataSection";
import SafetyInfoSection from "./SafetyInfoSection"
import PhotoGallery from './PhotoGallarySection'
import InfoCard from "./InfoCardSection";
import Footer from "./FooterSection";

function App() {
  return (
    <div>
      <Header />
      <ImageDropdownSearch />
      <VehicleCardSection />
      <SafetyInfoSection/>
      <PhotoGallery/>
      <InfoCard/>
      <Footer/>
    </div>
  );
}

export default App;
