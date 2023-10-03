import { Image } from 'react-native';
import styled from 'styled-components';

const Header = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  background-color: #ddd;
  height: 500px;
`

const Quadrado = styled.View`
  background-color: ${props => props.cor};
  width: 150px;
  height: 150px;
  justify-content: center;
  align-items: center;
`;

const Pagina = styled.View`
  flex:1;
  justify-content: center;
`;

export default function AppImagens() {
  return (
    <Pagina>

      <Header >
        <Quadrado cor='red' />

        <Quadrado cor='green'>
          <Image source={require('./src/images/pingu.jpg')}
            style={{ width: 100, height: 100, borderRadius: 50 }}
            resizeMode='cover'
          />
        </Quadrado>
        {/* cover, contain, stretch, repeat, center */}
        <Quadrado cor='blue' >
          <Image source={{ uri: 'https://i.pinimg.com/236x/72/c7/db/72c7db4b2a1e70d40a895f965e058036.jpg' }}
            style={{ width: 100, height: 100, borderRadius: 50 }}
            resizeMode='cover'
          />
        </Quadrado>
      </Header>

    </Pagina>
  );
}
