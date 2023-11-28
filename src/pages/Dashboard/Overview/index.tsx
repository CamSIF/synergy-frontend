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

export const Overview: React.FC<{}> = () => {
  const fund = useContext(FundContext);
  const url = `${process.env.REACT_APP_API_URL}api/fund_overview`;

  const [card, setCard] = useState(
    <>
      <OverviewSkeleton />
      <OverviewSkeleton />
      <OverviewSkeleton />
    </>
  );

  useEffect(() => {
    const req = new FormData();
    req.append("fund", fund);
    setCard(
      <>
        <OverviewSkeleton />
        <OverviewSkeleton />
        <OverviewSkeleton />
      </>
    );
    axios
      .post(url, req)
      .then((response) => {
        setCard(
          <>
            <OverviewCard
              icon={<ValueIcon />}
              title="Total Value"
              amount={response.data.total_value}
            />
            <OverviewCard
              icon={<CashIcon />}
              title="Total Cash"
              amount={response.data.total_cash}
            />
            <OverviewCard
              icon={<ProfitIcon />}
              title="Overall Profit"
              amount={response.data.overall_profit}
            />
          </>
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, [fund, url]);

  return (
    <>
      <Header2>Overview</Header2>
      <FlexContainer>{card}</FlexContainer>
    </>
  );
};

export default Overview;
