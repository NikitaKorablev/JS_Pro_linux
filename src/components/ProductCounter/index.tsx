import React from "react";
// import dressImg from "./dress_1.jpg";
import "./index.css";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import InteractiveBlock from "../Common/InteractiveBlock";

const ProductCounter = () => {
  <link
    href="http://fonts.googleapis.com/css?family=PT+Sans:regular,italic,bold,bolditalic"
    rel="stylesheet"
    type="text/css"
  />;
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="sub_content">
          <div style={{ display: "flex", width: "100%" }}>
            <InteractiveBlock price={6999} name="dress1" />
            <InteractiveBlock price={800} name="dress2" />
            <InteractiveBlock price={1300} name="dress3" />
            <InteractiveBlock price={3000} name="dress4" />
          </div>
          <div style={{ display: "flex", width: "100%" }}>
            <InteractiveBlock price={6999} name="dress1" />
            <InteractiveBlock price={800} name="dress2" />
            <InteractiveBlock price={1300} name="dress3" />
            <InteractiveBlock price={3000} name="dress4" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductCounter;
