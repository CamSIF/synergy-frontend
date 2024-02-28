import { createContext } from "react";
import { styled } from "@mui/material";

export const capitalizeWord = (val: string) =>
  val[0].toUpperCase() + val.slice(1).toLowerCase();

export const valueToLabel = (value: string): string => {
  const valueArray = value.split("_");
  const capitalizedValueArray = valueArray.map((val) => capitalizeWord(val));
  return capitalizedValueArray.join(" ");
};

const queryParameters = new URLSearchParams(window.location.search);
export const defaultFund = "main";
export const defaultAccount = "camsif";
export const initialFund = queryParameters.get("fund") ?? defaultFund;
export const initialAccount = queryParameters.get("account") ?? defaultAccount;
export const AccountContext = createContext(defaultAccount);
export const FundContext = createContext(defaultFund);

export const StyledDiv = styled("div")({
  height: "80px",
});
