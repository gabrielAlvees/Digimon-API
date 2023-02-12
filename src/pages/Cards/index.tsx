// React
import { useEffect, useState } from "react";

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
        { params: { n: nameDigimon || "" } }
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
          <button onClick={() => getCards()}>A</button>
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
