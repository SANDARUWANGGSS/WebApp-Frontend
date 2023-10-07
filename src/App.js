import { BrowserRouter as Router, Route } from "react-router-dom";
import { Box, CssBaseline, LinearProgress,createTheme,ThemeProvider } from "@mui/material";
import "./App.css";
import { Routes } from "./Routes";
import { Suspense, useEffect, useMemo } from "react";
import { SkeletonLoaderWithHeader } from "./components/common/SkeletonLoader";
import { ToastProvider } from "./app/providers/toastProvider";
import { APP_FONT_NAME } from "./resources/constants/StringConstants";

export default function App() {
  const MUI_THEME = createTheme({
    typography: { fontFamily: APP_FONT_NAME },
    palette: {
      primary: {
        main: '#097d09', // Green color
      },
    },
  });
  return (
    <div className="App">
      <ThemeProvider theme={MUI_THEME}>
      <Router>
        <div>
          <ToastProvider>
              <CssBaseline />
              <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
                <Suspense fallback={<SkeletonLoaderWithHeader />}>
                  <Box sx={{ display: "flex" }}>
                    <Routes />
                  </Box>
                </Suspense>
              </Box>
          </ToastProvider>
        </div>
      </Router>
      </ThemeProvider>
    </div>
  );
}
