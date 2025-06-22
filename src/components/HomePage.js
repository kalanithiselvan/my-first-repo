import React from 'react';
import CallToAction from './Calltoaction';
import Specials from './Specials';
import CustomersSay from './CustomerSays';
import Chicago from './Chicago';

function Homepage() {
  return (
    <>
      <CallToAction />
      <Specials />
      <CustomersSay />
      <Chicago />
    </>
  );
}

export default Homepage;
