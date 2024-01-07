import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Wrapper from "src/components/Wrapper";
import Header1 from "src/components/Title/Header1";
import Dropdown, { DropdownEvent } from "src/components/DataInput/Dropdown";
import DropdownSkeleton from "src/components/DataInput/DropdownSkeleton";
import FlexContainer from "src/components/FlexBox/FlexContainer";
import FlexItem from "src/components/FlexBox/FlexItem";
import AlertStack, { enqueueAlertStack } from "src/components/AlertStack";

import Overview from "src/pages/Dashboard/Overview";
import Details from "src/pages/Dashboard/Details";
import {
  capitalizedFund,
  fundToLabel,
  AccountContext,
  FundContext,
} from "src/pages/Dashboard/DashboardFunction";

import { styled } from "@mui/material";

const queryParameters = new URLSearchParams(window.location.search);
const defaultFund = "main";
const initialFund = queryParameters.get("fund") ?? defaultFund;
const url = `${process.env.REACT_APP_API_URL}api/get_account_funds`;

const StyledDiv = styled("div")({
  height: "80px",
});

export const Dashboard: React.FC<{}> = () => {
  const [fund, setFund] = useState(initialFund);
  const [fundList, setFundList] = useState<string[] | undefined>(undefined);
  const account = useContext(AccountContext);

  const handleChange = (event: DropdownEvent) => {
    const newFund = event.target.value as string;
    setFund(newFund);
    window.history.replaceState(null, "", `?fund=${newFund}`);
  };

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
            `Invalid fund '${fund}'. Display default portfolio`,
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
                    handleChange={handleChange}
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
