import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';

const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
`;

const Title = styled.Text`
    text-align: center;
    margin-top: 30px;
    font-size: 30px;
    font-weight: bold;
`;

const Input = styled.TextInput`
    background-color: #DDD;
    border-radius: 10px;
    margin: 15px;
    padding: 10px;
    font-size: 23px;
    color: #000;
`;

const Botao = styled.TouchableOpacity`  
    background-color: #41aef4;
    justify-content: center;
    align-items: center;
    margin: 15px;
    padding: 10px;
    border-radius: 10px;
`;

const TextoBotao = styled.Text`
    color: #FFF;
    font-size: 25px;
`;

function CalculadoraIMC() {

    const [peso, setPeso] = useState('')
    const [altura, setAltura] = useState('')

    const CalcularIMC = () => {
        const alt = altura / 100
        const imc = peso / (alt * alt)

        if (imc < 18.6) {
            alert(`Você está Abaixo do peso - IMC = ${imc.toFixed(2)}`)
        }
        else if (imc >= 18.6 && imc < 24.9) {
            alert(`Você está com o peso ideal - IMC = ${imc.toFixed(2)}`)
        }
        else if (imc >= 24.9 && imc < 34.9) {
            alert(`Você está levemente acima do peso - IMC = ${imc.toFixed(2)}`)
        }
        else if (imc >= 34.9) {
            alert(`Você está acima do peso - IMC = ${imc.toFixed(2)}`)
        }

        setPeso('')
        setAltura('')
    }

    return (
        <Container>
            <Title>Calcule seu IMC</Title>

            <Input
                keyboardType="numeric"
                placeholder="Digite seu peso (Kg)"
                value={peso}
                onChangeText={text => setPeso(text)}
            />
            <Input
                keyboardType="numeric"
                placeholder="Digite sua altura (cm)"
                value={altura}
                onChangeText={text => setAltura(text)}
            />

            <Botao onPress={CalcularIMC} >
                <TextoBotao>Calcular</TextoBotao>
            </Botao>
        </Container>
    )
}

export default CalculadoraIMC