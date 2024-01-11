import { Currency } from "../../types";

export interface SelectProps {
  value: Currency;
  setValue: (option: Currency) => void;
  options: Currency[];
  onSelect: (option: Currency) => void;
}
