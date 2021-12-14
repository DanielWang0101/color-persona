import React, { useState } from "react";
import { Cube, ColorList, FlexColumn } from "./styled-components";
import Modal from "../../Modal";
const MiniSwatch = ({ palette }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <FlexColumn>
      <ColorList
        onClick={(ev) => {
          ev.preventDefault();
          setShowModal(!showModal);
        }}
      >
        {palette.colors.map((color) => {
          return <Cube style={{ backgroundColor: color }} />;
        })}
      </ColorList>

      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        palette={palette}
      />
    </FlexColumn>
  );
};

export default MiniSwatch;
