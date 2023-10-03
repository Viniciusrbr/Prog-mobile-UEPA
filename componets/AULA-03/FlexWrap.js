import styled from 'styled-components';

const Header = styled.View`
  flex-direction: row;
  background-color: #ddd;
  height: 200px;
  flex-wrap: wrap;
  justify-content: center;
`

const Quadrado = styled.View`
  background-color: ${props => props.cor};
  width: 50px;
  height: 50px;
`;

const Pagina = styled.View`
  flex:1;
`;

export default function FlexWrap() {
  return (
    <Pagina>

      <Header >
        <Quadrado cor='red' />
        <Quadrado cor='red' />
        <Quadrado cor='blue' />
        <Quadrado cor='white' />
        <Quadrado cor='yellow' />
        <Quadrado cor='green' />
        <Quadrado cor='blue' />
        <Quadrado cor='white' />
        <Quadrado cor='yellow' />
        <Quadrado cor='green' />
        <Quadrado cor='blue' />
        <Quadrado cor='white' />
        <Quadrado cor='yellow' />
        <Quadrado cor='green' />
      </Header>

    </Pagina>
  );
}
