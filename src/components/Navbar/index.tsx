// React
import { useState } from "react";

// Importando os estilos
import { Container, Nav, Title, ContainerButtons, Link } from "./styles";

export const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
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
          <Link>API</Link>
        </ContainerButtons>
      </Nav>
    </Container>
  );
};
