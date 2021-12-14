import React from "react";

const ButtonShare = ({ handleSharePalette }) => {
  return (
    <button
      onClick={(ev) => {
        ev.preventDefault();
        handleSharePalette();
      }}
    >
      Share
    </button>
  );
};

export default ButtonShare;
