import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function AppStyledSheet() {
    return (
        <View style={estilo.pagina}>
            <Text style={{ color: '#ffff', fontSize: 25 }}>Olá mundo!</Text>
            <Text style={estilo.pagina}>Segundo ola mundo!</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const estilo = StyleSheet.create({
    pagina: {
        width: 200,
        height: 200,
        backgroundColor: '#ff0000',
    },

    texto: {
        color: '#ffff',
        fontSize: 25
    },
});
