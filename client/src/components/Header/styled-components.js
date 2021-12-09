import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavBar = styled.div`
  background-color: var(--color-black-background);
  height: var(--nav-height);
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: flex-start;
  z-index: 2;
`;
export const Logo = styled.span`
  font-family: var(--font-heading);
  font-size: 1rem;
  color: white;
  letter-spacing: 10px;
  font-weight: 100;
`;
export const Sign = styled.button`
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
  background-color: transparent;
  cursor: pointer;
  display: inline-block;
  margin-left: auto;
`;
export const Links = styled(NavLink)`
  font-family: var(--font-body);
  font-size: var(--font-size-body);
  color: var(--color-link);
  border: none;
  cursor: pointer;
  display: inline-block;
  font-weight: 300;
  text-decoration: none;
  transition: all 0.1s;
  &.active {
    color: white;
    font-weight: 600;
  }
  &:hover {
    color: white;
  }
`;
export const NavLinksContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  /* width: 100%; */
  justify-content: space-evenly;
  align-items: center;
  width: 30%;
`;
export const Avatar = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  border: none;
`;
export const List = styled.span`
  font-size: 0.8rem;
`;
export const ListContainer = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  margin-left: 20px;
`;
export const RowFlex = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
`;
export const Divider = styled.div`
  height: 1px;
  width: 100%;
  margin: 20px 0;
  background-color: #d0d0d0;
  border: none;
`;

export const DropDown = styled.div`
  display: flex;
  flex-flow: column;
  padding: 20px;
  width: 320px;
  position: absolute;
  font-family: var(--font-body);
  top: 50px;
  right: 0;
  border: 1px solid #e1e1e1;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: #fff;
  overflow: hidden;
  -webkit-font-smoothing: antialiased;
  box-shadow: 0 2px 6px -1px rgb(0 0 0 / 10%);
  z-index: 2;
  position: fixed;
`;
