import React from 'react';
import './appbar.scss';

export default function Appbar({ inputRef, setCityKeyword }) {
  return (
    <nav className='nav__outter'>
      <div className='nav__inner'>
        <div
          className='nav__inner-logo'
          onClick={() => inputRef?.current.focus()}
        >
          <h3>Cliché Weather App</h3>
        </div>
        <SearchBox inputRef={inputRef} setCityKeyword={setCityKeyword} />
      </div>
    </nav>
  );
}

function SearchBox({ inputRef, setCityKeyword }) {
  return (
    <div className='search__box'>
      <input
        ref={inputRef}
        className='search__box__input'
        placeholder='Search city...'
        onChange={setCityKeyword}
      />
      <i className='fas fa-search'></i>
    </div>
  );
}
