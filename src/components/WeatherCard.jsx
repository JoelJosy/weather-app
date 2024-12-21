"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export function WeatherCard({ city, temperature, condition, iconUrl }) {
  return (
    <CardContainer className="h-full inter-var">
      <CardBody
        className="bg-slate-800 text-white shadow-lg w-auto sm:w-[30rem] h-auto rounded-xl p-6 border border-slate-600 hover:shadow-xl hover:shadow-slate-900 transition-all duration-300 ease-in-out relative">
        {/* City Name */}
        <CardItem
          translateZ="50"
          className="text-2xl font-semibold tracking-wide text-center">
          {city}
        </CardItem>

        {/* Weather Condition */}
        <CardItem
          as="p"
          translateZ="40"
          className="text-sm mt-2 text-center uppercase text-slate-300">
          {condition}
        </CardItem>

        {/* Weather Icon */}
        <CardItem translateZ="100" className="w-full mt-6 flex justify-center">
          <img
            src={iconUrl || "https://via.placeholder.com/100"}
            alt="Weather Icon"
            className="h-20 w-20 object-contain"
          />
        </CardItem>

        {/* Temperature */}
        <CardItem
          translateZ="60"
          className="text-5xl font-bold mt-4 text-center text-slate-100">
          {temperature}°C
        </CardItem>

        {/* Action Buttons */}
        <div className="flex justify-between items-center mt-8">
          <CardItem
            translateZ={20}
            as="a"
            href={`https://www.google.com/search?q=weather+in+${city}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-md bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white text-sm font-medium transition duration-200">
            Details →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            onClick={() => alert("Refreshing weather data...")}
            className="px-4 py-2 rounded-md bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white text-sm font-medium transition duration-200">
            Refresh
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}