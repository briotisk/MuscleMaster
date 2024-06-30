import { StyleSheet, View, Dimensions, TouchableHighlight, TextInput, Image, TouchableOpacity } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { Link } from 'expo-router';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function Treinar() {

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title} type="title">Adicione um exercício</ThemedText>
      
      <TextInput style={styles.textInput} placeholder="Nome do exercício*"/>
      <TextInput style={styles.textInput} placeholder="Carga*"/>
      <TouchableHighlight style={styles.btt}>
        <Link href="/pages/Recordes"><View>
                <ThemedText type="default">Adicionar</ThemedText>
            </View></Link>
        </TouchableHighlight>

      <ThemedView style={styles.bottomBar}>
        <TouchableOpacity style={styles.bottomButton}>
          <ThemedText style={styles.bottomButtonText}>Home</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton}>
        <Link href="/pages/TreinosCadastrados"><ThemedText style={styles.bottomButtonText}>Treinos</ThemedText></Link>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton}>
          <ThemedText style={styles.bottomButtonText}>Treinar</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton}>
        <Link href="/pages/Recordes"><ThemedText style={styles.bottomButtonText}>Recordes</ThemedText></Link>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton}>
        <Link href="/pages/Perfil"><ThemedText style={styles.bottomButtonText}>Perfil</ThemedText></Link>
        </TouchableOpacity>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
    
    title: {
        color: '#fbba00',
    },
    container: {
        height: screenHeight,
        flex: 0,
        alignItems: 'center',
        paddingTop: 40,
        paddingBottom: 40,
        gap: 8,
    },
    textInput: {
        width: '80%',
        height: 55,
        padding: 8,
        marginVertical: 8,
        backgroundColor: '#FBBA00',
        borderRadius: 10,
        alignItems: 'left',
        justifyContent: 'center',
    },
    bottomBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#FBBA00', // Cor de fundo da barra
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        height: 60,
        position: 'absolute', // Torna a barra fixa
        bottom: 130,
      },
      bottomButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      bottomButtonText: {
        fontSize: 16,
        color: '#333',
      },
      smallSubtitle: {
        fontSize: 22,
        color: '#333',
    },
    btt: {
        margin: 10,
    },
    
});