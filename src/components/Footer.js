import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Bottom>
      <a href="##">Tesla © 2023 </a>
      <a href="##">Privacy & Legal</a>
      <a href="##">Vehicle Recalls</a>
      <a href="##"> Contact </a>
      <a href="##">News </a>
      <a href="##">Get Updates</a>
      <a href="##">Locations </a>
    </Bottom>
  );
}
let Bottom = styled.div`
  display: flex;
  height: 12vh;

  background:rgba(28, 28, 59, 1);
  align-items:center;
  justify-content:center;
  
  a{
    margin:0.65rem;
    font-size:.86rem;
    font-weight:600;
    color:#ebebeb;
  }
`;

export default Footer;
