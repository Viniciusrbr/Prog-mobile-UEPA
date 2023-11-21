import { useState } from "react";
import { Text, View, StyleSheet } from "react-native"
import TabelaCursos from "@react-native-async-storage/async-storage";

function AsyncApp() {
    const [curso, setCurso] = useState(null)

    // função de armanzenamento de dados
    // recebe e grava chave e valor
    const Armazenar = (chave, valor) => {
        TabelaCursos.setItem(chave, valor)
    }

    const Buscar = async (chave) => {
        const valor = await TabelaCursos.getItem(chave)
        setCurso(valor)
    }

    // gravando os cursos
    Armazenar("01", "Engenharia de Software")
    Armazenar("02", "Sistemas de Informação")
    Armazenar("03", "Ciência da Computação")
    Armazenar("04", "Análise e Desenvolvimento de Sistemas")

    // deletando 1  item
    // TabelaCursos.removeItem("01")

    // buscando os cursos
    Buscar("01")

    return (
        <View style={styles.container} >
            <Text>Armazenamento Local / Asyc Storage</Text>
            <Text>Curso: {curso}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center"
    }
})

export default AsyncApp