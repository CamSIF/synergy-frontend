import React from "react";
import DetailsCard from "src/pages/Dashboard/Details/DetailsCard";

interface PnLCardProps {
  title: string;
}

export const PnLCard: React.FC<PnLCardProps> = ({ title }) => {
  return (
    <DetailsCard title={title} responsive={{ xs: 12, sm: 12, md: 12 }}>
      <div>PnL card</div>
    </DetailsCard>
  );
};

export default PnLCard;
