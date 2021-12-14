import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import {
  Background,
  ModalWrapper,
  ModalImg,
  ModalContent,
  SwatchUnit,
  CloseModalButton,
  ModalWrapperSub,
} from "./styled-components";
import { determinDarkLight } from "../Home/ColorWheel/getColors/determineDarkorLight";
// onMouseOver={() => setText('David')}
// onMouseLeave={() => setText(initialTxt)}
const Modal = ({ showModal, setShowModal, palette }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
        console.log("I pressed");
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <CloseModalButton
            aria-label="Close modal"
            onClick={() => setShowModal((prev) => !prev)}
          />
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              {palette &&
                palette.colors.map((color) => {
                  let result = determinDarkLight(color);
                  return (
                    <SwatchUnit
                      onClick={() => {
                        navigator.clipboard.writeText(color);
                      }}
                      isLight={result}
                      style={{ backgroundColor: color }}
                    >
                      {color}
                    </SwatchUnit>
                  );
                })}

              {/* <SwatchUnit
                   src={require("./modal.jpg")}
                alt="camera"
              /> */}
              {/* <ModalContent>
                <h1>Are you ready?</h1>
                <p>Get exclusive access to our next launch.</p>
                <button>Join Now</button>
              </ModalContent> */}
            </ModalWrapper>
            <ModalWrapperSub>
              {palette.thumb && <ModalImg src={palette.thumb} />}
              {palette.name && <ModalContent>{palette.name}</ModalContent>}
            </ModalWrapperSub>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};
export default Modal;
