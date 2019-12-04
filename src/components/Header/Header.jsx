import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <StyledHeader>
      <div className='header-flex'>
        <img src={logo} alt='logo' />
        <i className='fas fa-plus-circle' />
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  z-index: 1;
  background: ${props => props.theme.colors.red};
  .header-flex {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 80px;
    }
    i {
      font-size: ${props => props.theme.fontSize[2]};
      &:hover {
        cursor: pointer;
        color: ${props => props.theme.colors.white};
      }
    }
  }
`;

export default Header;
