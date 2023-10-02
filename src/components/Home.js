import React from "react";
import styled from "styled-components";
import Sections from "./Sections";
import Section2 from "./Section2";

import Footer from "./Footer";
import Header from "./Header";
function Home() {
  return (
    <Container>
      <Section2
        title="MODEL 3"
        description1="After Federal Tax Credit & Est. Gas Savings"
        description2="Order Online, for Touchless Delivery"
        price="From $29,740*"
        leftBtnText="ORDER NOW"
        videoPath="./demo1.mp4"
        rightBtnText="DEMO DRIVE"
        priceText="*Price before savings is $40,290, excluding taxes and fees. Subject to change.
    Learn about est. gas savings."
      />
      <Sections
        title="MODEL Y"
        description1="After Federal Tax Credit & Est. Gas Savings"
        description2="Order Online, for Touchless Delivery"
        price="From $39,390 *"
        backgroundImg="/images/model-y.jpg"
        leftBtnText="ORDER NOW"
        rightBtnText="DEMO DRIVE"
        priceText="*Price before incentives and savings is $50,490, excluding taxes and fees. Subject to change.
        Learn about est. gas savings."
      />
      <Sections
        title="MODEL S"
        description1="After Est. Gas Savings"
        description2="Order Online, for Touchless Delivery"
        price="From $71,090 *"
        backgroundImg="/images/model-s.jpg"
        leftBtnText="ORDER NOW"
        rightBtnText="DEMO DRIVE"
        priceText="*Price before incentives and savings is $74,990, excluding taxes and fees. Subject to change.
        Learn about est. gas savings."
      />
      <Sections
        title="MODEL X"
        description1="After Federal Tax Credit & Est. Gas Savings"
        description2="Order Online, for Touchless Delivery"
        price="From $68,590 *"
        backgroundImg="/images/model-x.jpg"
        leftBtnText="ORDER NOW"
        rightBtnText="DEMO DRIVE"
        priceText="*Price before savings is $79,990, excluding taxes and fees. Subject to change.
        Learn about est. gas savings."
      />{" "}
      <Section2
        title="Experience Tesla"
        description1=""
        description2="Experience Tesla"
        price="From $29,740*"
        videoPath="./demo.mp4"
        rightBtnText="DEMO DRIVE"
        priceText="*Price before savings is $40,290, excluding taxes and fees. Subject to change.
  Learn about est. gas savings."
      />
      <Sections
        title="SOLAR PANELS"
        description1="Schedule a Virtual Consultation"
        description2=""
        price=""
        backgroundImg="/images/solar-panel.jpg"
        leftBtnText="ORDER NOW"
        rightBtnText="LEARN MORE"
      />
      <Sections
        title="SOLAR ROOF"
        description1="Schedule a Virtual Consultation"
        description2=""
        price=""
        backgroundImg="/images/solar-roof.jpg"
        leftBtnText="ORDER NOW"
        rightBtnText="LEARN MORE"
      />
      <Sections
        title="POWERWALL "
        description1=""
        description2=""
        price=""
        backgroundImg="/images/Homepage-powerwall.jpg"
        leftBtnText="ORDER NOW"
        rightBtnText="LEARN MORE"
      />
      <Sections
        title="ACCESSSORIES "
        description1=""
        description2=""
        price=""
        backgroundImg="/images/Homepage-Accessories.jpg"
        leftBtnText="SHOP NOW"
        rightBtnText=""
      />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;
export default Home;
