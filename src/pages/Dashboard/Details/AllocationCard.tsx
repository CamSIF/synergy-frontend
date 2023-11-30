import React from "react";
import TitledFlexCard from "src/components/FlexBox/TitledFlexCard";
import TitledFlexSkeleton from "src/components/FlexBox/TitledFlexSkeleton";
import PieChart from "src/components/DataDisplay/PieChart";
import { styled } from "@mui/material";
import ApiCall from "src/components/ApiCall";

import { FundPerEquity } from "src/types/API";
import { PieData } from "src/types/DataDisplay";

const StyledDiv = styled("div")({
  height: "270px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
});

const AllocationMap = (data: FundPerEquity | undefined): PieData[] => {
  const pieData: PieData[] = [];
  if (!data) return [];
  for (const [stock, allocation] of Object.entries(data)) {
    pieData.push({
      value: allocation,
      label: stock,
    });
  }
  return pieData;
};

const url = `${process.env.REACT_APP_API_URL}api/fund_allocation_per_equity`;
const responsive = { xs: 12, sm: 12, md: 6 };

export const AllocationCard: React.FC<{}> = () => {
  const data = ApiCall<FundPerEquity>(url);
  const pieData: PieData[] = AllocationMap(data);

  return (
    <>
      {data ? (
        <TitledFlexCard title="Allocation per equity (%)" responsive={responsive}>
          <StyledDiv>
            <PieChart data={pieData} percentage={true} height={200} />
          </StyledDiv>
        </TitledFlexCard>
      ) : (
        <TitledFlexSkeleton responsive={responsive} height={250} />
      )}
    </>
  );
};

export default AllocationCard;
