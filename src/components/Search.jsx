"use client";

import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import { WeatherCard } from "./WeatherCard";
import { getWeather } from "./services/api"
import { useState, useEffect } from "react";

export function Search() {
    const placeholders = [
        "Is it raining in Tokyo?",
        "Is it sunny in Paris?",
        "How windy is it in Cape Town?",
        "Type in any city you want!"
      ];

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setLocation(searchQuery);
  };

  const [searchQuery, setSearchQuery] = useState(null);
  const [data, setData] = useState(null);
  const [location, setLocation] = useState("Dubai");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await getWeather(location);
        setData(result);
      } catch (error) {
        setError("Failed to fetch weather data.");
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [location]);


  return (
    <div>
        <div className="h-[20rem] flex flex-col justify-center  items-center px-4">
            <PlaceholdersAndVanishInput placeholders={placeholders} onChange={handleChange} onSubmit={onSubmit} />
        </div>

        <WeatherCard data={ data }/>
    </div>
  );
}
