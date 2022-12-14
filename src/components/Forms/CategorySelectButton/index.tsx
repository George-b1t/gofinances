import { Container, Category, Icon } from "./styles";

interface Props {
  title: string;
  onPress: () => void;
}

function CategorySelectButton({ title, onPress }: Props) {
  return (
    <Container onPress={onPress}>
      <Category>{title}</Category>
      <Icon name="chevron-down" />
    </Container>
  );
}

export { CategorySelectButton };
