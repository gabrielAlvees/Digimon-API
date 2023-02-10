// Importando Componentes
import { DataSales } from "./data/DataSales";
import { ISales } from "../../types/Sales";

// Importando Estilos
import {
  SectionAbout,
  Title,
  ButtonSales,
  ImageSales,
  ContainerAbout,
  About,
  Date,
} from "./styles";

export const Sales = () => {
  return (
    <SectionAbout>
      <Title>Latest updates</Title>
      {DataSales.map((sales: ISales) => (
        <ButtonSales>
          <ImageSales src={`${sales.imageSale}`} />
          <ContainerAbout>
            <Date>{sales.date}</Date>
            <About>{sales.about}</About>
          </ContainerAbout>
        </ButtonSales>
      ))}
    </SectionAbout>
  );
};
