import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { StyledProductsList } from "./List/style";
import { ProductCard } from "./ProductCards";
import { ProductContext } from "../../contexts/ProductContext";

export const ProductsSection = () => {
  const { products } = useContext(AuthContext);
  const { addToCart } = useContext(ProductContext);

  return (
    <main className="mainProducts">
      <StyledProductsList>
        <ProductCard />
      </StyledProductsList>
    </main>
  );
};
