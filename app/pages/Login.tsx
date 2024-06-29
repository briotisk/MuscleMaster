import { StyleSheet, View, Dimensions, TouchableHighlight, TextInput, Image } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
//Teste de commit
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function Login() {

  return (
        <ThemedView style={styles.container}>
            <ThemedText style={styles.title} type="title">Muscle Master</ThemedText>
            <Image source={require('@/assets/images/SignUpImg.png')} style={styles.img}/>
            <ThemedText type="subtitle">Create an account</ThemedText>
            <ThemedText type="default">Enter your email to sign up for this app</ThemedText>
            <TextInput style={styles.textInput} placeholder="Email"/>
            <TouchableHighlight style={styles.btt}>
                <View>
                    <ThemedText type="default">Sign up with email</ThemedText>
                </View>
            </TouchableHighlight>
            <ThemedText type="default">------------ or continue with ------------</ThemedText>
        </ThemedView>
  );
}

const styles = StyleSheet.create({
    img: {
        margin: 40,
        width: 200, 
        height: 200,
    },
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
        height: 40,
        borderColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 10,
        color: 'gray',
        backgroundColor: '#ffffff',
        marginBottom: 10,
        paddingLeft: 10,
        width: screenWidth*0.8, 
    },
    btt: {
        alignItems: 'center',
        backgroundColor: '#000000',
        padding: 10,
        borderRadius: 10,
        width: screenWidth*0.8, 
    },
});