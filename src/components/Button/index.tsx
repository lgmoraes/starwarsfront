import { useState, useEffect } from "react";
import styled from "styled-components";

const BREAKPOINT = 600;
const SMALL_SCREEN_FONT_SIZE = "18px";

const StyledButton = styled.button`
  border-radius: 0;
  margin: 1.5rem 0;
  position: relative;
  font-weight: 400;
  cursor: pointer;
  outline: none;

  &::after {
    content: "";
    border-color: black;
    border-width: 3px;
    border-style: solid;
    position: absolute;
    top: -10px;
    bottom: -10px;
    left: -10px;
    right: -10px;
  }
`;

const Button = ({
  children,
  width,
  height,
  outline = false,
  textColor = outline ? "black" : "white",
  backgroundColor = outline ? "transparent" : "black",
  padding = "0.6em 3em",
  margin,
  type,
  onClick,
  fontSize = "24px",
  disabled = false,
}) => {
  const isSmallScreen = () => window.innerWidth < BREAKPOINT;
  const [smallScreen, setSmallScreen] = useState(isSmallScreen());
  const renderedFontSize = smallScreen ? SMALL_SCREEN_FONT_SIZE : fontSize;

  const buttonStyle = {
    width: width,
    height: height,
    padding: padding,
    margin: margin,
    border: `3px solid ${outline ? textColor : backgroundColor}`,
    color: textColor,
    background: outline ? "transparent" : backgroundColor,
    fontFamily: "var(--font-family)",
    fontSize: renderedFontSize,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  };

  const updateSmallScreen = () => {
    setSmallScreen(isSmallScreen());
  };

  useEffect(() => {
    window.addEventListener("resize", updateSmallScreen);

    return () => {
      window.removeEventListener("resize", updateSmallScreen);
    };
  }, [smallScreen]);

  return (
    <StyledButton
      type={type}
      style={buttonStyle}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
