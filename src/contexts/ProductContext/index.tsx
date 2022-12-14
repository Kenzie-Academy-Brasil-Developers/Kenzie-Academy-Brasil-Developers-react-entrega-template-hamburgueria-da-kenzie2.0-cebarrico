import { createContext, useContext, useState } from "react";

import { iProducts } from "../AuthContext";

interface iProductContextProps {
  children: React.ReactNode;
}

interface iProductContext {
  addToCart: (item: iProducts) => void;
  removeToCart: (item: iProducts) => void;
  removeComplete: (item: iProducts) => void;
  cart: iProducts[];
  count: number;
}

export const ProductContext = createContext<iProductContext>(
  {} as iProductContext
);

export const ProductProvider = ({ children }: iProductContextProps) => {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState<iProducts[]>([] as iProducts[]);
  const [cartStatus, setCartStatus] = useState<boolean>(false);

  function addToCart(item: iProducts) {
    if (!cart.includes(item)) {
      setCart([...cart, item]);
      item.quantity = 1;
      setCount(count + 1);
    } else {
      item.quantity = item.quantity + 1;
      setCount(count + 1);
    }
  }

  function removeToCart(item: iProducts) {
    if (item.quantity > 1) {
      item.quantity = item.quantity - 1;
      setCount(count - 1);
    } else {
      const removeList = setCart(
        cart.filter((product) => product.id !== item.id)
      );
      item.quantity = item.quantity - 1;
      setCount(count - 1);
    }
  }

  function removeComplete(item: iProducts) {
    item.quantity = 0;
    setCount(item.quantity);
    const removeList = setCart(
      cart.filter((product) => product.id !== item.id)
    );
  }

  return (
    <ProductContext.Provider
      value={{ addToCart, cart, count, removeToCart, removeComplete }}
    >
      {children}
    </ProductContext.Provider>
  );
};
