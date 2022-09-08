import { Feather } from "@expo/vector-icons";

import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.shape};

  width: ${RFValue(300)}px;
  height: ${RFValue(150)}px;
  border-radius: 5px;

  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;
  margin-right: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;

  line-height: 22px;

  color: ${({ theme }) => theme.colors.text_dark};
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(40)}px;
`;

export const Footer = styled.View``;

export const Amount = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;

  line-height: 50px;

  color: ${({ theme }) => theme.colors.text_dark};
`;

export const LastTransaction = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;

  line-height: 18px;

  color: ${({ theme }) => theme.colors.text};
`;
