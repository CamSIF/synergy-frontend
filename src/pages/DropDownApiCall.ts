import { useEffect } from "react";
import axios from "axios";
import { enqueueAlertStack } from "src/components/AlertStack";
import {
  valueToLabel,
  defaultAccount,
  defaultFund,
} from "src/pages/PortfolioHandler";
import { AccountFunds } from "src/types/API";

const url = `${process.env.REACT_APP_API_URL}api/get_all_account_funds`;

export const DropDownApiCall = (
  fund: string,
  account: string,
  setFund: React.Dispatch<React.SetStateAction<string>>,
  setFundList: React.Dispatch<React.SetStateAction<string[] | undefined>>,
  setAccount: React.Dispatch<React.SetStateAction<string>>,
  setAccountList: React.Dispatch<React.SetStateAction<string[] | undefined>>,
  setAccountFundMap: React.Dispatch<
    React.SetStateAction<AccountFunds | undefined>
  >
) => {
  useEffect(() => {
    axios
      .post(url)
      .then((response) => {
        const resAccountFundMap = response.data;
        const resAccountList = Object.keys(resAccountFundMap);
        const resFundList = resAccountFundMap[account];
        setAccountFundMap(resAccountFundMap);
        setAccountList(resAccountList);
        setFundList(resFundList);
        if (!resAccountList.includes(account) || !resFundList.includes(fund)) {
          setAccount(defaultAccount);
          setFund(defaultFund);
          enqueueAlertStack(
            `Invalid link with account '${account}' and fund '${fund}'. Display default portfolio '${valueToLabel(
              defaultAccount
            )} ${valueToLabel(defaultFund)}'`,
            "error"
          );
        }
      })
      .catch(() => {
        enqueueAlertStack(
          `Error loading the list of funds from the account '${valueToLabel(
            account
          )}'`,
          "error"
        );
      });
  }, [
    fund,
    account,
    setAccount,
    setAccountList,
    setFund,
    setFundList,
    setAccountFundMap,
  ]);
};
