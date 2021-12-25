import React from "react";
import "./App.css";
import ProductCounter from "./components/ProductCounter";
import SignUp from "./components/SignUp";

const meta = {
  title: "react",
  meta: {
    charset: "utf-8",
    name: {
      keywords: "react,meta,document,html,tags",
    },
  },
};

const App = () => {
  // return <ProductCounter />;
  return <SignUp />;
};

export default App;
