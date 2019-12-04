import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <StyledFooter>
      <img src={logo} alt='logo' />
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  width: 100%;
  img {
    width: 50px;
  }
`;

export default Footer;
