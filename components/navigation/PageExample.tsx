import { StyleSheet, View, Dimensions, TouchableHighlight, TextInput, Image } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function PageExample() {

  return (
        <ThemedView style={styles.container}>
            <ThemedText style={styles.title} type="title">Muscle Master</ThemedText>
            <ThemedText type="subtitle">Página de exemplo</ThemedText>
            <ThemedText type="default">Modificar esse código pra criar uma nova tela</ThemedText>
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
    
});