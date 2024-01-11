import { Currency } from "../../types";

export interface SelectProps {
  value: Currency;
  options: Currency[];
  onSelect: (option: Currency) => void;
}
