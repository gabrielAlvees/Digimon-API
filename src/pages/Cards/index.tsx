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
  InputsContainer,
  InputNameDigimon,
  Label,
  Select,
  Option,
  ButtonSearch,
  ContainerButton,
  ContainerCards,
  ContainerImg,
  LoadMoreButton,
  CardsImage,
} from "./styles";
import { toast } from "react-toastify";

export const Cards = () => {
  const [listCards, setListCards] = useState<ICards[]>([]);

  const getCards = async () => {
    try {
      const response = await axios.get(
        `https://digimoncard.io/api-public/search.php?sort=name`,
        {
          params: {
            n: nameDigimon ? nameDigimon : undefined,
            color: colorCard ? colorCard : undefined,
            type: typeCard ? typeCard : undefined,
            sort: sortCard ? sortCard : undefined,
          },
        }
      );
      setListCards(response.data);

      if (nameDigimon || colorCard || typeCard || sortCard) {
        toast.success("Filtro aplicado com sucesso!");
      }
    } catch (error: any) {
      toast.error("Cartas não encontrada!");
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

  // Filter Color cards
  const [colorCard, setColorCard] = useState("");

  // Filter Type
  const [typeCard, setTypeCard] = useState("");

  // Filter Sort
  const [sortCard, setSortCard] = useState("");

  return (
    <Main>
      <FlexContainer>
        <ContainerFilter>
          <Title>Filters</Title>
          <InputsContainer>
            <Label>Digimon</Label>
            <InputNameDigimon
              type="text"
              value={nameDigimon}
              onChange={(e) => setNameDigimon(e.target.value)}
            />

            <Label>Cor</Label>
            <Select
              value={colorCard}
              onChange={(e) => setColorCard(e.target.value)}
            >
              <Option value="">Selecione uma cor</Option>
              <Option value="black">Preto</Option>
              <Option value="blue">Azul</Option>
              <Option value="colorless">Incolor</Option>
              <Option value="green">Verde</Option>
              <Option value="purple">Roxo</Option>
              <Option value="red">Vermelho</Option>
              <Option value="white">Branco</Option>
              <Option value="yellow">Amarelo</Option>
            </Select>

            <Label>Tipo</Label>
            <Select
              value={typeCard}
              onChange={(e) => setTypeCard(e.target.value)}
            >
              <Option value="">Selecione um tipo</Option>
              <Option value="digimon">Digimon</Option>
              <Option value="option">Option</Option>
              <Option value="tamer">Tamer</Option>
              <Option value="digi-egg">Digi-Egg</Option>
            </Select>

            <Label>Aleátorio</Label>
            <Select
              value={sortCard}
              onChange={(e) => setSortCard(e.target.value)}
            >
              <Option value="">Selecione uma opção</Option>
              <Option value="name">Name</Option>
              <Option value="power">Power</Option>
              <Option value="code">Code</Option>
              <Option value="color">Color</Option>
            </Select>
          </InputsContainer>

          <ContainerButton>
            <ButtonSearch onClick={() => getCards()}>
              Aplicar filtros
            </ButtonSearch>
          </ContainerButton>
        </ContainerFilter>

        <ContainerCards>
          {listCards.slice(0, cardsToShow).map((cards: ICards) => (
            <ContainerImg>
              <CardsImage src={`${cards.image_url}`} />
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
