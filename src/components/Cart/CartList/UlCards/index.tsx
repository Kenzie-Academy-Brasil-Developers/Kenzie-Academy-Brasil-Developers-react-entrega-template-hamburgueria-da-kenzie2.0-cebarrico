import { CartCards } from "../CartCards";
import { useContext } from "react";
import { StyledUlCart } from "./style";

import { ProductContext } from "../../../../contexts/ProductContext";

export const CardsUl = () => {
  const { cart } = useContext(ProductContext);
  return (
    <StyledUlCart>
      <CartCards />
    </StyledUlCart>
  );
};
