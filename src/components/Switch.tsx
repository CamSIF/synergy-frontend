import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Switch as SwitchButton } from "@mui/material";

interface SwitchProps {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  label: string;
  labelPlacement?: "end" | "start" | "top" | "bottom";
}

export const Switch: React.FC<SwitchProps> = ({
  state,
  setState,
  label,
  labelPlacement,
}) => {
  return (
    <FormControlLabel
      checked={state}
      onChange={() => setState(!state)}
      control={<SwitchButton color="primary" />}
      label={label}
      labelPlacement={labelPlacement}
    />
  );
};

export default Switch;
