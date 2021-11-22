import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

function Section({
  title,
  description,
  backgroundImage,
  leftBtnText,
  rightBtnText,
  lastCol,
}) {
  return (
    <Wrap bgImage={backgroundImage}>
      <Fade direction="up">
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade direction="up">
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
        </Fade>
        {lastCol !== "True" && <DownArrow src="images/down-arrow.svg" />}
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw; // view-width;
  height: 100vh; // view-height;
  background-size: cover; // covers the entire page with the image
  background-position: center; // centers the image
  background-repeat: no-repeat; // stops repeating of image when scrolling
  display: flex; // creates a 1D workspace, default: row
  flex-direction: column;
  justify-content: space-between; // vertical alignment because flex direction is switched to column
  overflow-y: hidden;
  align-items: center; // horizontal alignment
  background-image: ${(props) =>
    `url("images/${props.bgImage}")`}; // fetch image in images/ folder
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  font-size: 20px;
  p {
    opacity: 0.8;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center; // centers horizontally
  align-items: center; // centers vertically
  border-radius: 70px; // To make button look circular
  opacity: 0.85; // creates slight fading animation
  text-transform: uppercase; // forces all upper case
  font-size: 12px; // change font size
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div``;
