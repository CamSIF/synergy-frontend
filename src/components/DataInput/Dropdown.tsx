import React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { DropdownItem } from "src/types/DataInput";

interface DropdownProps {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  label: string;
  items: DropdownItem[];
  minWidth?: number;
}

const Dropdown: React.FC<DropdownProps> = ({
  state,
  setState,
  label,
  items,
  minWidth,
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    setState(event.target.value as string);
  };

  return (
    <Box minWidth={minWidth}>
      <FormControl fullWidth color="secondary">
        <InputLabel>{label}</InputLabel>
        <Select value={state} label={label} onChange={handleChange}>
          {items.map((item) => (
            <MenuItem value={item.value}>{item.label}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Dropdown;
