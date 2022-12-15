import { useState, useContext } from "react";

import { ProductContext } from "../../../contexts/ProductContext";

import { SearchInputStyle } from "./style";
import Icon from "../../../assets/img/search.svg";
import greenSearch from "../../../assets/img/greensearch.svg";

export const SearchInput = () => {
  const { filter, setFilter } = useContext(ProductContext);

  const [inputStatus, setInputStatus] = useState(false);
  function showInput() {
    if (inputStatus) {
      setInputStatus(false);
    } else {
      setInputStatus(true);
    }
  }
  return (
    <SearchInputStyle>
      {inputStatus ? (
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      ) : null}
      {inputStatus ? (
        <img src={greenSearch} alt="" onClick={showInput} />
      ) : (
        <img src={Icon} alt="" onClick={showInput} />
      )}
    </SearchInputStyle>
  );
};
