import styled from 'styled-components';

const Header = styled.View`
  flex-direction: row;
  justify-content: center;
  background-color: #ddd;
  height: 200px;
  align-items: center;
`

const Quadrado = styled.View`
  background-color: ${props => props.cor};
  width: 50px;
  height: 50px;
`;

const Pagina = styled.View`
  flex:1;
  justify-content: center;
`;

export default function AppFlex03() {
  return (
    <Pagina>

      <Header >
        <Quadrado cor='red' />
        <Quadrado cor='green' />
        <Quadrado cor='blue' />
        <Quadrado cor='#fff000' />
      </Header>

    </Pagina>
  );
}
