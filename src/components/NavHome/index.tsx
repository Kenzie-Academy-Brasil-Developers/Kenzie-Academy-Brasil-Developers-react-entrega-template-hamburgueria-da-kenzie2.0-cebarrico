import { useNavigate } from "react-router-dom";

import { StyledNav } from "./style";
import { ButtonDefault } from "../../styles/buttons";

export const HeaderHome = () => {
  const navigate = useNavigate();
  function logout() {
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <header>
      <StyledNav>
        <h1>Kenzie burger</h1>
        <div>
          <input
            type="text"
            // value={filter}
            // onChange={(e) => setFilter(e.target.value)}
          />
          <ButtonDefault>Pesquisar</ButtonDefault>
          <button onClick={logout}>Logout</button>
        </div>
      </StyledNav>
    </header>
  );
};
