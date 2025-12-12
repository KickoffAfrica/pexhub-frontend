"use client";

import { useState } from "react";
import { AppHeader } from "./app-header";
import { SupportOptions } from "./support-options";
import { AirportSelect } from "./airport-select";
import { DirectionGuide } from "./direction-guide";
import { CallUs } from "./call-us";
import { FAQList } from "./faq-list";
import { type Airport } from "../constants/airports";

// WhatsApp placeholder link - update with actual business number
const WHATSAPP_LINK = "https://wa.me/2348053379016?text=Hello%2C%20I%20need%20assistance%20at%20the%20airport";

type ViewState = "home" | "airport-select" | "direction-guide" | "call-us" | "faq";

export function LandingPage() {
  const [currentView, setCurrentView] = useState<ViewState>("home");
  const [selectedAirport, setSelectedAirport] = useState<Airport | null>(null);

  // Navigation handlers
  const handleFindSupport = () => setCurrentView("airport-select");
  
  const handleChatWithUs = () => {
    // Open WhatsApp in a new tab
    window.open(WHATSAPP_LINK, "_blank");
  };
  
  const handleCallUs = () => setCurrentView("call-us");
  
  const handleFAQ = () => setCurrentView("faq");
  
  const handleSelectAirport = (airport: Airport) => {
    setSelectedAirport(airport);
    setCurrentView("direction-guide");
  };
  
  const handleBackToHome = () => {
    setCurrentView("home");
    setSelectedAirport(null);
  };
  
  const handleBackToAirportSelect = () => {
    setCurrentView("airport-select");
  };

  // Render the current view
  const renderView = () => {
    switch (currentView) {
      case "home":
        return (
          <SupportOptions
            onFindSupport={handleFindSupport}
            onChatWithUs={handleChatWithUs}
            onCallUs={handleCallUs}
            onFAQ={handleFAQ}
          />
        );
      case "airport-select":
        return (
          <AirportSelect
            onBack={handleBackToHome}
            onSelectAirport={handleSelectAirport}
          />
        );
      case "direction-guide":
        return selectedAirport ? (
          <DirectionGuide
            airport={selectedAirport}
            onBack={handleBackToAirportSelect}
            onDone={handleBackToHome}
          />
        ) : null;
      case "call-us":
        return <CallUs onBack={handleBackToHome} />;
      case "faq":
        return <FAQList onBack={handleBackToHome} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      {/* Background image - covers entire screen */}
      <div 
        className="fixed inset-0 pointer-events-none -z-10"
        style={{
          backgroundImage: "url('/airport-bg.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      
      {/* Overlay gradient - covers entire screen */}
      <div 
        className="fixed inset-0 pointer-events-none -z-10"
        style={{
          background: "linear-gradient(180deg, rgba(2, 19, 39, 0.9) 0%, rgba(2, 19, 39, 0.8) 50%, rgba(2, 19, 39, 0.9) 100%)",
        }}
      />

      {/* Header */}
      <AppHeader />

      {/* Main content area */}
      <div className=" flex items-center justify-center  py-4 md:py-12 relative">

        {/* Top-left blur gradient */}
        <div 
          className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full pointer-events-none opacity-20 dark:opacity-15"
          style={{
            background: "radial-gradient(circle, #0960C1 0%, transparent 50%)",
            transform: "translate(-40%, -40%)",
          }}
        />
        
        {/* Bottom-right blur gradient */}
        <div 
          className="absolute bottom-0 right-0 w-[800px] h-[800px] rounded-full pointer-events-none opacity-20 dark:opacity-15"
          style={{
            background: "radial-gradient(circle, #0960C1 0%, transparent 50%)",
            transform: "translate(40%, 40%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          {renderView()}
        </div>
      </div>
    </div>
  );
}
