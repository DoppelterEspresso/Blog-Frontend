import React from "react";
import ReactDOM from "react-dom";
import "./styles/tailwind.css";
import BlogRoutes from "./BlogRoutes";

ReactDOM.render(
  <React.StrictMode>
    <BlogRoutes />
  </React.StrictMode>,
  document.getElementById("root")
);
