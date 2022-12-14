import { useContext, useState } from "react";

import { ProductContext } from "../../../contexts/ProductContext";
import { AuthContext } from "../../../contexts/AuthContext";

import { ButtonDefault } from "../../../styles/buttons";

export const ProductCard = () => {
  const { addToCart, cart } = useContext(ProductContext);
  const { products } = useContext(AuthContext);

  return (
    <>
      {products.map((product) => (
        <li key={product.id}>
          <img src={product.img} />
          <h2>{product.name}</h2>
          <span>{product.category}</span>
          <p>R$ {product.price.toFixed(2)} </p>
          <ButtonDefault
            type="button"
            onClick={() => {
              addToCart(product);
            }}
          >
            Adcionar
          </ButtonDefault>
        </li>
      ))}
    </>
  );
};
