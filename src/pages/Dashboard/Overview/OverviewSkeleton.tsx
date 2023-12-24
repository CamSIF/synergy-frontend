import React from "react";
import FlexCard from "src/components/FlexBox/FlexCard";
import { styled } from "@mui/material/styles";
import Skeleton from "@mui/material/Skeleton";
import { Value, Title } from "src/pages/Dashboard/Overview/OverviewCard";

const RowDiv = styled("div")({
  display: "flex",
  alignItems: "center",
  height: "51px",
});

const ContentDiv = styled("div")({
  padding: "0 16px 0",
  width: "100%",
});

export const OverviewSkeleton: React.FC<{}> = () => {
  return (
    <FlexCard responsive={{ xs: 12, sm: 6, md: 4, lg: 3  }}>
      <RowDiv>
        <div>
          <Skeleton variant="circular" width={"1.75em"} height={"1.75em"} />
        </div>
        <ContentDiv>
          <Value><Skeleton /></Value>
          <Title><Skeleton /></Title>
        </ContentDiv>
      </RowDiv>
    </FlexCard>
  );
};

export default OverviewSkeleton;
