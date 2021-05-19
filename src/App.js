import { useEffect, useRef, useState } from 'react';
import './App.scss';
import Appbar from './Appbar';

function App() {
  const inputRef = useRef();
  const [isSearching, setIsSearching] = useState(false);

  function toggleIsSearching() {
    setIsSearching(!isSearching);
  }

  useEffect(() => {
    if (isSearching) inputRef?.current?.focus();
  }, [isSearching]);

  return (
    <>
      <Appbar inputRef={inputRef} />
      <Header toggleIsSearching={toggleIsSearching} />
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
