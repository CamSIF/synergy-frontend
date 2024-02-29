import { useState } from "react";
import Wrapper from "src/components/Wrapper";
import Header1 from "src/components/Title/Header1";
import FlexContainer from "src/components/FlexBox/FlexContainer";
import FlexItem from "src/components/FlexBox/FlexItem";
import AlertStack from "src/components/AlertStack";
import { DropdownEvent } from "src/components/DataInput/Dropdown";

import Overview from "src/pages/Dashboard/Overview";
import Details from "src/pages/Dashboard/Details";
import {
  AccountContext,
  FundContext,
  initialAccount,
  initialFund,
} from "src/pages/PortfolioHandler";

import { AccountFunds } from "src/types/API";
import { AccountDropDown } from "src/pages/Dashboard/AccountDropDown";
import { FundDropDown } from "src/pages/Dashboard/FundDropDown";
import { DropDownApiCall } from "src/pages/DropDownApiCall";

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
    setFund,
    setFundList,
    setAccount,
    setAccountList,
    setAccountFundMap
  );

  const handleAccountChange = (event: DropdownEvent) => {
    const newAccount = event.target.value as string;
    const newFundList = accountFundMap![newAccount];
    setAccount(newAccount);
    setFundList(newFundList);
    setFund(newFundList[0]);
    window.history.replaceState(null, "", `?account=${newAccount}`);
  };

  const handleFundChange = (event: DropdownEvent) => {
    const newFund = event.target.value as string;
    setFund(newFund);
    window.history.replaceState(
      null,
      "",
      `?account=${account}&fund=${newFund}`
    );
  };

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
              handleAccountChange={handleAccountChange}
            />
            <FundDropDown
              fund={fund}
              fundList={fundList}
              handleFundChange={handleFundChange}
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
