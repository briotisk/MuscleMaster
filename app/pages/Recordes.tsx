import { StyleSheet, View, Dimensions, TouchableHighlight, TextInput, Image, TouchableOpacity } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { Link } from 'expo-router';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function Recordes() {

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title} type="title">Muscle Master</ThemedText>
      
      <ThemedView style={styles.exercicioContainer}>
        <ThemedText type="subtitle">Supino</ThemedText><ThemedText style={styles.smallSubtitle} type="subtitle">60kg</ThemedText>
      </ThemedView>
      <ThemedView style={styles.exercicioContainer}>
      <ThemedText type="subtitle">Agachamento</ThemedText><ThemedText style={styles.smallSubtitle} type="subtitle">100kg</ThemedText>
      </ThemedView>
      <ThemedView style={styles.exercicioContainer}>
      <ThemedText type="subtitle">Puxada alta</ThemedText><ThemedText style={styles.smallSubtitle} type="subtitle">60kg</ThemedText>
      </ThemedView>
      <ThemedView style={styles.exercicioContainer}>
      <ThemedText type="subtitle">Rosca</ThemedText><ThemedText style={styles.smallSubtitle} type="subtitle">30kg</ThemedText>
      </ThemedView>
      <ThemedView style={styles.exercicioContainer}>
      <ThemedText type="subtitle">Tríceps corda</ThemedText><ThemedText style={styles.smallSubtitle} type="subtitle">30kg</ThemedText>
      </ThemedView>
      <ThemedView style={styles.exercicioContainer}>
      <ThemedText type="subtitle">Remada</ThemedText><ThemedText style={styles.smallSubtitle} type="subtitle">26kg</ThemedText>
      </ThemedView>
      <ThemedView style={styles.exercicioContainer}>
      <ThemedText type="subtitle">Stiff</ThemedText><ThemedText style={styles.smallSubtitle} type="subtitle">60kg</ThemedText>
      </ThemedView>

      <ThemedView style={styles.bottomBar}>
        <TouchableOpacity style={styles.bottomButton}>
          <ThemedText style={styles.bottomButtonText}>Home</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton}>
        <Link href="/pages/TreinosCadastrados"><ThemedText style={styles.bottomButtonText}>Treinos</ThemedText></Link>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton}>
            <Link href="/pages/Treinar"><ThemedText style={styles.bottomButtonText}>Treinar</ThemedText></Link>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton}>
          <ThemedText style={styles.bottomButtonText}>Recordes</ThemedText>
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
    exercicioContainer: {
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
    
});