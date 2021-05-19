import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

export function useFetchWeather(keyword) {
  const [weatherData, setWeatherData] = useState([]);

  const getWeatherData = useCallback(async () => {
    if (!keyword) return;

    try {
      const { data } = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${
          keyword ?? 'tel-aviv'
        }&units=metric&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEYS}`
      );

      console.log(data);

      setWeatherData(data);
    } catch (error) {}
  }, [keyword]);

  useEffect(() => {
    getWeatherData();
  }, [keyword, getWeatherData]);

  return weatherData;
}
