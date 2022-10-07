import { RectButtonProps } from "react-native-gesture-handler";

import { Container, Icon, Title, Button } from "./styles";

const icons = {
  positive: "arrow-up-circle",
  negative: "arrow-down-circle",
};

interface Props extends RectButtonProps {
  title: string;
  type: "positive" | "negative";
  isActive: boolean;
}

function TransactionTypeButton({ title, type, isActive, ...rest }: Props) {
  return (
    <Container type={type} isActive={isActive}>
      <Button {...rest}>
        <Icon type={type} name={icons[type]} />
        <Title>{title}</Title>
      </Button>
    </Container>
  );
}

export { TransactionTypeButton };
