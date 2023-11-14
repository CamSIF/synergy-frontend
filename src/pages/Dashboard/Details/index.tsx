import React from "react";

import FlexContainer from "src/components/FlexBox/FlexContainer";
import PnLCard from "src/pages/Dashboard/Details/PnLCard";
import AllocationCard from "src/pages/Dashboard/Details/AllocationCard";
import ShareValueCard from "src/pages/Dashboard/Details/ShareValueCard";


import Header2 from "src/components/Title/Header2";

export const Details: React.FC<{}> = () => {
  return (
    <>
      <Header2>Details</Header2>
      <FlexContainer>
        <PnLCard title="Total profit and loss">
          <div>Card 1</div>
        </PnLCard>
        <AllocationCard title="Allocation per equity">
          <div>Card 2</div>
        </AllocationCard>
        <ShareValueCard title="Shares and value per equity">
          <div>Card 3</div>
        </ShareValueCard>
      </FlexContainer>
    </>
  );
};

export default Details;
