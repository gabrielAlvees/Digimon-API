// React
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Importando os estilos
import { Container, Nav, Title, ContainerButtons, Link } from "./styles";

export const Navbar = () => {
  // Função para mudar o background da navbar
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  const navigate = useNavigate();

  return (
    <Container active={navbar}>
      <Nav>
        <Title>Digimon API</Title>
        <ContainerButtons>
          <Link href="https://digimon.net/" target="_blank">
            Digimon Official
          </Link>
          <Link href="https://digimon-api.vercel.app/" target="_blank">
            Official API
          </Link>
          <Link onClick={() => navigate("/Cards")}>Cards API</Link>
        </ContainerButtons>
      </Nav>
    </Container>
  );
};
