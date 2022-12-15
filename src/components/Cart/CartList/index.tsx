import { useContext } from "react";

import { ProductContext } from "../../../contexts/ProductContext";

import { CardsUl } from "./UlCards";

export const CardList = () => {
  const { cart, setCart, setCount } = useContext(ProductContext);
  const total = cart
    .map((item) => item.price * item.quantity)
    .reduce((total, currentElemnt) => total + currentElemnt, 0);

  return (
    <>
      <CardsUl />

      <div className="totalContainer">
        <p>Total</p>
        <span>R$ {total.toFixed(2)} </span>
      </div>
      <div className="finishContainer">
        <button className="buyBtm">Finalizar Compra</button>

        <button
          className="removeAllBtm"
          onClick={() => {
            setCart([]);
            setCount(0);
          }}
        >
          Remover Todos
        </button>
      </div>
    </>
  );
};
