import { useContext } from "react";
import trash from "../../../../assets/img/trash.svg";

import { ProductContext } from "../../../../contexts/ProductContext";

export const CartCards = () => {
  const { cart, addToCart, removeToCart, removeComplete } =
    useContext(ProductContext);

  return (
    <>
      {cart.map((product) => (
        <li key={product.id}>
          <img src={product.img} />
          <div className="infoContainer">
            <h2>{product.name}</h2>
            <div className="quantityContainer">
              <span
                className="removeBtns"
                onClick={() => {
                  removeToCart(product);
                }}
              >
                -
              </span>
              <span>{product.quantity}</span>
              <span
                className="addBtm"
                onClick={() => {
                  addToCart(product);
                }}
              >
                +
              </span>
            </div>
          </div>
          <img
            className="deleteBtm"
            src={trash}
            alt="deletar produto"
            onClick={() => {
              removeComplete(product);
            }}
          />
        </li>
      ))}
    </>
  );
};
