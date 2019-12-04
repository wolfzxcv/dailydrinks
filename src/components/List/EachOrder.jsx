import React from 'react';
import styled from 'styled-components';

const EachOrder = () => {
  return (
    <StyledEachOrder>
      <div className='left'>
        <div className='name-price'>
          <div>NAME</div>
          <div>PRICE</div>
        </div>
        <div className='note'>NOTE</div>
      </div>
      <div className='right'>
        <i className='fas fa-pencil-alt' />
        <i className='fas fa-trash-alt' />
      </div>
    </StyledEachOrder>
  );
};

const StyledEachOrder = styled.div`
  margin: 20px;
  height: 100px;
  display: flex;
  div {
    border: 1px solid red;
  }
  .left {
    width: 200px;
    display: flex;
    flex-direction: column;
    .name-price {
      display: flex;
    }
  }

  .right {
    width: 50px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    i {
      font-size: ${props => props.theme.fontSize[2]};
      &:hover {
        cursor: pointer;
        color: ${props => props.theme.colors.white};
      }
    }
  }
`;

export default EachOrder;
