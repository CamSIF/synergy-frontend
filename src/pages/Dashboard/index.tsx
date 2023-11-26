import { useState } from "react";
import Wrapper from "src/components/Wrapper";
import Header1 from "src/components/Title/Header1";
import Dropdown from "src/components/DataInput/Dropdown";
import FlexContainer from "src/components/FlexBox/FlexContainer";
import FlexItem from "src/components/FlexBox/FlexItem";

import Overview from "src/pages/Dashboard/Overview";
import Details from "src/pages/Dashboard/Details";

import { DropdownItem } from "src/types/DataInput";

import { styled } from "@mui/material";

const StyledDiv = styled("div")({
  height: "80px",
});

export const Dashboard: React.FC<{}> = () => {
  const [fund, setFund] = useState("");
  const fundItems: DropdownItem[] = [
    {
      label: "Main",
      value: "camsif-main",
    },
  ];

  return (
    <Wrapper>
      <FlexContainer>
        <FlexItem responsive={{ xs: 12, sm: 6, md: 8 }}>
          <Header1>Dashboard</Header1>
        </FlexItem>
        <FlexItem responsive={{ xs: 12, sm: 6, md: 4 }}>
          <StyledDiv>
            <Dropdown
              state={fund}
              setState={setFund}
              label="Fund"
              items={fundItems}
              minWidth={150}
            />
          </StyledDiv>
        </FlexItem>
      </FlexContainer>
      <Overview />
      <Details />
    </Wrapper>
  );
};

export default Dashboard;
