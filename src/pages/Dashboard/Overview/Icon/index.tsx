import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "@mui/material/styles";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface IconProps {
  icon: IconDefinition;
}

const StyledIcon = styled(FontAwesomeIcon)(({ theme }) => ({
  color: theme.palette.secondary.main,
  height: "1.75em",
}));

export const Icon: React.FC<IconProps> = ({ icon }) => {
  return <StyledIcon icon={icon} />;
};

export default Icon;
