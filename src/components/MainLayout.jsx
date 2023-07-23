import React from "react";
import Intro from "../pages/Intro";

const MainLayout = ({ children }) => {
  const isLoading = true;

  if (isLoading) {
    return <Intro />;
  }
  return children;
};

export default MainLayout;
