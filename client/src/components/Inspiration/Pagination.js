import React from "react";
import styled from "styled-components";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

const Pagination = ({ page, setPage }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <Button
        onClick={() => {
          setPage((c) => c - 1);
        }}
      >
        <BsArrowLeftCircle />
      </Button>
      <Button
        onClick={() => {
          setPage((c) => c + 1);
        }}
      >
        <BsArrowRightCircle />
      </Button>
    </div>
  );
};

const Button = styled.button`
  border: none;
  margin-right: 20px;
  background: transparent;
  cursor: pointer;
  width: 60px;
  font-size: 3rem;
`;
export default Pagination;
