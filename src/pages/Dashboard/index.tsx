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

import AlertStack, { enqueueAlertStack } from "src/components/AlertStack";

const capitalizedFund = (val: string) =>
  val[0].toUpperCase() + val.slice(1).toLowerCase();

const fundToLabel = (fund: string): string => {
  const fundArray = fund.split("_");
  const capitalizedFundArray = fundArray.map((val) => capitalizedFund(val));
  return capitalizedFundArray.join(" ");
};

const queryParameters = new URLSearchParams(window.location.search);
const defaultFund = "main";
const initialFund = queryParameters.get("fund") ?? defaultFund;

export const AccountContext = createContext("camsif");
export const FundContext = createContext(initialFund);

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
        const list = response.data.funds;
        setFundList(list);
        if (!list.includes(fund)) {
          setFund(defaultFund);
          enqueueAlertStack(
            "Invalid fund URL. Display default portfolio",
            "error"
          );
        }
      })
      .catch(() => {
        enqueueAlertStack("Error loading account portfolio", "error");
      });
  }, [account, fund]);

  return (
    <AccountContext.Provider value="camsif">
      <FundContext.Provider value={fund}>
        <Wrapper>
          <AlertStack />
          <FlexContainer>
            <FlexItem responsive={{ xs: 12, sm: 6, md: 8 }}>
              <Header1>Dashboard</Header1>
            </FlexItem>
            <FlexItem responsive={{ xs: 12, sm: 6, md: 4 }}>
              <StyledDiv>
                {fundList === undefined ? (
                  <DropdownSkeleton
                    initialItem={{
                      label: capitalizedFund(initialFund),
                      value: initialFund,
                    }}
                    label="Fund"
                    minWidth={150}
                  />
                ) : (
                  <Dropdown
                    state={fund}
                    setState={setFund}
                    label="Fund"
                    items={fundList.map((fund) => ({
                      label: fundToLabel(fund),
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
