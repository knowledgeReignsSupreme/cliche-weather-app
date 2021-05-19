import React from 'react';
import './appbar.scss';

export default function Appbar() {
  return (
    <nav className='nav__outter'>
      <div className='nav__inner'>
        <div className='nav__inner-logo'>
          <h2>Cliché Weather App</h2>
        </div>
      </div>
    </nav>
  );
}
