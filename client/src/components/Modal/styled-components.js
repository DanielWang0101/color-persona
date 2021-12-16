import styled from "styled-components";
import { Image } from "cloudinary-react";
import { MdClose } from "react-icons/md";

export const RowFlex = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;
export const Avatar = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: none;
  margin: 0 10px 0 0;
  outline: 2px solid white;
`;
export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: absolute; */
  top: 0;
  left: 0;
  font-family: var(--font-body);
  z-index: 4;
`;
export const ModalImg = styled(Image)`
  /* width: 100%; */
  height: auto;
  /* border-radius: 10px 0 0 10px; */
  background: #fff;
`;
export const ModalWrapper = styled.div`
  width: 500px;
  height: 300px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  min-height: 120px;
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr; */
  display: flex;
  flex-flow: row;
  position: relative;
  z-index: 10;
  border-radius: 4px;
  overflow: hidden;
`;
export const ModalWrapperSub = styled(ModalWrapper)`
  height: auto;
  /* margin-top: 40px; */
  background-color: transparent;
  box-shadow: none;
  align-items: center;
  justify-content: space-between;
  overflow: visible;
  div:first-child {
    /* margin-right: auto; */
  }
`;
export const SwatchUnit = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
  align-items: flex-end;
  cursor: pointer;
  font-weight: 600;
  color: ${({ isLight }) => {
    if (!isLight) {
      return "white";
    } else {
      return "black";
    }
  }};
  /* border-radius: 10px 0 0 10px; */
  /* background: #000; */
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: black;
  padding: 10px;
  background-color: var(--color-light-grey);
  border-radius: 100px;

  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 70px;
  right: 200px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
  fill: grey;
`;
