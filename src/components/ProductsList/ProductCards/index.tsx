import { useContext } from "react";

import { ProductContext } from "../../../contexts/ProductContext";

import { ButtonDefault } from "../../../styles/buttons";

export const ProductCard = () => {
  const { addToCart, filteredProducts } = useContext(ProductContext);

  return (
    <>
      {filteredProducts.map((product) => (
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
