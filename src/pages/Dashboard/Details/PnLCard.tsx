import React from "react";
import { styled } from "@mui/material";
import TitledFlexCard from "src/components/FlexBox/TitledFlexCard";
import TitledFlexSkeleton from "src/components/FlexBox/TitledFlexSkeleton";
import LineChart from "src/components/DataDisplay/LineChart";
import { YAxis } from "src/types/DataDisplay";
import ApiCall from "src/components/ApiCall";

import { FundPNL } from "src/types/API";

const url = `${process.env.REACT_APP_API_URL}api/fund_pnl`;
const responsive = { xs: 12, sm: 12, md: 12 };


export const PnLCard: React.FC<{}> = () => {
  const data = ApiCall<FundPNL>(url);
  const series: YAxis[] = data ? [{ data: data.values }] : [];
  const xAxis: string[] = data
    ? data.dates.map((date) => {
        const dateObj = new Date(Date.parse(date));
        const month = ("0" + (dateObj.getMonth() + 1)).slice(-2);
        const day = ("0" + dateObj.getDate()).slice(-2);
        return `${month}/${day}`;
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
          />
        </TitledFlexCard>
      ) : (
        <TitledFlexSkeleton responsive={responsive} height={250} />
      )}
    </>
  );
};

export default PnLCard;
