import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import { ToastProvider } from './providers/ToastProvider';


ReactDOM.render(
  // <App />
  <React.StrictMode>
    {/* <ToastProvider> */}
    <Suspense fallback={<div></div>}>
      <App />
    </Suspense>
    {/* </ToastProvider> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
