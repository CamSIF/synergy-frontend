import React from "react";
import DetailsCard from "src/pages/Dashboard/Details/DetailsCard";

import SimpleTable from "src/components/DataDisplay/SimpleTable";
import { SimpleCol, SimpleRow } from "src/types/DataDisplay";

interface ShareValueRow extends SimpleRow {
  stock: string;
  value: string;
  shares: string;
}

interface ShareValueCardProps {
  title: string;
}

export const ShareValueCard: React.FC<ShareValueCardProps> = ({ title }) => {
  const rows: ShareValueRow[] = [
    { stock: "Apple", shares: "+ 500", value: "+ 1000.00" },
    { stock: "BCG", shares: "- 500", value: "- 1000.00" },
    { stock: "IHaveALongName", shares: "- 500", value: "- 1000.00" },
  ];

  const columns: SimpleCol<ShareValueRow>[] = [
    { field: "stock", headerName: "Stock" },
    { field: "value", headerName: "Value" },
    { field: "shares", headerName: "Shares" },
  ];
  return (
    <DetailsCard title={title} responsive={{ xs: 12, sm: 12, md: 6 }}>
      <SimpleTable columns={columns} rows={rows} minWidth={350} />
    </DetailsCard>
  );
};

export default ShareValueCard;
