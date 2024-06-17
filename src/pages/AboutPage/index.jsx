import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Main from '../../components/MainAbout';
import WalpapperBottom from '../../ui/WalpapperImg';
import Slaider from '../../components/AboutSlaider';

const AboutPage = () => {
  return (
    <>
      <Header />
      <Main />
      <Slaider />
      <WalpapperBottom />
      <Footer />
    </>
  );
};

export default AboutPage;
