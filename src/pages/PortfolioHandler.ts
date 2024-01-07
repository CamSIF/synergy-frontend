import { createContext } from "react";

export const capitalizeWord = (val: string) =>
  val[0].toUpperCase() + val.slice(1).toLowerCase();

export const valueToLabel = (value: string): string => {
  const valueArray = value.split("_");
  const capitalizedValueArray = valueArray.map((val) => capitalizeWord(val));
  return capitalizedValueArray.join(" ");
};

export const AccountContext = createContext("camsif");
export const FundContext = createContext("main");
