import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import WalpapperBottom from '../../ui/WalpapperImg';
import EmptyBox from '../../ui/EmptyBox';
import HomeContent from "../../components/HomeContent";

const Homepage = () => {
  return (
    <>
      <Header />
      <HomeContent />
      <EmptyBox />
      <WalpapperBottom />
      <Footer />
    </>
  );
};

export default Homepage;