import styled from "styled-components";

interface NavbarProps {
  active: boolean;
}

export const Container = styled.div<NavbarProps>`
  background-color: #000;
  width: 100%;
  padding: 10px 0;
  position: fixed;
  z-index: 999;
  background-color: ${Props => Props.active ? '#000' : 'transparent'};
  transition:   ${Props => Props.active ? '500ms' : '500ms'};
`;

export const Nav = styled.div`
  color: #fff;
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 10px;
`;

export const Title = styled.h1`
  font-family: var(--font-ele);
  text-transform: uppercase;
`;

export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 35%;
`;

export const Link = styled.a`
  cursor: pointer;
  color: #fff;
  text-decoration: none;

  :hover {
    border-bottom: 1px solid #fff;
  }
`;
