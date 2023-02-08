import styled from "styled-components";

import gifImage from "../../assets/header_bg.jpg";

export const Main = styled.div``;

export const HomeImage = styled.div`
  background: url(${gifImage}) no-repeat;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 100vh;
`;

export const ImageDigimon = styled.img`
  width: 100%;
  height: 120vh;
`;

export const DigimonBackground = styled.img`
  z-index: 1;
  width: 45rem;
  height: 45rem;
`;

export const LogoDigimon = styled.img`
  width: 45rem;
  height: 20rem;
`;
