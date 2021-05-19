import { useEffect, useRef, useState } from 'react';
import './App.scss';
import Appbar from './Appbar';
import { useDebounce } from './useDebounce';
import { useFetchWeather } from './useFetchWeather';

function App() {
  const inputRef = useRef();
  const [isSearching, setIsSearching] = useState(false);
  const [city, setCity] = useState('');
  const debouncedCity = useDebounce(city);

  function toggleIsSearching() {
    setIsSearching(!isSearching);
  }

  function setCityKeyword(e) {
    setCity(e.target.value);
  }

  useEffect(() => {
    if (isSearching) inputRef?.current?.focus();
  }, [isSearching]);

  return (
    <>
      <Appbar inputRef={inputRef} setCityKeyword={setCityKeyword} />
      <Header toggleIsSearching={toggleIsSearching} />
      <WeatherDisplay debouncedCity={debouncedCity} />
    </>
  );
}

export default App;

function Header({ toggleIsSearching }) {
  return (
    <header className='header'>
      <div className='header__content'>
        <div className='header__content__text'>
          <h2>The Cliché Weather App</h2>
          <h3>It's just another weather app.. really</h3>
        </div>
        <button className='header__content__button' onClick={toggleIsSearching}>
          Okay Weatherboy!
        </button>
      </div>
    </header>
  );
}

function WeatherDisplay({ debouncedCity }) {
  const [isNotFound, setIsNotFound] = useState(false);
  const weatherData = useFetchWeather(debouncedCity, setIsNotFound);

  const isEmpty = Object.keys(weatherData).length === 0;

  return (
    <div className='weather'>
      <div className='weather__content'>
        <h3 className='weather__header'>
          Showing weather in{' '}
          {weatherData?.name
            ? weatherData?.name
            : debouncedCity || (
                <>
                  {'{city}'}{' '}
                  <span className='weather__small-text'>
                    it's not a bug. it's a featue!
                  </span>
                </>
              )}
        </h3>
        <div className='weather__content__cards'>
          {isNotFound ? (
            <p>{isNotFound}</p>
          ) : (
            !isEmpty && <WeatherCard weatherData={weatherData} />
          )}
        </div>
      </div>
    </div>
  );
}

function WeatherCard({ weatherData }) {
  const { name } = weatherData;
  const { main } = weatherData;
  const countryCode = weatherData?.sys?.country;
  let description;
  let iconCode;

  if (weatherData?.weather) {
    description = weatherData?.weather[0]?.description;
    iconCode = weatherData?.weather[0]?.icon;
  }

  const isHot = main?.temp > 23;

  return (
    <div className='weather__card'>
      <div className='weather__card__city'>
        <h3>{name}</h3>
        <p className={isHot ? 'sunny-weather' : 'rainy-weather'}>
          {countryCode}
        </p>
      </div>
      <img
        src={`http://openweathermap.org/img/wn/${iconCode}@2x.png`}
        alt={`${description} icon`}
      />
      <div className='weather__card__temp'>
        <p>{main && main.temp.toFixed(0)} °C</p>
      </div>
      <div className='weather__card__desc'>
        <p>{description && description.toUpperCase()}</p>
      </div>
    </div>
  );
}
