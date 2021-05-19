import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

export function useFetchWeather(keyword) {
  const [weatherData, setWeatherData] = useState([]);

  const getWeatherData = useCallback(async () => {
    const data = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${keyword}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEYS}`
    );

    setWeatherData(data);
  }, [keyword]);

  useEffect(() => {
    getWeatherData();
  }, [keyword, getWeatherData]);

  return weatherData;
}
