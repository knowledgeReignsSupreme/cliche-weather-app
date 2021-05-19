import { useRef } from 'react';
import './App.scss';
import Appbar from './Appbar';

function App() {
  const inputRef = useRef();

  return (
    <>
      <Appbar inputRef={inputRef} />
      <Header />
    </>
  );
}

export default App;

function Header({ inputRef }) {
  function focusOnInput() {
    if (inputRef?.current) inputRef?.current?.focus();
  }

  return (
    <header className='header'>
      <div className='header__content'>
        <div className='header__content__text'>
          <h2>The Cliché Weather App</h2>
          <h3>It's just another weather app.. really</h3>
        </div>
        <button className='header__content__button' onClick={focusOnInput}>
          Okay Weatherboy!
        </button>
      </div>
    </header>
  );
}
