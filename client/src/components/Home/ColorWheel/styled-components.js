import styled from "styled-components";

export const Cube = styled.div`
  height: var(--swatch-width);
  margin: 4px 0;
  margin-left: 10px;
`;
export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;
export const ColorList = styled.div`
  list-style-type: none;
  padding: 0;
  margin: 0;
  margin-bottom: 12px;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  /* width: 100%; */
`;
export const FlexColumn = styled.div`
  width: 100%;
  /* flex: 1 1 50%; */

  display: flex;
  flex-flow: column nowrap;
  font-family: var(--font-body);
  justify-content: space-evenly;
  height: 200px;
  font-size: 0.9rem;
`;
export const Input = styled.input`
  display: inline-block;
  width: var(--swatch-width);
  font-family: var(--font-body);
  height: auto;
  margin-top: 10px;
  outline: none;
  border-bottom: 1px solid var(--color-divider);
  font-size: 0.9rem;
  margin-left: 10px;
  border-radius: 0px;
  &:focus {
    border-bottom: 2px solid #0084ff;
    margin-bottom: -1px;
  }
`;
