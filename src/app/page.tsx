"use client"
import React, { useState } from 'react'
import LandscapeCard from './components/LandscapeCard/page'

export default function Home() {
  const [isDay, setIsDay] = useState(true);


  const handleDayNightChange = (newIsDay: boolean) => {
    setIsDay(newIsDay);
  };

  return (
    <main className={`min-h-screen w-full flex items-center justify-center p-6 transition-colors duration-1000 ${
      isDay ? 'bg-gradient-to-br from-blue-400 via-purple-300 to-pink-400' : 'bg-gradient-to-br from-indigo-900 via-purple-900 to-black'
    }`}>
      <div className="relative z-10"> 
        <LandscapeCard
          title="Paisaje Dinámico"
          description="Experimenta la belleza de la naturaleza en el día y la noche con un solo clic."
          onDayNightChange={handleDayNightChange}
        />
      </div>
    </main>
  )
}

