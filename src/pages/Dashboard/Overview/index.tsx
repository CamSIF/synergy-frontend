import React from "react";
import Header2 from "src/components/Title/Header2";
import FlexContainer from "src/components/FlexBox/FlexContainer";

import OverviewCard from "src/pages/Dashboard/Overview/OverviewCard";
import OverviewSkeleton from "src/pages/Dashboard/Overview/OverviewSkeleton";
import ValueIcon from "src/pages/Dashboard/Overview/Icon/ValueIcon";
import CashIcon from "src/pages/Dashboard/Overview/Icon/CashIcon";
import ProfitIcon from "src/pages/Dashboard/Overview/Icon/ProfitIcon";
import ProfitPercentageIcon from "src/pages/Dashboard/Overview/Icon/ProfitPercentageIcon";
import { FundOverview } from "src/types/API";
import FundApiCall from "src/components/FundApiCall";

const url = `${process.env.REACT_APP_API_URL}api/fund_overview`;

const numberFormatter = new Intl.NumberFormat("en-US", {
  style: "decimal",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const formatted_amount = (value: number): string => {
  return `£ ${numberFormatter.format(value)}`;
};

const formatted_percentage = (value: number): string => {
  return `${numberFormatter.format(value)} %`;
};

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
              value={formatted_amount(data.total_value)}
            />
            <OverviewCard
              icon={<CashIcon />}
              title="Total Cash"
              value={formatted_amount(data.total_cash)}
            />
            <OverviewCard
              icon={<ProfitIcon />}
              title="Overall Profit"
              value={formatted_amount(data.overall_profit)}
            />
            <OverviewCard
              icon={<ProfitPercentageIcon />}
              title="Percentage of profit"
              value={formatted_percentage(data.percentage_pnl)}
            />
          </>
        ) : (
          [...Array(4)].map(() => <OverviewSkeleton />)
        )}
      </FlexContainer>
    </>
  );
};

export default Overview;
