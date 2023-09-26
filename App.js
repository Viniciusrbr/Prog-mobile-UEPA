import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components';

const Texto1 = styled.Text`
  font-size: 23px;
  font-weight: bold;
  color: #5BC0BE;
  background-color: #1C2541;
  border-radius: 10px;
  padding: 10px;
`;

const Texto2 = styled.Text`
  font-size: 23px;
  font-weight: bold;
  color: #FB8B24;
  background-color: #C6D8AF;
  border-radius: 10px;
  padding: 10px;

`;

const Pagina = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 20px;

  background-color: #3A506B;
`;

export default function App() {
  return (
    <Pagina>
      <Texto1>Texto de exemplo 1</Texto1>
      <Texto2>Texto de exemplo 2</Texto2>
      <StatusBar style="auto" />
    </Pagina>
  );
}
