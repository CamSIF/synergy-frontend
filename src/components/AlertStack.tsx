import React from "react";
import { styled } from "@mui/material";
import {
  SnackbarProvider,
  VariantType,
  MaterialDesignContent,
  enqueueSnackbar,
} from "notistack";

const StyledMaterialDesignContent = styled(MaterialDesignContent)(
  ({ theme }) => ({
    "&.notistack-MuiContent-success": {
      backgroundColor: theme.palette.success.main,
      color: theme.palette.success.contrastText,
    },
    "&.notistack-MuiContent-error": {
      backgroundColor: theme.palette.error.main,
      color: theme.palette.error.contrastText,
    },
  })
);

export const enqueueAlertStack = (message: string, variant: VariantType) =>
  enqueueSnackbar(message, { variant: variant, persist: true });

export const AlertStack: React.FC<{}> = () => {
  return (
    <SnackbarProvider
      maxSnack={3}
      Components={{
        success: StyledMaterialDesignContent,
        error: StyledMaterialDesignContent,
      }}
    />
  );
};

export default AlertStack;
