// Importando Componentes
import { Navbar } from "../../components/Navbar";
import { Sales } from "../Sales";

// Importando Imagens
import gifImage from "../../assets/header_bg.jpg";
import digimonImage from "../../assets/hero_img.png";

// Importando Estilos
import { Main, HomeImage, ImageDigimon, DigimonBackground } from "./styles";

export const Home = () => {
  return (
    <Main>
      <Navbar />
      <HomeImage>
        <ImageDigimon src={gifImage} />
        <DigimonBackground src={digimonImage} />
      </HomeImage>
      <Sales />
    </Main>
  );
};
