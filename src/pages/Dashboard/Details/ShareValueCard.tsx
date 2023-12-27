import React from "react";
import { styled } from "@mui/material/styles";
import TitledFlexCard from "src/components/FlexBox/TitledFlexCard";
import SimpleTable from "src/components/DataDisplay/SimpleTable";
import { SimpleCol, SimpleRow } from "src/types/DataDisplay";
import { FundPerEquity } from "src/types/API";
import TitledFlexSkeleton from "src/components/FlexBox/TitledFlexSkeleton";
import FundApiCall from "src/components/FundApiCall";

const responsive = { xs: 12, sm: 12, md: 6 };
const url_shares = `${process.env.REACT_APP_API_URL}api/fund_shares_per_equity`;
const url_value = `${process.env.REACT_APP_API_URL}api/fund_value_by_equity`;

const RedSpan = styled("span")(({ theme }) => ({
  color: theme.palette.error.main
}));

const GreenSpan = styled("span")(({ theme }) => ({
  color: theme.palette.success.main
}));

const columns: SimpleCol<ShareValueRow>[] = [
  { field: "stock", headerName: "Stock" },
  { field: "value", headerName: "Value (£)" },
  { field: "shares", headerName: "Shares" },
  { field: "position", headerName: "Position" },
];

const ShareValueRowMap = (
  shares_data: FundPerEquity | undefined,
  value_data: FundPerEquity | undefined
): ShareValueRow[] => {
  const shareValueRows: ShareValueRow[] = [];
  if (!shares_data || !value_data) return [];
  for (const [stock, shares] of Object.entries(shares_data)) {
    shareValueRows.push({
      stock: stock,
      shares: shares < 0 ? <RedSpan>{shares}</RedSpan> : <GreenSpan>{`+${shares}`}</GreenSpan>,
      value: Math.abs(Number(value_data[stock]?.toFixed(2))),
      position: shares < 0 ? "SHORT" : "LONG",
    });
  }
  return shareValueRows;
};

interface ShareValueRow extends SimpleRow {
  stock: string;
  value: number;
  shares: JSX.Element;
  position: string;
}

export const ShareValueCard: React.FC<{}> = () => {
  const sharesData = FundApiCall<FundPerEquity>(url_shares);
  const valueData = FundApiCall<FundPerEquity>(url_value);
  const rows: ShareValueRow[] = ShareValueRowMap(sharesData, valueData);

  return (
    <>
      {sharesData && valueData ? (
        <TitledFlexCard
          title="Shares and value per equity"
          responsive={responsive}
        >
          <SimpleTable columns={columns} rows={rows} minWidth={350} />
        </TitledFlexCard>
      ) : (
        <TitledFlexSkeleton responsive={responsive} height={250} />
      )}
    </>
  );
};

export default ShareValueCard;
