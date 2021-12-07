import styled from "styled-components";

export const FlexRow = styled.div`
  /* width: 100%; */
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  input {
    height: 15px;
    width: 15px;
    /* appearance: none;
    background-color: #fff;
    margin: 0;
    font: inherit;
    color: currentColor;
    width: 1.15em;
    height: 1.15em;
    border: 0.15em solid currentColor;
    border-radius: 50%; */
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
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  font-family: var(--font-body);
  justify-content: space-evenly;
  height: 200px;
  font-size: 0.9rem;
`;
