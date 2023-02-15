// React
import { useEffect, useState } from "react";
import Select from "react-select";

// Importando componentes
import { ICards } from "../../types/Cards";

// API
import axios from "axios";

// CSS
import {
  Main,
  FlexContainer,
  ContainerFilter,
  Title,
  InputNameDigimon,
  ButtonSearch,
  ContainerCards,
  ContainerImg,
  LoadMoreButton,
  CardsImage,
} from "./styles";

export const Cards = () => {
  const [listCards, setListCards] = useState<ICards[]>([]);

  const getCards = async () => {
    try {
      const response = await axios.get(
        `https://digimoncard.io/api-public/search.php?`,
        { params: { n: nameDigimon, color: select, type: type } }
      );
      setListCards(response.data);
    } catch (error: any) {
      console.log(`${error}`);
    }
  };

  useEffect(() => {
    getCards();
  }, []);

  // Load More
  const [cardsToShow, setCardsToShow] = useState(8);
  const handleLoadMore = () => {
    setCardsToShow(cardsToShow + 8);
  };

  // Filter Name
  const [nameDigimon, setNameDigimon] = useState("");

  // Filter Name
  const [select, setselect] = useState("");

  // Filter Name
  const [type, settype] = useState("");

  return (
    <Main>
      <FlexContainer>
        <ContainerFilter>
          <Title>Filters</Title>
          <InputNameDigimon
            type="text"
            value={nameDigimon}
            onChange={(e) => setNameDigimon(e.target.value)}
          />
          <select value={select} onChange={(e) => setselect(e.target.value)}>
            <option value="red">Valor 1</option>
            <option value="black">Valor 3</option>
          </select>

          <select value={type} onChange={(e) => settype(e.target.value)}>
            <option value="digimon">Valor 1</option>
            <option value="Option">Valor 3</option>
            <option value="Tamer">Valor 3</option>
            <option value="Digi-Egg">Valor 3</option>
          </select>
          <ButtonSearch onClick={() => getCards()}>Search</ButtonSearch>
        </ContainerFilter>
        <ContainerCards>
          {listCards.slice(0, cardsToShow).map((cards: ICards) => (
            <ContainerImg>
              <CardsImage src={`${cards.image_url}`} />
              <div>a</div>
            </ContainerImg>
          ))}
        </ContainerCards>
      </FlexContainer>

      {listCards.length > cardsToShow && (
        <LoadMoreButton onClick={handleLoadMore}>Carregar mais</LoadMoreButton>
      )}
    </Main>
  );
};
