"use client";
import React, { useState, useEffect } from "react";
import LandscapeCard from "./components/LandscapeCard/LandscapeCard";

export default function Home() {
  const [isDay, setIsDay] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const hours = new Date().getHours();
    setIsDay(hours >= 6 && hours < 18);
  }, []);

  const handleDayNightChange = (newIsDay: boolean) => {
    setIsDay(newIsDay);
  };

  if (!isClient) {
    return null; // or a loading spinner
  }
  return (
    <main
      className={` min-h-screen  w-full flex items-start justify-center px-6 py-6 transition-colors duration-1000 ${
        isDay
          ? "bg-gradient-to-br from-blue-400 via-purple-300 to-pink-400"
          : "bg-gradient-to-br from-indigo-900 via-purple-900 to-black"
      }`}
    >
      <div className="relative z-10  w-full   h-full  ">
        <LandscapeCard isDay={isDay} onDayNightChange={handleDayNightChange} />
      </div>
    </main>
  );
}
