import { StyledProductsList } from "./List/style";
import { ProductCard } from "./ProductCards";

export const ProductsSection = () => {
  return (
    <main className="mainProducts">
      <StyledProductsList>
        <ProductCard />
      </StyledProductsList>
    </main>
  );
};
