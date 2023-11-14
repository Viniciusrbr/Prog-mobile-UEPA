import styled from "styled-components"
import { useState } from "react";

const Page = styled.SafeAreaView`
    flex: 1;
    align-items: center;
`

const HeaderText = styled.Text`
    font-size: 25px;
    margin-top: 30px;
`;

const Input = styled.TextInput`
    width: 90%;
    height: 50px;
    font-size: 18px;
    background-color: #EEE;
    margin-top: 20px;
    border-radius: 10px;
    padding: 10px;
`;

const CalcButton = styled.TouchableOpacity`
    
`;

const CalcButtonText = styled.Text`
    font-size: 18px;
    color: #FFF;
    background-color: #1E90FF;
    padding: 10px;
    border-radius: 10px;
`;

const ResultArea = styled.View`
    width: 100%;
    margin-top: 30px;
    background-color: #EEE;
    padding: 20px;
    justify-content: center;
    align-items: center;
`;

const ResultItemTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
`;

const ResultItem = styled.Text`
    font-size: 15px;
    margin-bottom: 30px;
`;

const PctArea = styled.View`
    flex-direction: row;
    margin: 20px;
`;

const PctItem = styled.TouchableOpacity`
    margin: 10px;
`;

const PctText = styled(CalcButtonText)`
`;

function CalculadoraDeGorjeta() {
    const [bill, setBill] = useState('') // conta
    const [tip, setTip] = useState(0) // gorjeta
    const [pct, setPct] = useState() // porcentagem

    const calc = () => {
        let nBill = parseFloat(bill);

        nBill ? setTip((pct / 100) * nBill) : alert("Digite o valor da conta");
    }

    return (
        <Page>
            <HeaderText>Calculadora de Gorjeta</HeaderText>
            <Input
                placeholder="Quanto deu a conta?"
                placeholderTextColor="#000"
                keyboardType="numeric"
                value={bill}
                onChangeText={n => setBill(n)}
            />

            <PctArea>

                <PctItem onPress={() => setPct(5)} >
                    <PctText>5%</PctText>
                </PctItem>

                <PctItem onPress={() => setPct(10)} >
                    <PctText>10%</PctText>
                </PctItem>

                <PctItem onPress={() => setPct(15)} >
                    <PctText>15%</PctText>
                </PctItem>

                <PctItem onPress={() => setPct(20)} >
                    <PctText>20%</PctText>
                </PctItem>

            </PctArea>

            <CalcButton onPress={calc} >
                <CalcButtonText>{`Calcular ${pct ? pct + '%' : ''}`}</CalcButtonText>
            </CalcButton>

            {tip > 0 &&
                <ResultArea>

                    <ResultItemTitle>Valor da Conta</ResultItemTitle>
                    <ResultItem>R$ {bill ? parseFloat(bill).toFixed(2) : ''}</ResultItem>

                    <ResultItemTitle>Valor da Gorjeta</ResultItemTitle>
                    <ResultItem>R$ {tip.toFixed(2)} ({pct}%)</ResultItem>

                    <ResultItemTitle>Valor Total</ResultItemTitle>
                    <ResultItem>R$ {bill ? (parseFloat(bill) + tip).toFixed(2) : ''}</ResultItem>

                </ResultArea>
            }

        </Page>
    )
}

export default CalculadoraDeGorjeta