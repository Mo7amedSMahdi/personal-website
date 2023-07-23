import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "@mui/material/styles";
import AppContext from "./context/AppContext";
import MainNavbar from "./components/MainNavbar";
import MainLayout from "./components/MainLayout";
import theme from "./theme";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const LazyApp = React.lazy(() => import("./App"));

root.render(
  <ThemeProvider theme={theme}>
    <AppContext>
      <ToastContainer />
      <MainLayout>
        <MainNavbar>
          <BrowserRouter>
            <LazyApp />
          </BrowserRouter>
        </MainNavbar>
      </MainLayout>
    </AppContext>
  </ThemeProvider>
);
