import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import { WeatherCard } from "./WeatherCard";
import { getWeather } from "./services/api";
import { useState, useEffect } from "react";

export function Search() {
  const placeholders = [
    "Is it raining in Tokyo?",
    "Is it sunny in Paris?",
    "How windy is it in Cape Town?",
    "Type in any city or country",
  ];

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setLocation(searchQuery);
    setError(null); // Reset any previous error
  };

  const [searchQuery, setSearchQuery] = useState("");
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
    <div className="flex flex-col justify-center">
      <div className="h-[12rem] mt-20 flex flex-col justify-center items-center px-4">
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
        {error && (
          <div className="text-red-500 mt-2 text-center">{error}</div>
        )}
      </div>
      {data && <WeatherCard data={data} />}
    </div>
  );
}