import React from "react";
import Header2 from "src/components/Title/Header2";
import FlexContainer from "src/components/FlexBox/FlexContainer";

import OverviewCard from "src/pages/Dashboard/Overview/OverviewCard";
import OverviewSkeleton from "src/pages/Dashboard/Overview/OverviewSkeleton";
import ValueIcon from "src/pages/Dashboard/Overview/Icon/ValueIcon";
import CashIcon from "src/pages/Dashboard/Overview/Icon/CashIcon";
import ProfitIcon from "src/pages/Dashboard/Overview/Icon/ProfitIcon";
import { FundOverview } from "src/types/API";
import FundApiCall from "src/components/FundApiCall";

const url = `${process.env.REACT_APP_API_URL}api/fund_overview`;

export const Overview: React.FC<{}> = () => {
  const data = FundApiCall<FundOverview>(url);

  return (
    <>
      <Header2>Overview</Header2>
      <FlexContainer>
        {data ? (
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
        ) : (
          <>
            <OverviewSkeleton />
            <OverviewSkeleton />
            <OverviewSkeleton />
          </>
        )}
      </FlexContainer>
    </>
  );
};

export default Overview;
