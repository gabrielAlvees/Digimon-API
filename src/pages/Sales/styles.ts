import styled from "styled-components";

export const SectionAbout = styled.div`
  background-color: #fff;
  width: 100%;
`;

export const Title = styled.p`
  font-family: var(--font-cairo);
  font-size: 2.5rem;
  text-align: center;
  color: #1251d0;
  padding: 40px 0;
`;

export const ContainerSalesMain = styled.div`
  width: 55%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  border: 1px solid red;
  margin-bottom: 10px;
`;

export const ButtonSales = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  background-color: transparent;
  border: none;
`;

export const ImageSales = styled.img`
  width: 16.80rem;
  height: 11rem;
`;

export const ContainerAbout = styled.div`
  width: 45%;
  text-align: center;
  border: 1px solid red;
`

export const About = styled.p`
  text-align: start;
  padding: 5px 10px;
`;

export const Date = styled.p`
  text-align: start;
  padding: 5px 10px;
`;
