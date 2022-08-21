import { useState } from 'react';
import { useMenu } from '../store';
import { NavLink } from 'react-router-dom';

const Admin = () => {
  const [itemName, setItemName] = useState('');

  const [itemPrice, setItemPrice] = useState('');

  const [prepTime, setTime] = useState('');

  const [description, setDescription] = useState('');

  const { dispatch } = useMenu();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: 'addItem',
      name: itemName,
      price: itemPrice,
      prep: prepTime,
      desc: description,
    });

    setItemName('');
    setItemPrice('');
    setTime('');
    setDescription('');
  };

  return (
    <>
      <div className="pt-5 pl-10">
        <NavLink to="/">
          <button className="text-blue-700 py-1 px-4 rounded-[30px] border border-blue-700">
            Home
          </button>
        </NavLink>
      </div>
      <div className="w-[20%] pt-10 mx-auto">
        <p className="text-center">Add New Item To Menu</p>
      </div>
      <div className="w-[20%] px-2 py-6 my-5 mx-auto border border-slate-400">
        <form onSubmit={handleSubmit}>
          <div className="p-2">
            <p>Food</p>
            <input
              className="w-[100%] pl-2 py-1 border border-slate-400 outline-none"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              type="text"
              placeholder="Enter food name..."
            />
          </div>
          <div className="p-2">
            <p>Price</p>
            <input
              className="w-[100%] pl-2 py-1 border border-slate-400 outline-none"
              value={itemPrice}
              onChange={(e) => setItemPrice(e.target.value)}
              type="text"
              placeholder="Example (N10)"
            />
          </div>
          <div className="p-2">
            <p>Prep time</p>
            <input
              className="w-[100%] pl-2 py-1 border border-slate-400 outline-none"
              value={prepTime}
              onChange={(e) => setTime(e.target.value)}
              type="text"
              placeholder="Example (10 MINS)"
            />
          </div>
          <div className="p-2">
            <textarea
              className="w-[100%] pl-2 py-1 border border-slate-400 outline-none"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="3"
              placeholder="add item description"
            />
          </div>
          <div className="w-fit pt-6 mx-auto">
            <button className="text-white py-1 px-4 bg-blue-700" type="submit">
              Add Item
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Admin;
