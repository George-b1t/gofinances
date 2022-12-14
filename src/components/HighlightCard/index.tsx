import { View } from "react-native";

import {
  Container,
  Header,
  Title,
  Icon,
  Amount,
  LastTransaction,
} from "./styles";

interface Props {
  title: string;
  amount: string;
  lastTransaction: string;
  type: "up" | "down" | "total";
}

const icon = {
  up: "arrow-up-circle",
  down: "arrow-down-circle",
  total: "dollar-sign",
};

function HighlightCard({ title, amount, lastTransaction, type }: Props) {
  return (
    <Container type={type}>
      <Header>
        <Title type={type}>{title}</Title>
        <Icon name={icon[type]} type={type} />
      </Header>

      <View>
        <Amount type={type}>{amount}</Amount>
        <LastTransaction type={type}>{lastTransaction}</LastTransaction>
      </View>
    </Container>
  );
}

export { HighlightCard };
