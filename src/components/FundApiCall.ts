import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { enqueueAlertStack } from "src/components/AlertStack";
import {
  AccountContext,
  FundContext,
  valueToLabel,
} from "src/pages/Dashboard/PortfolioHandler";

export const FundApiCall = <Data>(url: string) => {
  const account = useContext(AccountContext);
  const fund = useContext(FundContext);
  const [data, setData] = useState<Data | undefined>(undefined);

  useEffect(() => {
    const req = new FormData();
    req.append("account", account);
    req.append("fund", fund);
    setData(undefined);
    axios
      .post(url, req)
      .then((response) => {
        setData(response.data);
      })
      .catch(() => {
        enqueueAlertStack(
          `Some data from the portfolio '${valueToLabel(account)} ${valueToLabel(
            fund
          )}' cannot be found`,
          "error"
        );
      });
  }, [account, fund, url]);

  return data;
};

export default FundApiCall;
