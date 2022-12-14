import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import { ModalContainer } from "../../styles/modal";
import { CardList } from "./CartList";

interface iModalCard {
  setCartStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalCart = ({ setCartStatus }: iModalCard) => {
  const { cart } = useContext(ProductContext);

  function closeCart() {
    setCartStatus(false);
  }

  return (
    <ModalContainer>
      <div className="modalContainer">
        <div className="cartHeader">
          <h3>Carrinho de Compras</h3>
          <button onClick={closeCart}>x</button>
        </div>
        {cart.length > 0 ? <CardList /> : <h5>Sua sacola esta vazia</h5>}
      </div>
    </ModalContainer>
  );
};
