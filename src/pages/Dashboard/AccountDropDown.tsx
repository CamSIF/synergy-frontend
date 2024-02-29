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

interface AccountDropDownProps {
  account: string;
  accountList: string[] | undefined;
  handleAccountChange: (event: DropdownEvent) => void;
}

export const AccountDropDown: React.FC<AccountDropDownProps> = ({
  account,
  accountList,
  handleAccountChange,
}) => {
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
