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

  return (
    <div className='weather'>
      <div className='weather__content'>
        <h3 className='weather__header'>
          Showing weather in{' '}
          {debouncedCity || (
            <>
              {'{city}'}{' '}
              <span className='weather__small-text'>
                it's not a bug. it's a featue!
              </span>
            </>
          )}
        </h3>
        <div className='weather__content__cards'>
          {isNotFound && <p>{isNotFound}</p>}
        </div>
      </div>
    </div>
  );
}
