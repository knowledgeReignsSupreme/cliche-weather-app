import React, { useState } from 'react';
import './appbar.scss';

export default function Appbar() {
  const [isSearching, setIsSearching] = useState(false);

  function toggleIsSearching() {
    setIsSearching(!isSearching);
  }

  return (
    <nav className='nav__outter'>
      <div className='nav__inner'>
        <div className='nav__inner-logo'>
          <h2>Cliché Weather App</h2>
        </div>
        <SearchBox toggleIsSearching={toggleIsSearching} />
      </div>
    </nav>
  );
}

function SearchBox({ toggleIsSearching }) {
  return (
    <div className='search__box'>
      <input
        className='search__box__input'
        placeholder='Search city...'
        onClick={toggleIsSearching}
      />
      <i class='fas fa-search'></i>
    </div>
  );
}
