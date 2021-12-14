import styled from "styled-components";
export const Cube = styled.div`
  height: calc(2 * var(--mini-swatch-width));
  margin: 4px 0;
  width: var(--mini-swatch-width);
  border-top: 1px solid var(--card-border-color);
  border-bottom: 1px solid var(--card-border-color);
`;
export const ColorList = styled.div`
  list-style-type: none;
  padding: 0;
  margin: 0;
  margin-bottom: 5px;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: flex-start;
  ${Cube}:first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border-left: 1px solid var(--card-border-color);
  }
  ${Cube}:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-right: 1px solid var(--card-border-color);
    margin-right: 40px;
  }

  /* width: 100%; */
`;
export const FlexColumn = styled.div`
  /* width: 100%; */
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  height: auto;
  /* font-size: 0.9rem; */
`;
