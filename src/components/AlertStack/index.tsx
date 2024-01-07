import React from "react";
import { styled } from "@mui/material";
import {
  SnackbarProvider,
  VariantType,
  MaterialDesignContent,
  enqueueSnackbar,
  closeSnackbar,
} from "notistack";
import CloseButton from "src/components/AlertStack/CloseButton";

const StyledMaterialDesignContent = styled(MaterialDesignContent)(
  ({ theme }) => ({
    "&.notistack-MuiContent-success": {
      backgroundColor: theme.palette.success.dark,
    },
    "&.notistack-MuiContent-error": {
      backgroundColor: theme.palette.error.dark,
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
      action={(snackbarId) => (
        <CloseButton onClick={() => closeSnackbar(snackbarId)} />
      )}
    />
  );
};

export default AlertStack;
