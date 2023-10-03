import styled from 'styled-components';

const Header = styled.View`
  flex-direction: row;
  justify-content: center;
  background-color: #ddd;
  flex-wrap: wrap;
`

const Quadrado = styled.View`
  background-color: ${props => props.cor};
  width: 50px;
  height: 50px;
`;

const QuadradoMedio = styled.View`
  background-color: ${props => props.cor};
  width: 150px;
  height: 50px;
`;

const QuadradoGrande = styled.View`
  background-color: ${props => props.cor};
  width: 250px;
  height: 50px;

  justify-content: center;
  align-items: center;
`;

const Frase = styled.Text`
  font-size: 20px;
  color: black;
  font-weight: bold;

  background-color: #fff;
  padding: 12px;
`;

const Pagina = styled.View`
  flex:1;
  align-items: center;
  justify-content: center;
`;

export default function Mosaico() {
  return (
    <Pagina>

      <Header >
        <QuadradoMedio cor='green' />
        <Quadrado cor='yellow' />
        <QuadradoMedio cor='green' />

        <Quadrado cor='green' />
        <Quadrado cor='green' />
        <Quadrado cor='yellow' />
        <Quadrado cor='blue' />
        <Quadrado cor='yellow' />
        <Quadrado cor='green' />
        <Quadrado cor='green' />

        <Quadrado cor='green' />
        <Quadrado cor='yellow' />
        <QuadradoMedio cor='blue' />
        <Quadrado cor='yellow' />
        <Quadrado cor='green' />

        <Quadrado cor='yellow' />
        <QuadradoGrande cor='blue'>
          <Frase>ORDEM E PROGESSO</Frase>
        </QuadradoGrande>
        <Quadrado cor='yellow' />

        <Quadrado cor='green' />
        <Quadrado cor='yellow' />
        <QuadradoMedio cor='blue' />
        <Quadrado cor='yellow' />
        <Quadrado cor='green' />

        <Quadrado cor='green' />
        <Quadrado cor='green' />
        <Quadrado cor='yellow' />
        <Quadrado cor='blue' />
        <Quadrado cor='yellow' />
        <Quadrado cor='green' />
        <Quadrado cor='green' />

        <QuadradoMedio cor='green' />
        <Quadrado cor='yellow' />
        <QuadradoMedio cor='green' />

      </Header>

    </Pagina>
  );
}
