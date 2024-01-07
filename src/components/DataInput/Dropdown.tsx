import React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { DropdownItem } from "src/types/DataInput";

interface DropdownProps {
  state: string;
  handleChange: (event: DropdownEvent) => void;
  label: string;
  items: DropdownItem[];
  minWidth?: number;
}

const Dropdown: React.FC<DropdownProps> = ({
  state,
  handleChange,
  label,
  items,
  minWidth,
}) => {
  return (
    <Box minWidth={minWidth}>
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select value={state} label={label} onChange={handleChange}>
          {items.map((item, idx) => (
            <MenuItem key={idx} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export type DropdownEvent = SelectChangeEvent;

export default Dropdown;
