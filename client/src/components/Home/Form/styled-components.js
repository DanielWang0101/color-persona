import styled from "styled-components";

export const FlexRow = styled.div`
  /* width: 100%; */
  font-family: var(--font-body);
  font-size: var(--font-size-option);
  margin-top: 10px;
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
  margin-bottom: 10px;

  color: grey;
`;
export const Center = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const FinePrint = styled.p`
  font-size: var(--font-size-option);
  color: var(--color-link);
  margin-bottom: 10px;
  text-align: justify;
`;
export const FlexColumn = styled.form`
  width: 15vw;
  flex: 1 1 30%;
  display: flex;
  flex-flow: column nowrap;
  font-family: var(--font-body);
  justify-content: flex-start;
  /* height: 300px; */
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
  ${Cube}:first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  ${Cube}:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
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
export const Notification = styled(SideWidget)`
  top: 100px;
  padding: 10px;
  right: 320px;
  width: auto;
  justify-content: space-between;
  flex-flow: row nowrap;
  align-items: center;
  -webkit-animation: pulse 0.05s ease;
  -moz-animation: pulse 0.05s ease;
  -o-animation: pulse 0.05s ease;
  animation: pulse 0.05s ease;
  svg {
    font-size: 1rem;
    font-weight: 600;
    margin-left: 10px;
    color: ${({ success }) => {
      if (success) {
        return "green";
      } else {
        return "red";
      }
    }};
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
// Toggleshare
export const ButtonToggle = styled.button`
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  cursor: pointer;
`;
export const Container = styled.div`
  /* border: 1px solid black; */
  display: block;
  position: relative;
  width: 40px;
  height: 32px;
`;

export const StyledBackdrop = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 16px;
  background: grey;
  top: calc(50% - 8px);
  opacity: 25%;
  border-radius: 8px;
  top: calc(50% - 8px);
`;

export const Ball = styled.div`
  position: absolute;
  top: 6px;
  left: 0;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({ checked }) =>
    checked ? "var(--color-button-blue)" : "grey"};
  margin-top: 2px;
  transition: all 0.25s ease-out;
  ${ButtonToggle}:focus & {
    /* outline: 2px solid white; */
  }
`;
