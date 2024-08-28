import { useState } from "react";
import { getCurrentWeather } from "./services/api";
import { weatherData } from "./types/server";

const cities = [
  {
    id: 1,
    name: "tehran",
    lat: "35.7219",
    lon: "51.3347",
  },
  {
    id: 2,
    name: "ahvaz",
    lat: "31.3183",
    lon: "48.6706",
  },
  {
    id: 3,
    name: "yazd",
    lat: "31.8974",
    lon: "54.3569",
  },
];
interface City {
  id: number;
  name: string;
  lat: string;
  lon: string;
}
function App() {
  const [weatherDate, setWeatherData] = useState<weatherData>();
  const [nameCity, setNameCity] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    // console.log(JSON.parse(value));
    setNameCity(JSON.parse(value).name);
    const selectLocation: City = JSON.parse(value);
    getCurrentWeather({
      lat: selectLocation.lat,
      lon: selectLocation.lon,
    }).then((res) => {
      setWeatherData(res);
    });
  };
  return (
    <>
      <h1>weather App</h1>
      <h2>{nameCity}</h2>
      <h3>pressure : {weatherDate?.main.pressure}</h3>
      <h3>temp : {weatherDate?.main.temp}</h3>
      <h3>speed : {weatherDate?.wind.speed}</h3>

      <select onChange={handleChange}>
        {cities.map((item) => (
          <option key={item.id} value={JSON.stringify(item)}>
            {item.name}
          </option>
        ))}
      </select>
    </>
  );
}

export default App;
