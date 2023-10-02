import React from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";

function Sections(props) {
  return (
    <Wrap bgImg={props.backgroundImg}>
      <Slide>
        <ItemText>
          <h1>{props.title}</h1>
          <h4>{props.description1}</h4>

          <br />
          <h4> {props.price}</h4>
        </ItemText>
      </Slide>
      <Buttons>
        <ButtonGroup>
          <LeftButton>{props.leftBtnText}</LeftButton>

          {props.rightBtnText && (
            <RightButton>{props.rightBtnText}</RightButton>
          )}
        </ButtonGroup>

        {props.priceText && <PriceText>{props.priceText}</PriceText>}

        <DownArrow>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            height="40px"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
          </svg>
        </DownArrow>
      </Buttons>
    </Wrap>
  );
}

const Buttons = styled.div``;
const Wrap = styled.div`
  width: 98.7vw;
  z-index: -1;
  height: 109vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url("${props.bgImg}")`};
  display: flex;
  padding: 0;
  margin: 0;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 532px) {
    width: 110vw;
    height: 115vh;
  }
  @media (max-width: 485px) {
    width: 130vw;
    height: 132vh;
  }
  @media (max-width: 410px) {
    width: 135vw;
    height: 138vh;
  }
  @media (max-width: 392px) {
    width: 142vw;
    height: 145vh;
  }
  @media (max-width: 375px) {
    width: 155vw;
    height: 158vh;
  }
  @media (max-width: 340px) {
    width: 170vw;
    height: 171vh;
  }
`;

const ItemText = styled.div`
  padding-top: 10vh;
  z-index: -1;
`;

const ButtonGroup = styled.div`
  display: flex;
  z-index: -1;
  width: 535px;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background: #f4f4f4;
  padding: 10px;
  font-size: 12px;
  margin-left: 15px;
  width: 260px;
  border-radius: 4.5px;
  opacity: 0.75;
  color: #393c41;
  cursor: pointer;
  @media (max-width: 750px) {
    margin-bottom: 7px;
  }
`;

const RightButton = styled(LeftButton)`
  background: #171a20a6;
  color: white;
`;

const DownArrow = styled.div`
  animation: animateDown infinite 1.5s;
  overflow: hidden;
`;

const PriceText = styled.p`
  font-size: 12px;
  color: white;
  opacity: 0.6;
  text-align: center;
`;

export default Sections;
