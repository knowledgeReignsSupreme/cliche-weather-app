import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

export function useFetchWeather(keyword, setIsNotFound) {
  const [weatherData, setWeatherData] = useState({});

  const getWeatherData = useCallback(async () => {
    if (!keyword) return;

    try {
      setIsNotFound(false);

      const { data } = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${
          keyword ?? 'tel-aviv'
        }&units=metric&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEYS}`
      );
      setWeatherData(data);
    } catch (error) {
      if (error?.response?.status === 404) {
        setIsNotFound(`City ${keyword} was not found.`);
        setWeatherData({});
      }
    }
  }, [keyword, setIsNotFound]);

  useEffect(() => {
    getWeatherData();
  }, [keyword, getWeatherData]);

  return weatherData;
}
