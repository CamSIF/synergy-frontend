import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { FundContext } from "src/pages/Dashboard";

export const ApiCall = <Data>(url: string) => {
  const fund = useContext(FundContext);
  const [data, setData] = useState<Data | undefined>(undefined);

  useEffect(() => {
    const req = new FormData();
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
  }, [fund, url]);

  return data
};

export default ApiCall
