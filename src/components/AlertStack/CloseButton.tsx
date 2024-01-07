import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Button from "@mui/material/Button";
import { styled } from "@mui/material";

interface IconProps {
  onClick: () => void;
}

const StyledButton = styled(Button)({
  minWidth: 0,
});

const StyledIcon = styled(FontAwesomeIcon)({
  color: "#FFFFFF",
  height: "1.2em",
});

export const CloseButton: React.FC<IconProps> = ({ onClick }) => {
  return (
    <StyledButton color="inherit" onClick={onClick}>
      <StyledIcon icon={faXmark} />
    </StyledButton>
  );
};

export default CloseButton;
