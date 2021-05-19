import React, { useState } from 'react';
import './appbar.scss';

export default function Appbar({ inputRef }) {
  return (
    <nav className='nav__outter'>
      <div className='nav__inner'>
        <div
          className='nav__inner-logo'
          onClick={() => inputRef?.current.focus()}
        >
          <h3>Cliché Weather App</h3>
        </div>
        <SearchBox inputRef={inputRef} />
      </div>
    </nav>
  );
}

function SearchBox({ inputRef }) {
  return (
    <div className='search__box'>
      <input
        ref={inputRef}
        className='search__box__input'
        placeholder='Search city...'
      />
      <i class='fas fa-search'></i>
    </div>
  );
}
