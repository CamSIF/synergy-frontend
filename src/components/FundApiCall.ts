import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { AccountContext, FundContext } from "src/pages/Dashboard/DashboardFunction";

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
      .catch((error) => {
        console.log(error);
      });
  }, [account, fund, url]);

  return data;
};

export default FundApiCall;
