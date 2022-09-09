import { Button } from "../../components/Forms/Button";
import { Input } from "../../components/Forms/Input";

import { Container, Header, Title, Form, Fields } from "./styles";

function Register() {
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input placeholder="Nome" />

          <Input placeholder="Preço" />
        </Fields>

        <Button title="Enviar" />
      </Form>
    </Container>
  );
}

export { Register };
