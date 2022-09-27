import { Control, Controller } from "react-hook-form";
import { TextInputProps } from "react-native";

import { Input } from "../Input";

import { Container } from "./styles";

interface Props extends TextInputProps {
  control: Control;
  name: string;
}

function InputForm({ control, name, ...rest }: Props) {
  return (
    <Container>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} {...rest} />
        )}
      ></Controller>
    </Container>
  );
}

export { InputForm };
