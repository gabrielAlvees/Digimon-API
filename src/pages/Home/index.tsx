// React
import { useState } from "react";

// Importando Componentes
import { Navbar } from "../../components/Navbar";

// Importando Imagens
import gifImage from "../../assets/header_bg.jpg";
import digimonImage from "../../assets/hero_img.png";
import bgAbout from "../../assets/bgHomeSection2.jpg";
import imageSales from "../../assets/1120.jpg";

// Importando Estilos
import {
  Main,
  HomeImage,
  ImageDigimon,
  DigimonBackground,
  SectionAbout,
  Title,
  ContainerSalesMain,
  ButtonSales,
  ImageSales,
  ContainerAbout,
  About,
  Date,
} from "./styles";

export const Home = () => {
  return (
    <Main>
      <Navbar />
      <HomeImage>
        <ImageDigimon src={gifImage} />
        <DigimonBackground src={digimonImage} />
      </HomeImage>
      <SectionAbout>
        <Title>Latest updates</Title>
        <ContainerSalesMain>
          <ButtonSales>
            <ImageSales src={imageSales} />
            <ContainerAbout>
              <Date>yyyy/DD/mm</Date>
              <About>
                Digimon Card Game VS Royal Knights [BT-13] Scheduled to be
                released on 02/24 (Fri.)! Gather 13 Holy Knights! Burst mode
                also appeared for the first time! !
              </About>
            </ContainerAbout>
          </ButtonSales>
        </ContainerSalesMain>
      </SectionAbout>
    </Main>
  );
};
