import styled from 'styled-components';
import Carros from './componets/Atividades/02Carros';

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
    <Carros />
  );
}
