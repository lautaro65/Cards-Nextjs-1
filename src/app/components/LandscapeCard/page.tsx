"use client";

import React from "react";

import { motion } from "framer-motion";
import { Sun, Moon, Cloud, Star } from "lucide-react";


interface LandscapeCardProps {
  title: string
  description: string
  isDay: boolean
  onDayNightChange: (isDay: boolean) => void
}

const LandscapeCard: React.FC<LandscapeCardProps> = ({ title, description, isDay, onDayNightChange }) => {
  const toggleDayNight = () => {
    onDayNightChange(!isDay)
  }


  return (
    <motion.div
      className="w-80 h-96 rounded-xl overflow-hidden shadow-lg relative cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Dynamic background */}
      <motion.div
        className={`absolute inset-0 transition-colors duration-1000 ${
          isDay
            ? "bg-gradient-to-b from-blue-300 to-green-200"
            : "bg-gradient-to-b from-indigo-900 to-gray-800"
        }`}
      />

      {/* Sun/Moon */}
      <motion.div
        className="absolute top-6 left-6"
        animate={{
          y: isDay ? 0 : -50,
          opacity: isDay ? 1 : 0,
          scale: isDay ? 1 : 0.5,
        }}
        transition={{ duration: 1 }}
      >
        <Sun className="text-yellow-400 w-12 h-12" />
      </motion.div>
      <motion.div
        className="absolute top-6 left-6"
        animate={{
          y: isDay ? 50 : 0,
          opacity: isDay ? 0 : 1,
          scale: isDay ? 0.5 : 1,
        }}
        transition={{ duration: 1 }}
      >
        <Moon className="text-gray-200 w-12 h-12" />
      </motion.div>

      {/* Clouds */}
      <motion.div
        className="absolute top-4 right-4"
        animate={{
          x: isDay ? 0 : 100,
          opacity: isDay ? 1 : 0,
        }}
        transition={{ duration: 1 }}
      >
        <Cloud className="text-white w-16 h-16 opacity-80" />
      </motion.div>
      <motion.div
        className="absolute top-12 right-12"
        animate={{
          x: isDay ? 0 : 100,
          opacity: isDay ? 1 : 0,
        }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Cloud className="text-white w-12 h-12 opacity-60" />
      </motion.div>

      {/* Stars */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            top: `${Math.random() * 40}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: isDay ? 0 : [0.2, 0.8, 0.2],
            scale: isDay ? 0 : [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Enhanced landscape */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2">
        {/* Hills */}
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full">
          {/* Background mountains */}
          <path 
            d="M0 100 Q20 60 50 80 T100 100 L100 100 L0 100" 
            fill={isDay ? "#86efac" : "#064e3b"}
            className="transition-colors duration-1000"
          />
          {/* Grass with a plateau */}
          <path 
            d="M0 100 Q25 0 50 60 T100 100 L100 100 L0 100" 
            fill={isDay ? "#4ade80" : "#065f46"}
            className="transition-colors duration-1000"
          />
          <path 
            d="M29 100 Q0 50 70 60 T100 100 L100 100 L0 100" 
            fill={isDay ? "#22c55e" : "#047857"}
            className="transition-colors duration-1000"
          />
        </svg>

        {/* Trees */}
        {isDay
          ? [...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  bottom: `${Math.random() * 20 + 10}%`,
                  left: `${Math.random() * 80 + 10}%`,
                }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                }}
              >
                <div className="w-8 h-16 bg-green-800 rounded-t-full" />
                <div className="w-10 h-12 bg-green-700 rounded-t-full -mt-6 -ml-1" />
                <div
                  className="absolute w-2 h-2 bg-pink-500 rounded-full"
                  style={{ bottom: "70%", left: "30%" }}
                />
                <div
                  className="absolute w-2 h-2 bg-yellow-500 rounded-full"
                  style={{ bottom: "60%", left: "50%" }}
                />
              </motion.div>
            ))
          : [...Array(7)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  bottom: `${Math.random() * 20 + 10}%`,
                  left: `${Math.random() * 80 + 10}%`,
                }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                }}
              >
                <div
                  className="w-8 h-20 bg-green-900"
                  style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
                />
              </motion.div>
            ))}

        {/* Fireflies */}
        {!isDay &&
          [...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400 rounded-full"
              style={{
                bottom: `${Math.random() * 20 + 10}%`,
                left: `${Math.random() * 90}%`,
              }}
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: Math.random() * 1.5,
              }}
            />
          ))}
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#33333318] bg-opacity-50 text-white">
        <h2 className="text-xl font-bold mb-1">{title}</h2>
        <p className="text-sm">{description}</p>
      </div>

      {/* Toggle button */}
      <button
        onClick={toggleDayNight}
        className="absolute top-2 right-2 p-2 rounded-full bg-white bg-opacity-30 hover:bg-opacity-40 transition-colors"
      >
        {isDay ? (
          <Moon className="w-6 h-6 text-indigo-500" />
        ) : (
          <Sun className="w-6 h-6 text-yellow-300" />
        )}
      </button>
    </motion.div>
  );
};

export default LandscapeCard;
