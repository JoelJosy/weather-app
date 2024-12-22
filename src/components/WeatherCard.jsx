import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { FaWind, FaEye, FaTemperatureHalf, FaDroplet } from "react-icons/fa6";
import { IoMdSunny, IoMdRainy, IoMdCloudy, IoMdSnow, IoMdThunderstorm } from "react-icons/io";
import { TbTemperatureCelsius } from "react-icons/tb"
import { BsCloudHaze2Fill, BsCloudDrizzleFill } from "react-icons/bs"

const kelvinToCelsius = (kelvin) => (kelvin - 273.15).toFixed(0);

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

export function WeatherCard({ data, onSubmit }) {
  // Handle the case when data is null
  if (!data) {
    return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center justify-center">
        <div className="loading loading-spinner loading-lg mb-4"></div>
        <p className="text-white text-xl">Loading weather data...</p>
      </div>
    </div>
    )
  }

  setIcon(data.weather[0].main)

  return (
    <CardContainer className="inter-var">
      <CardBody
        className="bg-slate-800 text-white shadow-lg w-auto sm:w-[30rem] h-auto rounded-xl p-6 border border-slate-600 hover:shadow-xl hover:shadow-slate-900 transition-all duration-300 ease-in-out relative">
        {/* Weather Icon and City Name */}
        <div className="flex items-center gap-6">
          <CardItem translateZ="70" className="w-12= h-12 text-7xl">
            {icon || <IoMdSunny />}
          </CardItem>
          {/* Weather Condition */}
          <CardItem translateZ="50" className="pt-5 tracking-wide">
            <div className="font-semibold text-2xl">
              {data.name}, {data.sys.country}
            </div>
            
            <div className="text-sm mt-2 uppercase text-slate-300">
              {data.weather[0].description}
            </div>
          </CardItem>
        </div>


        {/* Temperature */}
        <div className="flex justify-center items-center my-10 text-center gap-3 min-w-full min-h-24">
          <CardItem
            translateZ="70"
            className="text-9xl font-semibold text-center text-slate-100">
            {kelvinToCelsius(data.main.temp)}
          </CardItem>
          <CardItem
            translateZ="50"
            className="text-5xl text-center text-slate-100">
            °C
          </CardItem>
        </div>

        {/* Additional Weather Data */}
        <CardItem translateZ="40">
          
        <div className="flex gap-20">
          <div className="flex flex-col gap-5">
            {/* Wind Speed */}
            <div className="flex items-center justify-start space-x-2">
              <FaWind />
              <p className="text-base text-slate-300"> Wind Speed: {data.wind.speed} m/s</p>
            </div>

            {/* Humidity */}
            <div className="flex items-center justify-start space-x-2">
              <FaDroplet />
              <p className="text-base text-slate-300">Humidity: {data.main.humidity}%</p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            {/* Feels Like */}
            <div className="flex items-center justify-start space-x-2">
              <FaTemperatureHalf />
              <p className="text-base text-slate-300">Feels Like: {kelvinToCelsius(data.main.feels_like)}°C</p>
            </div>

            {/* Visibility */}
            <div className="flex items-center justify-start space-x-2">
            <FaEye />
              <p className="text- text-slate-300">Visibility: {data.visibility / 1000} km</p>
            </div>
          </div>
          </div>
        </CardItem>
        

        {/* Action Buttons */}
        <div className="flex justify-between items-center mt-10">
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