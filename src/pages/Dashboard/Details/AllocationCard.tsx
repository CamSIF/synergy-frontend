import React, { ReactNode } from "react";
import DetailsCard from "src/pages/Dashboard/Details/DetailsCard";

interface AllocationCardProps {
  title: string;
  children: ReactNode;
}

export const AllocationCard: React.FC<AllocationCardProps> = ({ title, children }) => {
  return (
    <DetailsCard title={title} responsive={{ xs: 12, sm: 12, md: 6 }}>
      {children}
    </DetailsCard>
  );
};

export default AllocationCard;
