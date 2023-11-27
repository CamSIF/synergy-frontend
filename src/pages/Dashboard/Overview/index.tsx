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
    axios
      .post(url, { fund: fund })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Header2>Overview</Header2>
      <FlexContainer>
        {/* <OverviewCard
          icon={<ValueIcon />}
          title="Total Value"
          amount={11000000.122}
        />
        <OverviewCard
          icon={<CashIcon />}
          title="Total Cash"
          amount={11000000.122}
        />
        <OverviewCard
          icon={<ProfitIcon />}
          title="Today's Profit"
          amount={11000000.122}
        /> */}
        {card}
      </FlexContainer>
    </>
  );
};

export default Overview;
