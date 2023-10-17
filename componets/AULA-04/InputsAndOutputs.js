import { useState } from "react"
import styled from "styled-components"
import { Text, View } from "react-native"

const Pagina = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Entrada = styled.TextInput`
  width: 200px;
  height: 40px;
  border: 1px solid #000;
  margin: 10px;
  padding: 10px;
`;

const Hello = function () {

    const [name, setName] = useState("BES 2021")

    return (
        <View>

            <Text>
                Olá: {name}
            </Text>

            <Entrada
                placeholder="Digite seu nome"
                onChangeText={text => setName(text)}
                defaultValue={name}
            />

        </View>

    )
}

function InputsAndOutputs() {

    return (
        <Pagina>
            <Hello />
        </Pagina>
    )
}

export default InputsAndOutputs