import React from "react";
import TitledFlexCard from "src/components/FlexBox/TitledFlexCard";
import TitledFlexSkeleton from "src/components/FlexBox/TitledFlexSkeleton";
import LineChart from "src/components/DataDisplay/LineChart";
import { YAxis } from "src/types/DataDisplay";
import FundApiCall from "src/components/FundApiCall";

import { FundPNL } from "src/types/API";

const url = `${process.env.REACT_APP_API_URL}api/fund_pnl`;
const responsive = { xs: 12, sm: 12, md: 12 };

export const PnLCard: React.FC<{}> = () => {
  const data = FundApiCall<FundPNL>(url);
  const series: YAxis[] = data ? [{ data: data.values }] : [];
  const xAxis: string[] = data
    ? data.dates.map((date) => {
        const dateObj = new Date(Date.parse(date));
        const year = ("0" + dateObj.getFullYear()).slice(-2);
        const month = ("0" + (dateObj.getMonth() + 1)).slice(-2);
        const day = ("0" + dateObj.getDate()).slice(-2);
        return `${day}/${month}/${year}`;
      })
    : [];

  return (
    <>
      {data ? (
        <TitledFlexCard title="Total profit and loss" responsive={responsive}>
          <LineChart
            xAxis={xAxis}
            series={series}
            height={300}
            leftMargin={90}
          />
        </TitledFlexCard>
      ) : (
        <TitledFlexSkeleton responsive={responsive} height={250} />
      )}
    </>
  );
};

export default PnLCard;
