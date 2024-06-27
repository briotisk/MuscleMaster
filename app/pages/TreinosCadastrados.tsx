import { StyleSheet, View, Dimensions, TouchableHighlight, TextInput, Image, TouchableOpacity } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function TreinosCadastrados() {

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title} type="title">Muscle Master</ThemedText>
      
      <ThemedView style={styles.treinoContainer}>
        <ThemedText type="subtitle">Treino X</ThemedText>
      </ThemedView>
      <ThemedView style={styles.treinoContainer}>
        <ThemedText type="subtitle">Treino X</ThemedText>
      </ThemedView>
      <ThemedView style={styles.treinoContainer}>
        <ThemedText type="subtitle">Treino X</ThemedText>
      </ThemedView>
      <ThemedView style={styles.treinoContainer}>
        <ThemedText type="subtitle">Treino X</ThemedText>
      </ThemedView>

      <ThemedView style={styles.bottomBar}>
        <TouchableOpacity style={styles.bottomButton}>
          <ThemedText style={styles.bottomButtonText}>Home</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton}>
          <ThemedText style={styles.bottomButtonText}>Treinos</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton}>
          <ThemedText style={styles.bottomButtonText}>Treinar</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton}>
          <ThemedText style={styles.bottomButtonText}>Recordes</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton}>
          <ThemedText style={styles.bottomButtonText}>Perfil</ThemedText>
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
    treinoContainer: {
        width: '80%',
        height: 100,
        padding: 20,
        marginVertical: 10,
        backgroundColor: '#FBBA00',
        borderRadius: 10,
        alignItems: 'center',
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
        marginTop: 100, // Margem superior
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
    
});