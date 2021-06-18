import React from 'react';
import Router from 'Components/Router';

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <a href="/">Movie</a>
        </li>
        <li>
          <a href="/tv">TV</a>
        </li>
        <li>
          <a href="/search">Search</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
