import React, {
  useRef,
  useEffect,
  useCallback,
  useContext,
  useState,
} from "react";
import { useSpring, animated } from "react-spring";
import {
  RowFlex,
  Background,
  ModalWrapper,
  ModalImg,
  ModalContent,
  SwatchUnit,
  CloseModalButton,
  ModalWrapperSub,
} from "./styled-components";
import { CurrentUserContext } from "../Context/CurrentUserContext";
import Notifications from "../Home/Form/Notifications";
import ModalButton from "./ModalButtons";
import { determinDarkLight } from "../Home/ColorWheel/getColors/determineDarkorLight";
// onMouseOver={() => setText('David')}
// onMouseLeave={() => setText(initialTxt)}
const Modal = ({ showModal, setShowModal, palette }) => {
  const modalRef = useRef();
  const [response, setResponse] = useState(null);
  const [imageID, setImageID] = useState("");
  const [previewSource, setPreviewSource] = useState("");
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
      setPreviewSource(null);
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
            onClick={() => {
              setShowModal((prev) => !prev);
              setPreviewSource(null);
            }}
          />
          <RowFlex>
            <animated.div style={animation}>
              <ModalWrapper showModal={showModal}>
                {previewSource && (
                  <img
                    src={previewSource}
                    alt="chosen"
                    style={{ height: "300px" }}
                  />
                )}
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
              </ModalWrapper>
              <ModalWrapperSub>
                {imageID && (
                  <ModalImg
                    cloudName="belteshazzarj"
                    publicId={imageID}
                    height="150"
                    crop="scale"
                  />
                )}
                {palette.name && <ModalContent>{palette.name}</ModalContent>}
                <ModalButton
                  palette={palette}
                  setResponse={setResponse}
                  imageID={imageID}
                  setImageID={setImageID}
                  previewSource={previewSource}
                  setPreviewSource={setPreviewSource}
                />
              </ModalWrapperSub>
            </animated.div>
          </RowFlex>
          <Notifications response={response} setResponse={setResponse} />
        </Background>
      ) : null}
    </>
  );
};
export default Modal;
