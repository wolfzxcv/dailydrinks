import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { AppContext } from '../../context/AppContext';

const EachOrder = ({ id, name, price, note }) => {
  const { editOrder, removeOrder } = useContext(AppContext);
  return (
    <StyledEachOrder>
      <div className='left'>
        <div className='name'>{name}</div>
        <div>{`$ ${price} - ${note}`}</div>
      </div>
      <div className='right'>
        <i
          onClick={() => editOrder(id)}
          className='fas fa-pencil-alt'
          onKeyDown={() => editOrder(id)}
          aria-label='edit'
          role='button'
          tabIndex='0'
        />
        <i
          onClick={() => removeOrder(id)}
          className='fas fa-trash-alt'
          onKeyDown={() => removeOrder(id)}
          aria-label='edit'
          role='button'
          tabIndex='0'
        />
      </div>
    </StyledEachOrder>
  );
};

const StyledEachOrder = styled.div`
  margin: 20px;
  height: 100px;
  display: flex;
  border: 1px solid ${props => props.theme.colors.red};
  border-radius: 10px;
  background: ${props => props.theme.colors.white};

  .left {
    width: 200px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: ${props => props.theme.colors.fontGray};
    font-size: ${props => props.theme.fontSize[1]};
    .name {
      font-size: ${props => props.theme.fontSize[2]};
      font-weight: 700;
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
        color: ${props => props.theme.colors.red};
      }
    }
  }
`;

EachOrder.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  note: PropTypes.string.isRequired,
};

export default EachOrder;
