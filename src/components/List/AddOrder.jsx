import React, { useContext } from 'react';
import Modal from 'styled-react-modal';
import { AppContext } from '../../context/AppContext';

const AddOrder = () => {
  const {
    input,
    setInput,
    isModalOpen,
    modalTitle,
    closeModal,
    handleSubmit,
  } = useContext(AppContext);
  return (
    <StyledAddOrder isOpen={isModalOpen}>
      <div className='title'>{modalTitle}</div>
      <form>
        <div className='inputs'>
          <input
            type='text'
            size='10'
            placeholder='drink name'
            value={input.name}
            onChange={e => setInput({ ...input, name: e.target.value })}
            required
          />

          <input
            type='number'
            placeholder='price'
            value={input.price}
            onChange={e => setInput({ ...input, price: e.target.value })}
            required
          />

          <textarea
            rows='2'
            cols='40'
            placeholder='note'
            value={input.note}
            onChange={e => setInput({ ...input, note: e.target.value })}
            required
          />
        </div>

        <button type='button' onClick={() => closeModal()}>
          Cancel
        </button>
        <button type='button' onClick={() => handleSubmit(input)}>
          Comfirm
        </button>
      </form>
    </StyledAddOrder>
  );
};

const StyledAddOrder = Modal.styled`
width: 400px;
height: 200px;
padding-bottom: 20px;
display: flex;
flex-direction: column;
justify-content: space-between;
border: 2px solid ${props => props.theme.colors.red};
background-color: ${props => props.theme.colors.white};
 .title{
   padding-left: 10px;
   height: 20px;
   text-align: left;
   color: ${props => props.theme.colors.white};
   background: ${props => props.theme.colors.red};
 }
 button{
   margin: 0 20px;
 }
 .inputs{
   display: flex;
   flex-direction: column;
   textarea, input{
     margin: 10px;
   }
 }
`;

export default AddOrder;
