import React from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';

const StyledList = Styled.ul`
  display:flex;
  &:hover{
    background-color:salmon;
  }
  
`;

const StyledLink = Styled(Link)`
  background: pink;
`;

const Header = () => {
  return (
    <header className="nav">
      <StyledList>
        <li>
          <StyledLink to="/">Movie</StyledLink>
        </li>
        <li>
          <StyledLink to="/tv">TV</StyledLink>
        </li>
        <li>
          <StyledLink to="/search">Search</StyledLink>
        </li>
      </StyledList>
    </header>
  );
};

export default Header;
