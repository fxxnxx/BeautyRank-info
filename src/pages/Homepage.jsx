import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WalpapperBottom from "../ui/WalpapperImg";
import Main from "../components/Main";
import EmptyBox from "../ui/EmptyBox";
import Article from "../components/Article";

const Homepage = () => {
  return (
    <>
      <Header />
      <Main />
      <EmptyBox />
      <Article />
      <WalpapperBottom />
      <Footer />
    </>
  );
};

export { Homepage };
