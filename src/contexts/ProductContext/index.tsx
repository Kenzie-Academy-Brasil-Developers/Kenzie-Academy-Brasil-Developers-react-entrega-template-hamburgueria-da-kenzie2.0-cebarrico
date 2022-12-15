import { createContext, useState, useContext } from "react";

import { iProducts } from "../AuthContext";
import { iProductContext } from "./types";

import { AuthContext } from "../AuthContext";

interface iProductContextProps {
  children: React.ReactNode;
}

export const ProductContext = createContext<iProductContext>(
  {} as iProductContext
);

export const ProductProvider = ({ children }: iProductContextProps) => {
  const { products } = useContext(AuthContext);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState<iProducts[]>([] as iProducts[]);
  const [filter, setFilter] = useState("");

  const filterLowerCase = filter.toLowerCase();

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(filterLowerCase) ||
      product.category.toLowerCase().includes(filterLowerCase)
  );

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
      value={{
        addToCart,
        cart,
        setCart,
        count,
        setCount,
        removeToCart,
        removeComplete,
        filteredProducts,
        filter,
        setFilter,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
