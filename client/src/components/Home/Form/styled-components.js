import styled from "styled-components";

export const FlexRow = styled.div`
  /* width: 100%; */
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
export const Description = styled.p`
  /* width: 100%; */

  color: grey;
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
  /* width: 100%; */
`;

// Form
export const PlusButton = styled.button`
  font-family: var(--font-body);
  font-size: 0.8rem;
  color: ${({ isAuthenticated }) => {
    if (isAuthenticated) {
      return "black";
    } else {
      return "white";
    }
  }};
  border: none;
  background-color: black;
  cursor: pointer;
  display: inline-block;
  position: relative;
  &::after {
    content: " ";
    position: absolute;
    display: block;
    background-color: black;
    height: 10px;
    margin-top: -5px;
    top: 50%;
    left: 5px;
    right: 5px;
    z-index: 1;
  }
`;
// Side Widget
export const SideWidget = styled.div`
  display: flex;
  flex-flow: column;
  padding: 20px;
  width: 250px;
  position: absolute;
  font-family: var(--font-body);
  font-size: var(--font-size-option);
  top: 150px;
  right: 300px;
  border: 1px solid #e1e1e1;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: #fff;
  overflow: hidden;
  -webkit-font-smoothing: antialiased;
  box-shadow: 0 2px 6px -1px rgb(0 0 0 / 10%);
  z-index: 2;
  -webkit-animation: pulse 0.1s ease-in-out;
  -moz-animation: pulse 0.1s ease-in-out;
  -o-animation: pulse 0.1s ease-in-out;
  animation: pulse 0.1s ease-in-out;
  @keyframes pulse {
    from {
      transform: translateX(50px);
      opacity: 0;
    }
    to {
      transform: translateX(0);

      opacity: 1;
    }
  }
`;

export const Input = styled.input`
  display: inline-block;
  width: var(--swatch-width);
  font-family: var(--font-body);
  height: auto;
  margin-top: var(--margin-top-input);
  outline: none;
  border-bottom: 1px solid var(--color-divider);
  font-size: var(--font-size-option);
  border-radius: 0px;
  &:focus {
    border-bottom: 2px solid var(--color-button-blue);
    margin-bottom: -1px;
  }
`;
export const Button = styled.button`
  font-family: var(--font-body);
  font-size: 0.8rem;
  color: white;
  border: none;
  background-color: var(--color-button-blue);
  cursor: pointer;
  display: block;
  position: relative;
  padding: 10px 20px;
  width: 80px;
  border-radius: 50px;
  margin-top: var(--margin-top-input);
  align-self: flex-start;
`;
// --color-button-blue
