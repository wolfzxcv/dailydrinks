import React, { useState, createContext } from 'react';
import uuid from 'uuid';

export const AppContext = createContext();

const AppContextProvider = props => {
  const [input, setInput] = useState({ name: '', price: '', note: '' });
  const [list, setList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('Add new order');
  const [updateById, setUpdateById] = useState('');

  const closeModal = () => {
    setIsModalOpen(false);
    setModalTitle('Add new order');
    setInput({ name: '', price: '', note: '' });
    setUpdateById('');
  };

  const addOrder = data => {
    data.id = uuid.v4();
    setList([...list, data]);
    closeModal();
  };

  const updateCustomer = data => {
    const newList = list.map(l => {
      if (l.id === updateById)
        return { ...l, name: data.name, price: data.price, note: data.note };
      return l;
    });
    setList(newList);
    closeModal();
  };

  const handleSubmit = data => {
    const condition =
      data.name.length > 0 &&
      data.price > 0 &&
      data.price < 9999 &&
      data.note.length > 0;
    if (condition && updateById.length === 0) {
      addOrder(data);
    } else if (condition && updateById.length > 5) {
      updateCustomer(data);
    } else
      alert(`Please fill out all fields\nPrice must be a number between 0~999`);
  };

  const removeOrder = id => {
    const newList = list.filter(d => d.id !== id);
    setList(newList);
  };

  const editOrder = id => {
    const order = list.find(d => d.id === id);
    setModalTitle(`Edit  ${order.name}`);
    setIsModalOpen(true);
    setInput({ name: order.name, price: order.price, note: order.note });
    setUpdateById(id);
  };

  const value = {
    input,
    setInput,
    list,
    setList,
    isModalOpen,
    setIsModalOpen,
    modalTitle,
    setModalTitle,
    updateById,
    setUpdateById,
    closeModal,
    handleSubmit,
    removeOrder,
    editOrder,
  };
  return <AppContext.Provider value={value} {...props} />;
};

export default AppContextProvider;
