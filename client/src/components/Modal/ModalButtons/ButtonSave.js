import React from "react";

const ButtonSave = ({ handleSavePalette }) => {
  return (
    <button
      onClick={(ev) => {
        ev.preventDefault();
        handleSavePalette();
      }}
    >
      save
    </button>
  );
};

export default ButtonSave;
