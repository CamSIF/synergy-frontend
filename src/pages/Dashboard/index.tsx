import { useState, useEffect } from "react";
import axios from "axios";
import Wrapper from "src/components/Wrapper";
import Header1 from "src/components/Title/Header1";
import FlexContainer from "src/components/FlexBox/FlexContainer";
import FlexItem from "src/components/FlexBox/FlexItem";
import AlertStack from "src/components/AlertStack";

import Overview from "src/pages/Dashboard/Overview";
import Details from "src/pages/Dashboard/Details";
import {
  AccountContext,
  FundContext,
  initialAccount,
  initialFund,
} from "src/pages/PortfolioHandler";

import { AccountFunds } from "src/types/API";
import { AccountDropDown } from "./AccountDropDown";
import { FundDropDown } from "./FundDropDown";
import { DropDownApiCall } from "../DropDownApiCall";

export const Dashboard: React.FC<{}> = () => {
  const [fund, setFund] = useState(initialFund);
  const [fundList, setFundList] = useState<string[] | undefined>(undefined);
  const [account, setAccount] = useState(initialAccount);
  const [accountList, setAccountList] = useState<string[] | undefined>(
    undefined
  );
  const [accountFundMap, setAccountFundMap] = useState<
    AccountFunds | undefined
  >(undefined);

  DropDownApiCall(
    fund,
    account,
    setAccount,
    setAccountList,
    setFund,
    setFundList,
    setAccountFundMap
  );

  return (
    <AccountContext.Provider value={account}>
      <FundContext.Provider value={fund}>
        <Wrapper>
          <AlertStack />
          <FlexContainer>
            <FlexItem responsive={{ xs: 12, sm: 12, md: 4, lg: 6 }}>
              <Header1>Dashboard</Header1>
            </FlexItem>
            <AccountDropDown
              account={account}
              accountList={accountList}
              accountFundMap={accountFundMap}
              setAccount={setAccount}
              setFundList={setFundList}
              setFund={setFund}
            />
            <FundDropDown
              account={account}
              fund={fund}
              fundList={fundList}
              setFund={setFund}
            />
          </FlexContainer>
          <Overview />
          <Details />
        </Wrapper>
      </FundContext.Provider>
    </AccountContext.Provider>
  );
};

export default Dashboard;
