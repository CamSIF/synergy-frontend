import React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { DropdownItem } from "src/types/DataInput";
import { Skeleton } from "@mui/material";

interface DropdownSkeletonProps {
  initialItem?: DropdownItem;
  label: string;
  minWidth?: number;
}

const DropdownSkeleton: React.FC<DropdownSkeletonProps> = ({
  initialItem,
  label,
  minWidth,
}) => {
  return (
    <Box minWidth={minWidth}>
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select value={initialItem?.value} label={label}>
          {initialItem && (
            <MenuItem key={0} value={initialItem.value}>
              {initialItem.label}
            </MenuItem>
          )}
          {[...Array(3)].map((_, idx) => (
            <MenuItem key={idx + 1} value="skeleton">
              <Skeleton sx={{ width: "100%" }} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default DropdownSkeleton;
