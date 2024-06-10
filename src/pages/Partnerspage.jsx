import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WalpapperBottom from "../ui/WalpapperImg";
import EmptyBox from "../ui/EmptyBox";
import Partners from "../components/MainPartners";

const Partnerspage = () => {
  return (
    <>
      <Header />
      <Partners />
      <EmptyBox />
      <EmptyBox />
      <WalpapperBottom />
      <Footer />
    </>
  );
};

export { Partnerspage };
