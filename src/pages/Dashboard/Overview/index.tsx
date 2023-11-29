import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Header2 from "src/components/Title/Header2";
import FlexContainer from "src/components/FlexBox/FlexContainer";

import { FundContext } from "src/pages/Dashboard";

import OverviewCard from "src/pages/Dashboard/Overview/OverviewCard";
import OverviewSkeleton from "src/pages/Dashboard/Overview/OverviewSkeleton";
import ValueIcon from "src/pages/Dashboard/Overview/Icon/ValueIcon";
import CashIcon from "src/pages/Dashboard/Overview/Icon/CashIcon";
import ProfitIcon from "src/pages/Dashboard/Overview/Icon/ProfitIcon";
import { FundOverview } from "src/types/API";

export const Overview: React.FC<{}> = () => {
  const fund = useContext(FundContext);
  const url = `${process.env.REACT_APP_API_URL}api/fund_overview`;

  const [data, setData] = useState<FundOverview | undefined>(undefined);

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

  return (
    <>
      <Header2>Overview</Header2>
      <FlexContainer>
        {!data && (
          <>
            <OverviewSkeleton />
            <OverviewSkeleton />
            <OverviewSkeleton />
          </>
        )}
        {data && (
          <>
            <OverviewCard
              icon={<ValueIcon />}
              title="Total Value"
              amount={data.total_value}
            />
            <OverviewCard
              icon={<CashIcon />}
              title="Total Cash"
              amount={data.total_cash}
            />
            <OverviewCard
              icon={<ProfitIcon />}
              title="Overall Profit"
              amount={data.overall_profit}
            />
          </>
        )}
      </FlexContainer>
    </>
  );
};

export default Overview;
