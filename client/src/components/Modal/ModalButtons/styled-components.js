import { animated } from "react-spring";
import styled from "styled-components";

export const AnimatedText = styled.span`
  font-size: var(--font-size-body);
  color: black;
`;

export const Button = styled.button`
  font-family: var(--font-body);
  font-size: var(--font-size-body);
  color: black;
  border: none;
  background-color: var(--color-light-grey);
  cursor: pointer;
  display: block;
  position: relative;
  padding: 10px 20px;
  display: flex;
  flex-flow: row;
  border-radius: 50px;
  align-items: center;
  transition: all 0.25s ease;
  svg {
    fill: black;
    margin-right: 10px;
    font-size: 1rem;
  }
  &:hover {
    background-color: var(--color-dark-grey);
    color: white;
  }
  &:hover svg {
    fill: white;
  }
  /* @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
  &::before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }
  &:active {
    color: #000;
  }
  &:active::after {
    background: transparent;
  }
  &:hover::before {
    opacity: 1;
  }
  &::after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
  } */
`;

export const Input = styled.input`
  display: none;
`;

export const Label = styled.label`
  font-family: var(--font-body);
  font-size: 0.8rem;
  color: black;
  border: none;
  background-color: var(--color-light-grey);
  cursor: pointer;
  display: block;
  position: relative;
  padding: 10px 20px;
  display: flex;
  flex-flow: row;
  border-radius: 50px;
  align-items: center;
  cursor: pointer;
  transition: all 0.25s ease;

  svg {
    fill: black;
    margin-right: 10px;
    font-size: 1rem;
  }
  &:hover {
    background-color: var(--color-dark-grey);
    color: white;
  }
  &:hover svg {
    fill: white;
  }
`;
