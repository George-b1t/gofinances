import { Feather } from "@expo/vector-icons";

import { RFValue } from "react-native-responsive-fontsize";

import styled, { css } from "styled-components/native";

import { RectButton } from "react-native-gesture-handler";

interface IconProps {
  type: "positive" | "negative";
}

interface ContainerProps {
  isActive: boolean;
  type: "positive" | "negative";
}

export const Container = styled.View<ContainerProps>`
  width: 48%;

  flex-direction: row;
  align-items: center;

  border-width: ${({ isActive }) => (isActive ? "0px" : "1.5px")};
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.text};
  border-radius: 5px;

  ${({ isActive, type, theme }) =>
    isActive &&
    type === "negative" &&
    css`
      background-color: ${theme.colors.attention_light};
    `}

  ${({ isActive, type, theme }) =>
    isActive &&
    type === "positive" &&
    css`
      background-color: ${theme.colors.success_light};
    `}
`;

export const Button = styled(RectButton)`
  flex: 1;

  padding: 16px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(Feather)<IconProps>`
  font-size: ${RFValue(24)}px;
  margin-right: 12px;

  color: ${({ theme, type }) =>
    type === "positive" ? theme.colors.success : theme.colors.attention};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;
