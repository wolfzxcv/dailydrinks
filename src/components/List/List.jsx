import React from 'react';
import styled from 'styled-components';
import EachOrder from './EachOrder';

const List = () => {
  return (
    <StyledList>
      <EachOrder />
      <EachOrder />
      <EachOrder />
      <EachOrder />
      <EachOrder />
      <EachOrder />
      <EachOrder />
      <EachOrder />
      <EachOrder />
      <EachOrder />
      <EachOrder />
      <EachOrder />
      <EachOrder />
      <EachOrder />
    </StyledList>
  );
};

const StyledList = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default List;
