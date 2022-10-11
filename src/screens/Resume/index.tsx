import { HistoryCard } from "../../components/HistoryCard";
import { Container, Header, Title } from "./styles";

function Resume() {
  return (
    <Container>
      <Header>
        <Title>Resumo por categoria</Title>
      </Header>

      <HistoryCard color="blue" amount="R$ 150,00" title="Compras" />
      <HistoryCard color="red" amount="R$ 150,00" title="Compras" />
      <HistoryCard color="purple" amount="R$ 150,00" title="Compras" />
    </Container>
  );
}

export { Resume };
