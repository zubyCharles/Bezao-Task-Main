import { useEffect } from 'react';
import { createContext, useContext, useReducer, useState } from 'react';
import Menu from './store.json';

const Reducer = (state, action) => {
  switch (action.type) {
    case 'addItem':
      return [
        ...state,
        {
          name: action.name,
          desc: action.desc,
          price: action.price,
          prep: action.prep,
        },
      ];
    default:
      return state;
  }
};

const MenuContext = createContext();

export const useMenu = () => useContext(MenuContext);

const Store = ({ children }) => {
  const [menuArray] = useState(
    JSON.parse(localStorage.getItem('menu')) || Menu
  );

  const [menu, dispatch] = useReducer(Reducer, menuArray);

  useEffect(() => {
    localStorage.setItem('menu', JSON.stringify(menu));
    console.log(menu);
  }, [menu, dispatch]);

  return (
    <MenuContext.Provider value={{ menu, dispatch }}>
      {children}
    </MenuContext.Provider>
  );
};

export default Store;
