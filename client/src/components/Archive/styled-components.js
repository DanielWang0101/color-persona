import styled from "styled-components";

//swatch
export const Cube = styled.div`
  height: var(--mini-swatch-width);
  margin: 4px 0;
  width: var(--mini-swatch-width);
`;
export const ColorList = styled.div`
  list-style-type: none;
  padding: 0;
  margin: 0;
  margin-bottom: 12px;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: flex-start;
`;
// layout
export const FlexRow = styled.div`
  font-family: var(--font-body);
  font-size: var(--font-size-option);

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  input {
    height: 15px;
    width: 15px;

    transform: translateY(-0.075em);
    margin-right: 15px;
  }
`;

export const Center = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const FlexColumn = styled.div`
  /* width: 100%; */
  flex: 1 1 30%;
  display: flex;
  flex-flow: column nowrap;
  font-family: var(--font-body);
  justify-content: space-evenly;
  height: 200px;
  font-size: 0.9rem;
`;

// Elements
// export const SelectBox = styled.div`
//   position: relative;
//   font-family: var(--font-body);
//   font-size: var(--font-size-option);
//   .dropdown {
//     width: 100px;
//     display: inline-block;
//     position: relative;
//     user-select: none;
//     .dropdown-btn {
//       padding: 5px;
//       background: white;
//       font-weight: 600;
//       color: var(--color-dropdown-font);
//       display: flex;
//       align-items: center;
//       justify-content: space-between;
//       cursor: pointer;
//     }
//     .dropdown-content {
//       display: flex;
//       flex-flow: column;
//       padding: 20px;
//       width: 150px;
//       position: absolute;
//       font-family: var(--font-body);
//       font-size: var(--font-size-option);
//       border: 1px solid #e1e1e1;
//       border-bottom-left-radius: 4px;
//       border-bottom-right-radius: 4px;
//       background-color: #fff;
//       overflow: hidden;
//       -webkit-font-smoothing: antialiased;
//       box-shadow: 0 2px 6px -1px rgb(0 0 0 / 10%);
//       z-index: 2;
//       font-weight: 300;
//       color: var(--color-dropdown-font);
//       transform: translateX(-25px);
//       .dropdown-item {
//         padding: 5px;
//         cursor: pointer;
//         transition: all 0.25s;
//         &:hover {
//           background-color: #f4f4f4;
//         }
//       }
//     }
//   }
// `;
export const DropDownList = styled.div`
  width: 100%;
  display: inline-block;
  position: relative;
  user-select: none;
`;

export const DropdownBtn = styled.div`
  padding: 5px;
  background: white;
  font-weight: 600;
  color: var(--color-dropdown-font);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  background-color: blue;
  /* ${CheckBox}[type=checkbox]:checked & {
    background-color: red;
  } */
`;
export const CheckBox = styled.input`
  /* appearance: none; */
  &:checked + ${DropdownBtn} {
    background-color: none;
  }
`;
export const SelectBox = styled.div`
  position: relative;
  font-family: var(--font-body);
  font-size: var(--font-size-option);

  /* .dropdown {
    width: 100%;
    display: inline-block;
    position: relative;
    user-select: none; */
  &:hover {
    .dropdown-content {
      height: auto;
    }
    svg {
      transform: none;
    }
  }
  .dropdown-btn {
    padding: 5px;
    background: white;
    font-weight: 600;
    color: var(--color-dropdown-font);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    svg {
      margin-right: 20px;
      /* transform: ${({ toggle }) => {
        if (toggle) {
          return "none";
        } else {
          return "rotateZ(-90deg)";
        }
      }}; */
      transform: rotateZ(-90deg);
      /* &:hover {
          transform: none;
        } */
      ${CheckBox}:checked + & {
        transform: none;
      }
    }
  }

  .dropdown-content {
    /* height: ${({ toggle }) => {
      if (toggle) {
        return "auto";
      } else {
        return 0;
      }
    }}; */
    height: 0;
    display: flex;
    flex-flow: column;
    /* padding: 20px; */
    width: 100%;
    position: absolute;
    font-family: var(--font-body);
    font-size: var(--font-size-option);
    /* border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px; */
    background-color: #fff;
    overflow: hidden;
    -webkit-font-smoothing: antialiased;
    /* box-shadow: 0 2px 6px -1px rgb(0 0 0 / 10%); */
    z-index: 2;
    font-weight: 300;
    color: var(--color-dropdown-font);
    border-bottom: 1px solid var(--color-divider);

    .dropdown-item {
      padding: 5px;
      cursor: pointer;
      transition: all 0.25s;
      &:hover {
        background-color: #f4f4f4;
      }
    }
  }
  /* } */
`;
