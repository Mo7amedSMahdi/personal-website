import React from "react";
import { Routes, Route } from "react-router-dom";
const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));

function App() {
  return (
    <Routes>
      <Route path="*" element={<h1>404</h1>} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
