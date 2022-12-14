import { HeaderHome } from "../../components/NavHome";
import { ProductsSection } from "../../components/ProductsList";
import { ProductProvider } from "../../contexts/ProductContext";

export const HomePage = () => {
  return (
    <>
      <ProductProvider>
        <HeaderHome />
        <ProductsSection />
      </ProductProvider>
    </>
  );
};
