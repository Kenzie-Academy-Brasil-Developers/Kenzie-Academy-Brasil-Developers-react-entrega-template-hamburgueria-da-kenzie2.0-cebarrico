import { iProducts } from "../AuthContext";

export interface iProductContext {
  addToCart: (item: iProducts) => void;
  removeToCart: (item: iProducts) => void;
  removeComplete: (item: iProducts) => void;
  cart: iProducts[];
  setCart: React.Dispatch<React.SetStateAction<iProducts[]>>;

  filteredProducts: iProducts[];
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}
