import React from "react";
import DetailsCard from "src/pages/Dashboard/Details/DetailsCard";

interface AllocationCardProps {
  title: string;
}

export const AllocationCard: React.FC<AllocationCardProps> = ({ title }) => {
  return (
    <DetailsCard title={title} responsive={{ xs: 12, sm: 12, md: 6 }}>
      <div>Allocation card</div>
    </DetailsCard>
  );
};

export default AllocationCard;
