import React from "react";
import FlexItem from "src/components/FlexBox/FlexItem";
import Dropdown, { DropdownEvent } from "src/components/DataInput/Dropdown";
import DropdownSkeleton from "src/components/DataInput/DropdownSkeleton";
import {
  StyledDiv,
  capitalizeWord,
  valueToLabel,
  initialFund,
} from "src/pages/PortfolioHandler";

interface FundDropDownProps {
  account: string;
  fund: string;
  fundList: string[] | undefined;
  setFund: React.Dispatch<React.SetStateAction<string>>;
}

export const FundDropDown: React.FC<FundDropDownProps> = ({
  account,
  fund,
  fundList,
  setFund,
}) => {
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
  );
};
