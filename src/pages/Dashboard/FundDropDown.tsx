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
  fund: string;
  fundList: string[] | undefined;
  handleFundChange: (event: DropdownEvent) => void;
}

export const FundDropDown: React.FC<FundDropDownProps> = ({
  fund,
  fundList,
  handleFundChange,
}) => {
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
