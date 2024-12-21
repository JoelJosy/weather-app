import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const kelvinToCelsius = (kelvin) => (kelvin - 273.15).toFixed(1);

export function WeatherCard({ data }) {
  // Handle the case when data is null
  if (!data) {
    return <div>Loading...</div>; // Or show an error message if data is not available
  }

  // Define a base URL for the weather icon
  const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  return (
    <CardContainer className="inter-var">
      <CardBody
        className="bg-slate-800 text-white shadow-lg w-auto sm:w-[30rem] h-auto rounded-xl p-6 border border-slate-600 hover:shadow-xl hover:shadow-slate-900 transition-all duration-300 ease-in-out relative">
        {/* Weather Icon and City Name */}
        <div className="flex items-center justify-between">
          <CardItem translateZ="50" className="text-2xl font-semibold tracking-wide">
            {data.name}
          </CardItem>
          <CardItem translateZ="50" className="w-12 h-12">
            <img
              src={iconUrl || "https://via.placeholder.com/100"}
              alt="Weather Icon"
              className="w-full h-full object-contain"
            />
          </CardItem>
        </div>

        {/* Weather Condition */}
        <CardItem
          as="p"
          translateZ="40"
          className="text-sm mt-2 text-center uppercase text-slate-300">
          {data.weather[0].main}
        </CardItem>

        {/* Temperature */}
        <CardItem
          translateZ="60"
          className="text-5xl font-bold mt-4 text-center text-slate-100">
          {kelvinToCelsius(data.main.temp)}°C
        </CardItem>

        {/* Additional Weather Data */}
        <div className="mt-4 space-y-2">
          {/* Wind Speed */}
          <div className="flex items-center justify-start space-x-2">
            <img
              src="https://img.icons8.com/ios/50/000000/wind.png"
              alt="Wind Icon"
              className="w-6 h-6"
            />
            <p className="text-sm text-slate-300">{data.wind.speed} m/s</p>
          </div>

          {/* Humidity */}
          <div className="flex items-center justify-start space-x-2">
            <img
              src="https://img.icons8.com/ios/50/000000/humidity.png"
              alt="Humidity Icon"
              className="w-6 h-6"
            />
            <p className="text-sm text-slate-300">{data.main.humidity}%</p>
          </div>

          {/* Feels Like */}
          <div className="flex items-center justify-start space-x-2">
            <img
              src="https://img.icons8.com/ios/50/000000/temperature.png"
              alt="Feels Like Icon"
              className="w-6 h-6"
            />
            <p className="text-sm text-slate-300">{kelvinToCelsius(data.main.feels_like)}°C</p>
          </div>

          {/* Visibility */}
          <div className="flex items-center justify-start space-x-2">
            <img
              src="https://img.icons8.com/ios/50/invisible.png"
              alt="Visibility Icon"
              className="w-6 h-6"
            />
            <p className="text-sm text-slate-300">{data.visibility / 1000} km</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center mt-8">
          <CardItem
            translateZ={20}
            as="a"
            href={`https://www.google.com/search?q=weather+in+${data.name}`}
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