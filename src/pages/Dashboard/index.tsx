import { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";
import Wrapper from "src/components/Wrapper";
import Header1 from "src/components/Title/Header1";
import Dropdown from "src/components/DataInput/Dropdown";
import FlexContainer from "src/components/FlexBox/FlexContainer";
import FlexItem from "src/components/FlexBox/FlexItem";

import Overview from "src/pages/Dashboard/Overview";
import Details from "src/pages/Dashboard/Details";

import { styled } from "@mui/material";
import DropdownSkeleton from "src/components/DataInput/DropdownSkeleton";

const initialItem = {
  label: "Main",
  value: "main",
};

export const AccountContext = createContext("camsif");
export const FundContext = createContext(initialItem.value);

const valueToLabel = (value: string): string => {
  const valueArray = value.split("_");
  const capitalizedValueArray = valueArray.map(
    (val) => val[0].toUpperCase() + val.slice(1).toLowerCase()
  );
  return capitalizedValueArray.join(" ");
};
const StyledDiv = styled("div")({
  height: "80px",
});

const url = `${process.env.REACT_APP_API_URL}api/get_account_funds`;

export const Dashboard: React.FC<{}> = () => {
  const [fund, setFund] = useState(useContext(FundContext));
  const [fundList, setFundList] = useState<string[] | undefined>(undefined);
  const account = useContext(AccountContext);

  useEffect(() => {
    const req = new FormData();
    req.append("account", account);
    axios
      .post(url, req)
      .then((response) => {
        setFundList(response.data.funds);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <AccountContext.Provider value="camsif">
      <FundContext.Provider value={fund}>
        <Wrapper>
          <FlexContainer>
            <FlexItem responsive={{ xs: 12, sm: 6, md: 8 }}>
              <Header1>Dashboard</Header1>
            </FlexItem>
            <FlexItem responsive={{ xs: 12, sm: 6, md: 4 }}>
              <StyledDiv>
                {fundList === undefined ? (
                  <DropdownSkeleton
                    initialItem={initialItem}
                    label="Fund"
                    minWidth={150}
                  />
                ) : (
                  <Dropdown
                    state={fund}
                    setState={setFund}
                    label="Fund"
                    items={fundList.map((fund) => ({
                      label: valueToLabel(fund),
                      value: fund,
                    }))}
                    minWidth={150}
                  />
                )}
              </StyledDiv>
            </FlexItem>
          </FlexContainer>
          <Overview />
          <Details />
        </Wrapper>
      </FundContext.Provider>
    </AccountContext.Provider>
  );
};

export default Dashboard;
