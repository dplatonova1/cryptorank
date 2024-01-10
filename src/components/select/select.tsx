import React, { memo, useCallback, useState } from "react";
import {
  CurrencyImage,
  CurrencySelectBox,
  CurrencyOption,
  CurrencyName,
  Options,
  ArrowIconStyled,
  CurrencyNameWrapper,
} from "./styles";
import { Currency } from "../currency-card/types";

interface SelectProps {
  value: Currency;
  setValue: (option: Currency) => void;
  options: Currency[];
  onSelect: (option: Currency) => void;
}

export const Select = (props: SelectProps) => {
  const { options, onSelect, value, setValue } = props;

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = useCallback(
    (option: Currency) => {
      setValue(option);
      onSelect(option);
      setIsOpen(false);
    },
    [setValue, onSelect]
  );
  return (
    <CurrencySelectBox onClick={toggleOpen}>
      <CurrencyName>
        <CurrencyNameWrapper>
          <CurrencyImage src={value.images["16x16"]} alt={value.name} />
          <p>{value.name}</p>
        </CurrencyNameWrapper>
        <ArrowIconStyled isOpen={isOpen} />
      </CurrencyName>
      {isOpen && (
        <Options>
          {options.map((option, index) => (
            <CurrencyOption key={index} onClick={() => handleSelect(option)}>
              <CurrencyImage src={option.images["16x16"]} alt={option.symbol} />
              {option.name}
            </CurrencyOption>
          ))}
        </Options>
      )}
    </CurrencySelectBox>
  );
};

export default Select;
