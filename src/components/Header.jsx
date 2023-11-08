import React from 'react';
import { StyledHeader } from './styles/Header.styled';

// we can pass props down from the header to the Header.styled for example

const Header = () => {
  return (
    <StyledHeader /*bg="#ebfbff"*/>
      <h1>Hubble</h1>
    </StyledHeader>
  );
};

export default Header;
