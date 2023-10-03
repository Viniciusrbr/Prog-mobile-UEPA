import styled from 'styled-components';

const Pagina = styled.View`
  flex: 1;
  background-color: #3E92CC;
  align-items: center;
  justify-content: center;
`;

const Titulo = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;

const Descricao = styled.Text`
  margin: 30px 0px;
  font-size: 18px;
  color: #fff;
`;

const ImagensInternas = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const Imagem = styled.Image`
  border: 4px solid #fff;
`;

export default function Carros() {
    return (
        <Pagina>
            <Titulo>Galeria de imagens do Vinicius</Titulo>
            <Descricao>Imagens de carros</Descricao>

            <ImagensInternas>
                <Imagem source={require('../../src/images/carros/carro01.jpeg')}
                    style={{ width: 160, height: 160 }}
                    resizeMode='cover'
                />
                <Imagem source={require('../../src/images/carros/carro02.jpg')}
                    style={{ width: 160, height: 160 }}
                    resizeMode='cover'
                />
                <Imagem source={require('../../src/images/carros/carro03.jpg')}
                    style={{ width: 160, height: 160 }}
                    resizeMode='cover'
                />
                <Imagem source={require('../../src/images/carros/carro04.jpg')}
                    style={{ width: 160, height: 160 }}
                    resizeMode='cover'
                />
            </ImagensInternas>

            <Imagem source={{ uri: 'https://images.pexels.com/photos/2533092/pexels-photo-2533092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
                style={{ width: 320, height: 160 }}
                resizeMode='cover'
            />

        </Pagina>
    );
}
