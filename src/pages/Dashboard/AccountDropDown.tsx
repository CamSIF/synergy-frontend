import React from "react";
import FlexItem from "src/components/FlexBox/FlexItem";
import Dropdown, { DropdownEvent } from "src/components/DataInput/Dropdown";
import DropdownSkeleton from "src/components/DataInput/DropdownSkeleton";
import {
  StyledDiv,
  capitalizeWord,
  valueToLabel,
  initialAccount,
} from "src/pages/PortfolioHandler";

import { AccountFunds } from "src/types/API";

interface AccountDropDownProps {
  account: string;
  accountList: string[] | undefined;
  accountFundMap: AccountFunds | undefined;
  setAccount: React.Dispatch<React.SetStateAction<string>>;
  setFundList: React.Dispatch<React.SetStateAction<string[] | undefined>>;
  setFund: React.Dispatch<React.SetStateAction<string>>;
}

export const AccountDropDown: React.FC<AccountDropDownProps> = ({
  account,
  accountList,
  accountFundMap,
  setFund,
  setFundList,
  setAccount,
}) => {
  const handleAccountChange = (event: DropdownEvent) => {
    const newAccount = event.target.value as string;
    const newFundList = accountFundMap![newAccount];
    setAccount(newAccount);
    setFundList(newFundList);
    setFund(newFundList[0]);
    window.history.replaceState(null, "", `?account=${newAccount}`);
  };

  return (
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
  );
};
