import React from "react";
import Header2 from "src/components/Title/Header2";
import FlexContainer from "src/components/FlexBox/FlexContainer";

import OverviewCard from "src/pages/Dashboard/Overview/OverviewCard";

import ValueIcon from "src/pages/Dashboard/Overview/Icon/ValueIcon";
import CashIcon from "src/pages/Dashboard/Overview/Icon/CashIcon";
import ProfitIcon from "src/pages/Dashboard/Overview/Icon/ProfitIcon";

export const Overview: React.FC<{}> = () => {
  return (
    <>
      <Header2>Overview</Header2>
      <FlexContainer>
        <OverviewCard
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
        />
      </FlexContainer>
    </>
  );
};

export default Overview;
