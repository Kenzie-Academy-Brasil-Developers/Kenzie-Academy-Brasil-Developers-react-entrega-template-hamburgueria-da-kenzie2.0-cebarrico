import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ProductContext } from "../../contexts/ProductContext";

import logo from "../../assets/img/logo.svg";
import searchIcon from "../../assets/img/search.svg";
import cartIcon from "../../assets/img/cart.svg";
import logoutIcon from "../../assets/img/logout.svg";

import { StyledNav } from "./style";
import { LogoDefaul } from "../Logo/Logo";
import { ModalCart } from "../Cart";

export const HeaderHome = () => {
  const { count, filter, setFilter } = useContext(ProductContext);
  const [inputStatus, setInputStatus] = useState(false);
  const [cartStatus, setCartStatus] = useState<boolean>(false);

  const navigate = useNavigate();

  function showInput() {
    if (inputStatus) {
      setInputStatus(false);
    } else {
      setInputStatus(true);
    }
  }

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

        {inputStatus ? (
          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        ) : null}

        <div>
          <img src={searchIcon} alt="buscar" onClick={showInput} />
          <img src={cartIcon} alt="carrinho" onClick={showCart} />
          {count > 0 ? <span>{count}</span> : null}
          <img src={logoutIcon} alt="logout" onClick={logout} />
        </div>
      </StyledNav>
    </header>
  );
};
