import React, { useContext } from 'react';
import { ModalProvider } from 'styled-react-modal';
import styled from 'styled-components';
import { AppContext } from '../../context/AppContext';
import EachOrder from './EachOrder';
import AddOrder from './AddOrder';

const List = () => {
  const { list } = useContext(AppContext);

  return (
    <ModalProvider>
      <AddOrder />
      <StyledList>
        {list.map(d => (
          <EachOrder
            key={d.id}
            id={d.id}
            name={d.name}
            price={d.price}
            note={d.note}
          />
        ))}
      </StyledList>
    </ModalProvider>
  );
};

const StyledList = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: ${props => props.theme.fonts.main};
`;

export default List;
