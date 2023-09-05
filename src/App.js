import { BrowserRouter as Router, Route } from "react-router-dom";
import { Box, CssBaseline, LinearProgress } from "@mui/material";
import "./App.css";
import { Routes } from "./Routes";
import { Suspense, useEffect, useMemo } from "react";
import { SkeletonLoaderWithHeader } from "./components/common/SkeletonLoader";
import { ToastProvider } from "./app/providers/toastProvider";

export default function App() {
  return (
    <div className="App">
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
    </div>
  );
}
