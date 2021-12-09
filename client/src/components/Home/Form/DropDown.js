import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FiChevronDown } from "react-icons/fi";
const DropDown = ({}) => {
  const [toggle, setToggle] = useState(false);
  const [selected, setSelected] = useState("My Archive");
  const option = ["My Archive", "Color-Persona"];
  // useEffect(() => {
  //   fetch("/api/flights")
  //     .then((res) => res.json())
  //     .then((result) => setFlights(result.data));
  // }, []);
  return (
    <SelectBox>
      {/* <Wrap
        onChange={(ev) => {
          setFlight(ev.target.value);
        }}
      >
        <Item value="">My Archive</Item>
        {flights && flights.length > 0
          ? flights.map((flight) => {
              return <Item eventKey={flight}>{flight}</Item>;
            })
          : null}
      </Wrap> */}

      <div class="dropdown">
        <div
          class="dropdown-btn"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {selected}
          <FiChevronDown />
        </div>
        {toggle && (
          <div class="dropdown-content">
            {option.map((item) => {
              return (
                <div
                  class="dropdown-item"
                  onClick={(ev) => {
                    setSelected(item);
                    setToggle(!toggle);
                  }}
                >
                  {item}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </SelectBox>
  );
};
const SelectBox = styled.div`
  position: relative;
  font-family: var(--font-body);
  font-size: var(--font-size-option);
  .dropdown {
    width: 100px;
    display: inline-block;
    position: relative;
    user-select: none;
    .dropdown-btn {
      padding: 5px;
      background: white;
      font-weight: 600;
      color: var(--color-dropdown-font);
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
    }
    .dropdown-content {
      display: flex;
      flex-flow: column;
      padding: 20px;
      width: 150px;
      position: absolute;
      font-family: var(--font-body);
      font-size: var(--font-size-option);
      border: 1px solid #e1e1e1;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      background-color: #fff;
      overflow: hidden;
      -webkit-font-smoothing: antialiased;
      box-shadow: 0 2px 6px -1px rgb(0 0 0 / 10%);
      z-index: 2;
      font-weight: 300;
      color: var(--color-dropdown-font);
      transform: translateX(-25px);
      .dropdown-item {
        padding: 5px;
        cursor: pointer;
        transition: all 0.25s;
        &:hover {
          background-color: #f4f4f4;
        }
      }
    }
  }
`;

const Wrap = styled.select`
  width: auto;
  outline: none;
  border: none;
  border-radius: 2px;
  margin-right: 20px;
`;
const Item = styled.option`
  display: inline-block;
`;
export default DropDown;
