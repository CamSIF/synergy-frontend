import { createContext } from "react";

export const capitalizedFund = (val: string) =>
  val[0].toUpperCase() + val.slice(1).toLowerCase();

export const fundToLabel = (fund: string): string => {
  const fundArray = fund.split("_");
  const capitalizedFundArray = fundArray.map((val) => capitalizedFund(val));
  return capitalizedFundArray.join(" ");
};

export const AccountContext = createContext("camsif");
export const FundContext = createContext("main");