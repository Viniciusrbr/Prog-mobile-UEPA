import styled from 'styled-components';

const Quadrado = styled.View`
  background-color: ${props => props.cor};
  width: 50px;
  height: 50px;
`;

const Pagina = styled.View`
  flex: 1;
  justify-content: space-around;
`;

export default function App() {
  return (
    <Pagina>
      <Quadrado cor='red'></Quadrado>
      <Quadrado cor='green'></Quadrado>
      <Quadrado cor='blue'></Quadrado>
      <Quadrado cor='yellow'></Quadrado>
    </Pagina>
  );
}
