import styled from 'styled-components';

const Quadrado = styled.View`
  background-color: ${props => props.cor};
  flex: ${props => props.flexivel};
  height: 50px;
`;

const Pagina = styled.View`
  flex: 1;
  flex-direction: column;
`;

export default function AppFlex01() {
  return (
    <Pagina>
      <Quadrado flexivel={1} cor='red'></Quadrado>
      <Quadrado flexivel={2} cor='green'></Quadrado>
      <Quadrado flexivel={1} cor='blue'></Quadrado>
    </Pagina>
  );
}
