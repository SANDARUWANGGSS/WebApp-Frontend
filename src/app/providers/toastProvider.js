import { Button, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { makeStyles } from '@mui/styles';
import { closeSnackbar, enqueueSnackbar, MaterialDesignContent, SnackbarProvider } from "notistack";
import React, { Fragment, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { TOAST_PROPERTIES } from "../../resources/constants/StringConstants";

let ToastContext = React.createContext(null);

export function ToastProvider({ children }) {
  const theme = useTheme();

  const useStyles = makeStyles({
    containerRoot: { paddingTop: 55 },
    anchorOriginTopRight: {
      [theme.breakpoints.up("sm")]: {
        width: "400px !important",
      },
    },
  });
  const classes = useStyles();
  const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
    "&.notistack-MuiContent-success": {
      backgroundColor: theme.palette.mode === "light" ? "#EDF7ED" : "#0C130D",
      color: theme.palette.success.main,
    },
    "&.notistack-MuiContent-error": {
      backgroundColor: theme.palette.mode === "light" ? "#FDEDED" : "#160B0B",
      color: theme.palette.error.main,
    },
    "&.notistack-MuiContent-info": {
      backgroundColor: theme.palette.mode === "light" ? "#E5F6FD" : "#071318",
      color: theme.palette.info.main,
    },
    "&.notistack-MuiContent-warning": {
      backgroundColor: theme.palette.mode === "light" ? "#FFF4E5" : "#191207",
      color: theme.palette.warning.main,
    },
  }));

  /**
   * This function will display a toast message
   * @param {string} tSeverity Severity as SUCCESS | INFO | WARN | ERROR as in TOAST_PROPERTIES
   * @param {string} tSummary Summary of the toast message
   * @param {string} [tDetail=null] (Optional) Details of the toast message
   * @param {string} [tIcon=null] (Optional) Any Icon, if no icon provided default severity icon will set
   */
  const displayToast = useCallback((severity, summary, detail = null, iconNode = null) => {
    // Input Sanitization
    if (!severity || !summary) {
      return;
    }
    enqueueSnackbar(GenerateToastContent(summary, detail, iconNode), {
      variant: TOAST_PROPERTIES[severity].severity,
      hideIconVariant: iconNode ? true : false,
      autoHideDuration: TOAST_PROPERTIES[severity].life,
    });
  }, []);

  const clearToast = useCallback(() => {
    closeSnackbar();
  }, []);

  // Set items that should be accessible by this context
  let contextItems = useMemo(() => {
    return { displayToast, clearToast };
  }, [displayToast, clearToast]);

  return (
    <SnackbarProvider
      maxSnack={2}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      classes={{
        containerRoot: classes.containerRoot,
        anchorOriginTopRight: classes.anchorOriginTopRight,
      }}
      action={(snackbarId) => SnackAction(snackbarId)}
      Components={{
        success: StyledMaterialDesignContent,
        error: StyledMaterialDesignContent,
        info: StyledMaterialDesignContent,
        warning: StyledMaterialDesignContent,
      }}>
      <ToastContext.Provider value={contextItems}>{children}</ToastContext.Provider>
    </SnackbarProvider>
  );
}

const GenerateToastContent = (summary, detail, icon) => {
  return (
    <Fragment>
      <div style={{ display: "flex", alignItems: "center" }}>
        {icon}
        <div style={{ marginLeft: 8 }}>
          {summary && (
            <Typography variant="body2" component="div" sx={{ fontWeight: "bold" }}>
              {summary}
            </Typography>
          )}
          {detail && (
            <Typography variant="caption" component="div">
              {detail}
            </Typography>
          )}
        </div>
      </div>
    </Fragment>
  );
};

const SnackAction = (snackbarId) => {
  const { t } = useTranslation();
  return (
    <Button color="inherit" onClick={() => closeSnackbar(snackbarId)}>
      {t("CommonToast.Close")}
    </Button>
  );
};

export function useToastContext() {
  return React.useContext(ToastContext);
}
