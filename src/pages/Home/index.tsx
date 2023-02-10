// Importando Componentes
import { Navbar } from "../../components/Navbar";
import { Sales } from "../../components/Sales";

// Importando Imagens
import gifImage from "../../assets/header_bg.jpg";
import digimonImage from "../../assets/hero_img.png";
import backgroundLeft from "../../assets/logo_01.png";

// Importando Estilos
import {
  Main,
  HomeImage,
  BackgroundImage,
  DigimonBackground,
  LogoDigimon,
} from "./styles";

export const Home = () => {
  return (
    <Main>
      <Navbar />
      <HomeImage>
        <LogoDigimon src={backgroundLeft} />
        <DigimonBackground src={digimonImage} />
      </HomeImage>
      <Sales />
    </Main>
  );
};
