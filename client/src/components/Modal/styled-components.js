import styled from "styled-components";
import { Image } from "cloudinary-react";
import { MdClose } from "react-icons/md";

export const RowFlex = styled.div`
  display: flex;
  flex-flow: row nowrap;
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
  width: 800px;
  height: 380px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
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
  margin-top: 40px;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
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
`;
