import { createContext, useContext, useState } from "react";

import { iProducts, AuthContext } from "../AuthContext";

interface iProductContextProps {
  children: React.ReactNode;
}

interface iProductContext {
  addToCart: (item: iProducts) => void;
  removeToCart: (item: iProducts) => void;
  removeComplete: (item: iProducts) => void;
  cart: iProducts[];
  filteredProducts: iProducts[];

  count: number;
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
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
        count,
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
