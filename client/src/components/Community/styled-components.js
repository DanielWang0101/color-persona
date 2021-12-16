import styled from "styled-components";

export const Masonry = styled.div`
  display: flex;
  flex-flow: column wrap;
height: 800px;
align-items:flex-start;
justify-content:flex-start;
align-content:flex-start;
gap: 30px 20px;
  }
`;

export const Card = styled.div`
  /* display: inline-block;
  width: 100%; */
  display: flex;
  flex-flow: column;
  position: relative;

  /* width: 100%; */
`;
export const RowFlex = styled.div`
  display: flex;
  flex-flow: row;
  background: var(--color-light-grey);
  padding: 5px;
  border-radius: 50px;
  width: 200px;
`;
export const PaletteName = styled.span`
  font-size: 0.8rem;
  font-weight: 400;
`;
