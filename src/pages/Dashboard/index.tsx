import { useState, useEffect } from "react";
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
  capitalizeWord,
  valueToLabel,
  AccountContext,
  FundContext,
} from "src/pages/PortfolioHandler";

import { styled } from "@mui/material";

const queryParameters = new URLSearchParams(window.location.search);
const defaultFund = "main";
const defaultAccount = "camsif";
const initialFund = queryParameters.get("fund") ?? defaultFund;
const initialAccount = queryParameters.get("account") ?? defaultAccount;
const url = `${process.env.REACT_APP_API_URL}api/get_all_account_funds`;

const StyledDiv = styled("div")({
  height: "80px",
});

let accountFundMap: {[key: string]: string[]} | undefined = undefined;

export const Dashboard: React.FC<{}> = () => {
  const [fund, setFund] = useState(initialFund);
  const [fundList, setFundList] = useState<string[] | undefined>(undefined);
  const [account, setAccount] = useState(initialAccount);
  const [accountList, setAccountList] = useState<string[] | undefined>(
    undefined
  );

  const handleFundChange = (event: DropdownEvent) => {
    const newFund = event.target.value as string;
    setFund(newFund);
    window.history.replaceState(
      null,
      "",
      `?account=${account}&fund=${newFund}`
    );
  };

  const handleAccountChange = (event: DropdownEvent) => {
    const newAccount = event.target.value as string;
    const newFundList = accountFundMap![newAccount];
    setAccount(newAccount);
    setFundList(newFundList);
    setFund(newFundList[0]);
    window.history.replaceState(null, "", `?account=${newAccount}`);
  };

  useEffect(() => {
    axios
      .post(url)
      .then((response) => {
        const resAccountFundMap = response.data;
        const resAccountList = Object.keys(resAccountFundMap);
        const resFundList = resAccountFundMap[account];
        accountFundMap = resAccountFundMap
        setAccountList(resAccountList);
        setFundList(resFundList);
        if (!resAccountList.includes(account) || !resFundList.includes(fund)) {
          setAccount(defaultAccount);
          setFund(defaultFund);
          enqueueAlertStack(
            `Invalid link with account '${account}' and fund '${fund}'. Display default portfolio '${valueToLabel(
              defaultAccount
            )} ${valueToLabel(defaultFund)}'`,
            "error"
          );
        }
      })
      .catch(() => {
        enqueueAlertStack(
          `Error loading the list of funds from the account '${valueToLabel(
            account
          )}'`,
          "error"
        );
      });
  }, [account, fund]);

  return (
    <AccountContext.Provider value={account}>
      <FundContext.Provider value={fund}>
        <Wrapper>
          <AlertStack />
          <FlexContainer>
            <FlexItem responsive={{ xs: 12, sm: 12, md: 4, lg: 6 }}>
              <Header1>Dashboard</Header1>
            </FlexItem>
            <FlexItem responsive={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <StyledDiv>
                {accountList === undefined ? (
                  <DropdownSkeleton
                    initialItem={{
                      label: capitalizeWord(initialAccount),
                      value: initialAccount,
                    }}
                    label="Account"
                    minWidth={150}
                  />
                ) : (
                  <Dropdown
                    state={account}
                    handleChange={handleAccountChange}
                    label="Account"
                    items={accountList.map((account) => ({
                      label: valueToLabel(account),
                      value: account,
                    }))}
                    minWidth={150}
                  />
                )}
              </StyledDiv>
            </FlexItem>
            <FlexItem responsive={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <StyledDiv>
                {fundList === undefined ? (
                  <DropdownSkeleton
                    initialItem={{
                      label: capitalizeWord(initialFund),
                      value: initialFund,
                    }}
                    label="Fund"
                    minWidth={150}
                  />
                ) : (
                  <Dropdown
                    state={fund}
                    handleChange={handleFundChange}
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
