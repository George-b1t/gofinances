import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useState } from "react";
import { HighlightCard } from "../../components/HighlightCard";
import {
  TransactionCard,
  TransactionCardProps,
} from "../../components/TransactionCard";
import "intl";
import "intl/locale-data/jsonp/pt-BR";

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
  LogoutButton,
  LoadContainer,
} from "./styles";
import { useFocusEffect } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";

import { useTheme } from "styled-components";

export interface DataListProps extends TransactionCardProps {
  id: string;
}

interface HighlightProps {
  amount: string;
}

interface HighlightData {
  entries: HighlightProps;
  expensive: HighlightProps;
  total: HighlightProps;
}

function Dashboard() {
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [transactions, setTransactions] = useState<DataListProps[]>([]);
  const [highlightData, setHighlightData] = useState<HighlightData>(
    {} as HighlightData
  );

  function parseToLocalAmount(amount: number): string {
    return amount.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  async function loadTransactions() {
    const dataKey = "@gofinances:transactions";
    const response = await AsyncStorage.getItem(dataKey);

    const transactions = response ? JSON.parse(response) : [];

    let entriesTotal = 0;
    let expensiveTotal = 0;

    const transactionsFormatted: DataListProps[] = transactions.map(
      (item: DataListProps) => {
        if (item.type === "positive") {
          entriesTotal += Number(item.amount);
        } else {
          expensiveTotal += Number(item.amount);
        }

        const amount = parseToLocalAmount(Number(item.amount));

        const date = Intl.DateTimeFormat("pt-BR", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }).format(new Date(item.date));

        return {
          id: item.id,
          name: item.name,
          type: item.type,
          category: item.category,
          amount,
          date,
        };
      }
    );

    const total = entriesTotal - expensiveTotal;

    setTransactions(transactionsFormatted);
    setHighlightData({
      entries: {
        amount: parseToLocalAmount(entriesTotal),
      },
      expensive: {
        amount: parseToLocalAmount(expensiveTotal),
      },
      total: {
        amount: parseToLocalAmount(total),
      },
    });

    setIsLoading(false);
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadTransactions();
    }, [])
  );

  return (
    <Container>
      {isLoading ? (
        <LoadContainer>
          <ActivityIndicator color={theme.colors.primary} size="large" />
        </LoadContainer>
      ) : (
        <>
          <Header>
            <UserWrapper>
              <UserInfo>
                <Photo
                  source={{
                    uri: "https://avatars.githubusercontent.com/u/67129166?v=4",
                  }}
                />

                <User>
                  <UserGreeting>Olá,</UserGreeting>
                  <UserName>George</UserName>
                </User>
              </UserInfo>

              <LogoutButton onPress={() => {}}>
                <Icon name="power" />
              </LogoutButton>
            </UserWrapper>
          </Header>

          <HighlightCards>
            <HighlightCard
              type="up"
              title="Entradas"
              amount={highlightData.entries?.amount}
              lastTransaction="Última entrada dia 13 de abril"
            />
            <HighlightCard
              type="down"
              title="Saídas"
              amount={highlightData.expensive?.amount}
              lastTransaction="Última entrada dia 03 de abril"
            />
            <HighlightCard
              type="total"
              title="Total"
              amount={highlightData.total?.amount}
              lastTransaction="01 à 16 de abril"
            />
          </HighlightCards>

          <Transactions>
            <Title>Listagem</Title>

            <TransactionList
              data={transactions}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <TransactionCard data={item} />}
            />
          </Transactions>
        </>
      )}
    </Container>
  );
}

export { Dashboard };
