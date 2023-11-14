import React, { ReactNode } from "react";
import DetailsCard from "src/pages/Dashboard/Details/DetailsCard";

interface PnLCardProps {
  title: string;
  children: ReactNode;
}

export const PnLCard: React.FC<PnLCardProps> = ({ title, children }) => {
  return (
    <DetailsCard title={title} responsive={{ xs: 12, sm: 12, md: 12 }}>
      {children}
    </DetailsCard>
  );
};

export default PnLCard;
