import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ProductContext } from "../../contexts/ProductContext";

import logo from "../../assets/img/logo.svg";

import cartIcon from "../../assets/img/cart.svg";
import logoutIcon from "../../assets/img/logout.svg";

import { StyledNav } from "./style";
import { SearchInput } from "../Inputs/SearchInput";
import { LogoDefaul } from "../Logo/Logo";
import { ModalCart } from "../Cart";

export const HeaderHome = () => {
  const { count } = useContext(ProductContext);

  const [cartStatus, setCartStatus] = useState<boolean>(false);

  const navigate = useNavigate();

  function showCart() {
    if (cartStatus) {
      setCartStatus(false);
    } else {
      setCartStatus(true);
    }
  }

  function logout() {
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <header>
      {cartStatus ? <ModalCart setCartStatus={setCartStatus} /> : null}

      <StyledNav>
        <LogoDefaul src={logo} />

        <div>
          <SearchInput />
          <img src={cartIcon} alt="carrinho" onClick={showCart} />
          {count > 0 ? <span>{count}</span> : null}
          <img src={logoutIcon} alt="logout" onClick={logout} />
        </div>
      </StyledNav>
    </header>
  );
};
