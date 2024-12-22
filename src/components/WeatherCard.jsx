import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { FaWind, FaEye, FaTemperatureHalf, FaDroplet } from "react-icons/fa6";
import { IoMdSunny, IoMdRainy, IoMdCloudy, IoMdSnow, IoMdThunderstorm } from "react-icons/io";
import { TbTemperatureCelsius } from "react-icons/tb"
import { BsCloudHaze2Fill, BsCloudDrizzleFill } from "react-icons/bs"

const kelvinToCelsius = (kelvin) => (kelvin - 273.15).toFixed(1);

let icon;
const setIcon = (condn) => {
  switch (condn) {
    case 'Clouds' :
      icon = <IoMdCloudy />
      break
    case 'Hazy' :
      icon = <BsCloudHaze2Fill />
      break
    case 'Rain' :
      icon = <IoMdRainy />
      break
    case 'Clear' :
      icon = <IoMdSunny />
      break
    case 'Drizzle' :
      icon = <BsCloudDrizzleFill />
      break
    case 'Snow' :
      icon = <IoMdSnow />
      break
    case 'Thunderstorm' :
      icon = <IoMdThunderstorm />
      break
  }
}

export function WeatherCard({ data }) {
  // Handle the case when data is null
  if (!data) {
    return <div>Loading...</div>; // Or show an error message if data is not available
  }

  setIcon(data.weather[0].main)

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
          <CardItem translateZ="50" className="w-12 h-12 text-4xl">
            {icon || <IoMdSunny />}
          </CardItem>
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
        <CardItem translateZ="40">
          <div className="mt-4 space-y-2">
            {/* Wind Speed */}
            <div className="flex items-center justify-start space-x-2">
              <FaWind />
              <p className="text-sm text-slate-300">{data.wind.speed} m/s</p>
            </div>

            {/* Humidity */}
            <div className="flex items-center justify-start space-x-2">
              <FaDroplet />
              <p className="text-sm text-slate-300">{data.main.humidity}%</p>
            </div>

            {/* Feels Like */}
            <div className="flex items-center justify-start space-x-2">
              <FaTemperatureHalf />
              <p className="text-sm text-slate-300">{kelvinToCelsius(data.main.feels_like)}°C</p>
            </div>

            {/* Visibility */}
            <div className="flex items-center justify-start space-x-2">
            <FaEye />
              <p className="text-sm text-slate-300">{data.visibility / 1000} km</p>
            </div>
          </div>
        </CardItem>
        

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