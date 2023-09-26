import styled from 'styled-components';

const Texto = styled.Text`
  color: ${props => props.cor};

  font-size: 23px;
  font-weight: bold;
 
  background-color: #08B2E3;
  border-radius: 10px;
  padding: 10px;
`;


const Pagina = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 20px;

  background-color: #57A773;
`;

export default function AppProps() {
  return (
    <Pagina>
      <Texto cor='#96031A'>Texto de exemplo 1</Texto>
      <Texto cor='#1B1B1E'>Texto de exemplo 2</Texto>
    </Pagina>
  );
}
